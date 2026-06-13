import { NextResponse, type NextRequest } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import type { WaitlistLead } from "@/lib/waitlist";

/* In-memory rate limiting needs a warm runtime (not edge). */
export const runtime = "nodejs";

/* Resolve the client IP: x-forwarded-for (first), then x-real-ip, else unknown. */
function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  const real = req.headers.get("x-real-ip");
  if (real) return real.trim();
  return "unknown";
}

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

type ClickUpTaskPayload = {
  name: string;
  description: string;
  status?: string;
};

function formatSubmittedAt(date: Date): string {
  const formatted = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
  return `${formatted} IST`;
}


/* Create a task in a ClickUp list. The token is sent in the Authorization
   header only — never logged. */
function createClickUpTask(
  listId: string,
  token: string,
  payload: ClickUpTaskPayload,
): Promise<Response> {
  return fetch(`https://api.clickup.com/api/v2/list/${listId}/task`, {
    method: "POST",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export async function POST(req: NextRequest) {
  /* 1. Parse body */
  let body: Partial<WaitlistLead>;
  try {
    body = (await req.json()) as Partial<WaitlistLead>;
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  /* 2. Honeypot — silently accept (no task) so bots think they succeeded. */
  if (asString(body.website) !== "") {
    return NextResponse.json({ success: true, message: "Thanks!" });
  }

  /* 3. IP-based rate limiting */
  if (!rateLimit(getClientIp(req)).ok) {
    return NextResponse.json(
      { success: false, message: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  /* 4. Validate required fields */
  const businessName = asString(body.businessName);
  const phoneNumber = asString(body.phoneNumber);
  const businessType = asString(body.businessType);
  const city = asString(body.city);

  if (!businessName || !phoneNumber || !businessType || !city) {
    return NextResponse.json(
      { success: false, message: "Please fill in all required fields." },
      { status: 400 },
    );
  }

  /* 5. Required server config */
  const token = process.env.CLICKUP_API_TOKEN;
  const listId = process.env.CLICKUP_LIST_ID;
  if (!token || !listId) {
    console.error("[waitlist] Missing ClickUp configuration (token/list id).");
    return NextResponse.json(
      {
        success: false,
        message: "Service temporarily unavailable. Please try again later.",
      },
      { status: 500 },
    );
  }

  /* 6. Create the ClickUp task */
  const submittedAt = formatSubmittedAt(new Date());
  const description = [
    `Business Name : ${businessName}`,
    `Phone Number  : ${phoneNumber}`,
    `Business Type : ${businessType}`,
    `City          : ${city}`,
    `Source        : Website Waitlist`,
    `Submitted At  : ${submittedAt}`,
  ].join("\n");

  const defaultStatus = process.env.CLICKUP_DEFAULT_STATUS?.trim();

  const clickUpPayload: ClickUpTaskPayload = {
    name: `${businessName} - ${city}`,
    description,
  };
  if (defaultStatus) {
    clickUpPayload.status = defaultStatus;
  }

  try {
    let clickupRes = await createClickUpTask(listId, token, clickUpPayload);

    /* If the configured status is invalid, retry once without it so ClickUp
       falls back to the list's default status. */
    if (clickupRes.status === 400 && clickUpPayload.status) {
      const detail = await clickupRes.text().catch(() => "");
      if (detail.includes("Status not found") || detail.includes("CRTSK_001")) {
        console.error(
          "[waitlist] ClickUp status invalid, retrying without status",
        );
        clickupRes = await createClickUpTask(listId, token, {
          name: clickUpPayload.name,
          description: clickUpPayload.description,
        });
      }
    }

    if (!clickupRes.ok) {
      console.error(
        `[waitlist] ClickUp task creation failed with status: ${clickupRes.status}`,
      );
      return NextResponse.json(
        {
          success: false,
          message: "Could not submit waitlist form. Please try again.",
        },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error(
      "[waitlist] ClickUp request failed:",
      error instanceof Error ? error.message : "unknown error",
    );
    return NextResponse.json(
      {
        success: false,
        message: "Could not submit waitlist form. Please try again.",
      },
      { status: 502 },
    );
  }

  /* 7. Success */
  return NextResponse.json({
    success: true,
    message: "Thanks! We've added your business to the Grazify waitlist.",
  });
}

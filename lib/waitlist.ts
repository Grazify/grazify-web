/* Shared (client-safe) waitlist types + submit helper.
   This file must NOT import any server-only secrets. */

export type WaitlistLead = {
  businessName: string;
  phoneNumber: string;
  businessType: string;
  city: string;
  /* Honeypot — should always be empty for real users. */
  website?: string;
};

export type WaitlistResponse = {
  success: boolean;
  message?: string;
};

/* Error carrying the HTTP status so callers can special-case 429, etc. */
export class WaitlistError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "WaitlistError";
    this.status = status;
  }
}

/* Submit a waitlist lead to the serverless API route. */
export async function submitWaitlistLead(
  data: WaitlistLead,
): Promise<WaitlistResponse> {
  let res: Response;
  try {
    res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch {
    throw new WaitlistError("Network request failed.", 0);
  }

  let json: WaitlistResponse = { success: false };
  try {
    json = (await res.json()) as WaitlistResponse;
  } catch {
    /* Non-JSON response — fall back to status-based error below. */
  }

  if (!res.ok || !json.success) {
    throw new WaitlistError(json.message ?? "Request failed.", res.status);
  }

  return json;
}

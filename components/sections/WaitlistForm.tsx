"use client";

import { useState } from "react";
import {
  Building2,
  CheckCircle2,
  ChevronDown,
  MapPin,
  Phone,
  Store,
} from "lucide-react";
import { businessTypes } from "@/lib/constants";
import { submitWaitlistLead, WaitlistError } from "@/lib/waitlist";
import { cn } from "@/lib/utils";

type Feedback = { type: "success" | "error"; text: string };

const SUCCESS_MESSAGE =
  "Thanks! We've added your business to the Grazify waitlist.";
const ERROR_MESSAGE = "Something went wrong. Please try again.";
const RATE_LIMITED_MESSAGE = "Too many attempts. Please try again later.";

const fieldClass =
  "flex h-[52px] items-center gap-2.5 rounded-2xl border border-grazify-border bg-grazify-soft px-4 transition focus-within:border-grazify-primary focus-within:bg-white focus-within:ring-4 focus-within:ring-grazify-primary/10";
const controlClass =
  "h-full w-full bg-transparent text-sm text-ink placeholder:text-muted/80 focus:outline-none";
const labelClass = "mb-1.5 block text-sm font-semibold text-ink";

export default function WaitlistForm() {
  const [businessName, setBusinessName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [city, setCity] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    /* Client-side validation */
    if (
      !businessName.trim() ||
      phoneNumber.trim().length !== 10 ||
      !businessType.trim() ||
      !city.trim()
    ) {
      setFeedback({
        type: "error",
        text: phoneNumber.trim().length > 0 && phoneNumber.trim().length !== 10
          ? "Please enter a valid 10-digit phone number."
          : "Please fill in all fields.",
      });
      return;
    }

    setSubmitting(true);
    setFeedback(null);

    try {
      await submitWaitlistLead({
        businessName: businessName.trim(),
        phoneNumber: `+91 ${phoneNumber.trim()}`,
        businessType,
        city: city.trim(),
        website,
      });
      setFeedback({ type: "success", text: SUCCESS_MESSAGE });
      setBusinessName("");
      setPhoneNumber("");
      setBusinessType("");
      setCity("");
      setWebsite("");
    } catch (error) {
      const text =
        error instanceof WaitlistError && error.status === 429
          ? RATE_LIMITED_MESSAGE
          : ERROR_MESSAGE;
      setFeedback({ type: "error", text });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      aria-label="Join the Grazify business waitlist"
      className="space-y-5"
      onSubmit={handleSubmit}
      noValidate
    >
      {/* Honeypot — hidden from users, screen readers and keyboard */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-9999px] top-[-9999px] h-px w-px overflow-hidden opacity-0"
      >
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="business-name" className={labelClass}>
          Business name
        </label>
        <div className={fieldClass}>
          <Building2 className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
          <input
            id="business-name"
            name="businessName"
            type="text"
            autoComplete="organization"
            placeholder="Your business name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className={controlClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone number
        </label>
        <div className={fieldClass}>
          <Phone className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
          <span className="shrink-0 select-none border-r border-grazify-border pr-2.5 text-sm font-medium text-ink/70">
            +91
          </span>
          <input
            id="phone"
            name="phoneNumber"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="10-digit number"
            maxLength={10}
            value={phoneNumber}
            onChange={(e) =>
              setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10))
            }
            className="h-full min-w-0 flex-1 bg-transparent pl-2.5 text-sm text-ink placeholder:text-muted/80 focus:outline-none"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="business-type" className={labelClass}>
            Business type
          </label>
          <div className={fieldClass}>
            <Store className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
            <select
              id="business-type"
              name="businessType"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              className={cn(
                "h-full w-full appearance-none bg-transparent text-sm focus:outline-none",
                businessType ? "text-ink" : "text-muted/80",
              )}
            >
              <option value="" disabled>
                Select business type
              </option>
              {businessTypes.map((type) => (
                <option key={type.label} value={type.label}>
                  {type.label}
                </option>
              ))}
            </select>
            <ChevronDown
              className="h-4 w-4 shrink-0 text-muted"
              aria-hidden="true"
            />
          </div>
        </div>

        <div>
          <label htmlFor="city" className={labelClass}>
            City
          </label>
          <div className={fieldClass}>
            <MapPin className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
            <input
              id="city"
              name="city"
              type="text"
              autoComplete="address-level2"
              placeholder="Your city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className={controlClass}
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary w-full py-3.5 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? "Joining…" : "Join Waitlist"}
      </button>

      {feedback ? (
        <p
          role="status"
          aria-live="polite"
          className={cn(
            "flex items-center justify-center gap-2 text-center text-sm font-medium",
            feedback.type === "success" ? "text-grazify-primary" : "text-red-600",
          )}
        >
          {feedback.type === "success" ? (
            <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
          ) : null}
          {feedback.text}
        </p>
      ) : (
        <p className="text-center text-xs text-muted">
          Grazify is a B2B platform. We&apos;ll only reach out about business
          supply access.
        </p>
      )}
    </form>
  );
}

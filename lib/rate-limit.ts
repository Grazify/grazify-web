/* Simple in-memory, IP-based rate limiter.

   NOTE: This is fine for a small waitlist / early deployment, but the state
   lives in process memory – it resets on serverless cold starts and is not
   shared across multiple instances. Swap for a shared store (e.g. Redis/KV)
   if you need strict, global limits. */

type Bucket = {
  count: number;
  resetAt: number;
};

const DEFAULT_MAX = 5;
const DEFAULT_WINDOW_MS = 60_000;

const buckets = new Map<string, Bucket>();
let lastSweep = 0;

export type RateLimitResult = {
  ok: boolean;
  retryAfterMs: number;
};

function positiveInt(value: string | undefined, fallback: number): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

export function rateLimit(ip: string): RateLimitResult {
  const max = positiveInt(process.env.WAITLIST_RATE_LIMIT_MAX, DEFAULT_MAX);
  const windowMs = positiveInt(
    process.env.WAITLIST_RATE_LIMIT_WINDOW_MS,
    DEFAULT_WINDOW_MS,
  );
  const now = Date.now();

  /* Occasionally drop expired buckets so memory stays bounded. */
  if (now - lastSweep > windowMs) {
    for (const [key, bucket] of buckets) {
      if (now > bucket.resetAt) buckets.delete(key);
    }
    lastSweep = now;
  }

  const bucket = buckets.get(ip);

  if (!bucket || now > bucket.resetAt) {
    buckets.set(ip, { count: 1, resetAt: now + windowMs });
    return { ok: true, retryAfterMs: windowMs };
  }

  if (bucket.count >= max) {
    return { ok: false, retryAfterMs: bucket.resetAt - now };
  }

  bucket.count += 1;
  return { ok: true, retryAfterMs: bucket.resetAt - now };
}

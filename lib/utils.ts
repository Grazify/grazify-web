type ClassValue = string | number | false | null | undefined;

/* Merge class names */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

/* Format a number as Indian Rupees */
export function formatPrice(value: number): string {
  return `₹${value.toLocaleString("en-IN")}`;
}

type ClassValue = string | number | false | null | undefined;

/* Merge class names */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

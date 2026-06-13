import {
  CalendarClock,
  Eye,
  IndianRupee,
  MapPin,
  Microscope,
  Monitor,
  Network,
  Package,
  ShieldCheck,
  Smartphone,
  Sprout,
  TabletSmartphone,
  Truck,
  type LucideIcon,
} from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export type HeroChip = {
  emoji: string;
  label: string;
};

export type SupplyStep = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProductCategory = {
  emoji: string;
  title: string;
  description: string;
};

export type BusinessType = {
  emoji: string;
  label: string;
  note: string;
};

export type QualityFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type PlatformCard = {
  name: string;
  description: string;
  icon: LucideIcon;
};

export type PreviewScreen = {
  id: string;
  title: string;
  caption: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type MockProduct = {
  name: string;
  local: string;
  emoji: string;
  unit: string;
  price: number;
  mrp: number;
  discount: string;
  delivery: string;
  tint: string;
};

/* Header navigation */
export const navLinks: NavLink[] = [
  { label: "Supply Chain", href: "#supply-chain" },
  { label: "Products", href: "#products" },
  { label: "Quality", href: "#quality" },
  { label: "Platforms", href: "#platforms" },
  { label: "FAQ", href: "#faq" },
];

/* Hero chips */
export const heroChips: HeroChip[] = [
  { emoji: "♻️", label: "Sustainable sourcing" },
  { emoji: "✅", label: "Quality checked" },
  { emoji: "🚚", label: "Reliable delivery" },
  { emoji: "📦", label: "Wholesale supply" },
];

/* Supply steps */
export const supplySteps: SupplyStep[] = [
  {
    step: "01",
    title: "Source from farms",
    description:
      "We partner directly with local farms and food producers to bring in fresh raw ingredients at the source.",
    icon: Sprout,
  },
  {
    step: "02",
    title: "Inspect and quality check",
    description:
      "Every batch is inspected for freshness, grade, and safety so only quality-passed produce moves forward.",
    icon: Microscope,
  },
  {
    step: "03",
    title: "Pack for freshness",
    description:
      "Items are sorted, weighed, and packed under hygienic conditions to lock in freshness for transit.",
    icon: Package,
  },
  {
    step: "04",
    title: "Deliver to businesses",
    description:
      "Scheduled wholesale shipments reach your kitchen or store on time, with traceable origin on every order.",
    icon: Truck,
  },
];

/* Product categories */
export const productCategories: ProductCategory[] = [
  {
    emoji: "🧺",
    title: "Everyday Essentials",
    description: "High-rotation staples your kitchen reorders every week.",
  },
  {
    emoji: "🥬",
    title: "Leafy Greens",
    description: "Spinach, methi, coriander and more, picked fresh daily.",
  },
  {
    emoji: "🥕",
    title: "Root Vegetables",
    description: "Onion, potato, ginger, garlic and other ground produce.",
  },
  {
    emoji: "🍅",
    title: "Fruiting Vegetables",
    description: "Tomato, capsicum, brinjal and seasonal fruiting veg.",
  },
  {
    emoji: "🍎",
    title: "Fruits",
    description: "Seasonal fruit sourced ripe and graded for businesses.",
  },
  {
    emoji: "🥛",
    title: "Dairy",
    description: "Milk, paneer, curd and butter with cold-chain handling.",
  },
  {
    emoji: "🍗",
    title: "Meat & Poultry",
    description: "Fresh chicken, mutton and eggs, hygienically processed.",
  },
  {
    emoji: "🌾",
    title: "Grains & Staples",
    description: "Rice, atta, pulses and dry staples in bulk quantities.",
  },
  {
    emoji: "🌶️",
    title: "Spices & Aromatics",
    description: "Whole and ground spices for consistent kitchen flavour.",
  },
  {
    emoji: "🧾",
    title: "Custom Business Orders",
    description: "Tell us your recipe sheet and we build a custom supply list.",
  },
];

/* Business types */
export const businessTypes: BusinessType[] = [
  { emoji: "🍽️", label: "Restaurants", note: "Daily fresh produce on schedule" },
  { emoji: "☕", label: "Cafés", note: "Small-batch, reliable top-ups" },
  { emoji: "🍱", label: "Canteens", note: "High-volume staples at scale" },
  { emoji: "🏨", label: "Hotels", note: "Multi-kitchen consolidated supply" },
  { emoji: "👨‍🍳", label: "Cloud Kitchens", note: "Predictable inputs for every brand" },
  { emoji: "🛒", label: "Retail Chains", note: "Store-ready wholesale grocery" },
  { emoji: "🏛️", label: "Institutions", note: "Schools, offices and hospitals" },
  { emoji: "🏭", label: "Food Manufacturers", note: "Raw ingredients in bulk" },
];

/* Quality features */
export const qualityFeatures: QualityFeature[] = [
  {
    title: "Traceable origin",
    description: "Know which farm or producer each item came from on every order.",
    icon: MapPin,
  },
  {
    title: "Direct source network",
    description: "No layered middlemen, just a direct line from producers to you.",
    icon: Network,
  },
  {
    title: "Quality inspection",
    description: "Grade, freshness and safety checks before anything is packed.",
    icon: Microscope,
  },
  {
    title: "Scheduled supply",
    description: "Lock in recurring deliveries so stock never runs short.",
    icon: CalendarClock,
  },
  {
    title: "Business-only pricing",
    description: "Transparent wholesale rates built for B2B order volumes.",
    icon: IndianRupee,
  },
  {
    title: "Transparent delivery",
    description: "Live status from dispatch to doorstep on every shipment.",
    icon: Eye,
  },
];

/* Platform cards */
export const platformCards: PlatformCard[] = [
  {
    name: "Android App",
    description: "Order and reorder supply on the move from any Android device.",
    icon: Smartphone,
  },
  {
    name: "iOS App",
    description: "A polished ordering experience for your iPhone and iPad.",
    icon: TabletSmartphone,
  },
  {
    name: "Desktop Dashboard",
    description: "Manage procurement, schedules and invoices from one screen.",
    icon: Monitor,
  },
];

/* App preview screens */
export const previewScreens: PreviewScreen[] = [
  {
    id: "home",
    title: "Home listing",
    caption: "Browse fresh produce by category with live wholesale pricing.",
  },
  {
    id: "categories",
    title: "Categories",
    caption: "Jump straight to the section your kitchen needs.",
  },
  {
    id: "cart",
    title: "Cart",
    caption: "Review quantities, savings and your scheduled delivery slot.",
  },
  {
    id: "orders",
    title: "Orders",
    caption: "Track confirmed shipments and reorder past lists in a tap.",
  },
  {
    id: "details",
    title: "Order details",
    caption: "See itemised bills, taxes and verified origin per order.",
  },
];

/* FAQ */
export const faqs: Faq[] = [
  {
    question: "What is Grazify?",
    answer:
      "Grazify is a B2B grocery supply platform that connects local farms and food producers directly to businesses. We deliver fresh, traceable raw ingredients — vegetables, fruits, dairy, meat, poultry, grains and essentials — as a consistent wholesale supply.",
  },
  {
    question: "Who can use Grazify?",
    answer:
      "Grazify is built for businesses only: restaurants, cafés, canteens, hotels, cloud kitchens, retail chains, institutions and food manufacturers. If you buy ingredients in volume, Grazify is for you.",
  },
  {
    question: "What products does Grazify supply?",
    answer:
      "We supply fresh raw food ingredients sourced directly from farms and producers — leafy greens, root and fruiting vegetables, fruits, dairy, meat and poultry, grains, staples and spices. Every item is quality checked before delivery.",
  },
  {
    question: "Are Android, iOS and Desktop apps available?",
    answer:
      "Not yet. The Android app, iOS app and Desktop Dashboard are all Coming Soon. Join the business waitlist to get early access the moment they launch.",
  },
  {
    question: "How does Grazify ensure quality?",
    answer:
      "Products are sourced directly from farms and producers, then inspected for grade, freshness and safety, and packed hygienically before scheduled delivery. Every order carries traceable origin so you always know where your food came from.",
  },
  {
    question: "Is Grazify for individual customers?",
    answer:
      "No. Grazify is strictly a B2B supply platform and does not sell to individual consumers. Our pricing, quantities and delivery are designed entirely around business needs.",
  },
];

/* Mock products */
export const mockProducts: MockProduct[] = [
  {
    name: "Onion",
    local: "Kanda",
    emoji: "🧅",
    unit: "1.0 kg",
    price: 32,
    mrp: 36,
    discount: "11% OFF",
    delivery: "Tomorrow",
    tint: "from-fuchsia-100 to-rose-50",
  },
  {
    name: "Tomato",
    local: "Tamatar",
    emoji: "🍅",
    unit: "1.0 kg",
    price: 28,
    mrp: 34,
    discount: "18% OFF",
    delivery: "Tomorrow",
    tint: "from-red-100 to-orange-50",
  },
  {
    name: "Spinach",
    local: "Palak",
    emoji: "🥬",
    unit: "1.0 bunch",
    price: 20,
    mrp: 26,
    discount: "19% OFF",
    delivery: "Tomorrow",
    tint: "from-green-100 to-emerald-50",
  },
  {
    name: "Milk",
    local: "Doodh",
    emoji: "🥛",
    unit: "1.0 ltr",
    price: 54,
    mrp: 60,
    discount: "10% OFF",
    delivery: "Tomorrow",
    tint: "from-sky-100 to-blue-50",
  },
  {
    name: "Chicken",
    local: "Murgi",
    emoji: "🍗",
    unit: "1.0 kg",
    price: 210,
    mrp: 240,
    discount: "12% OFF",
    delivery: "Tomorrow",
    tint: "from-rose-100 to-pink-50",
  },
  {
    name: "Rice",
    local: "Chawal",
    emoji: "🌾",
    unit: "5.0 kg",
    price: 320,
    mrp: 360,
    discount: "11% OFF",
    delivery: "Tomorrow",
    tint: "from-amber-100 to-yellow-50",
  },
];

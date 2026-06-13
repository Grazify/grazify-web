import { ChevronDown, Home, LayoutGrid, MapPin, RotateCcw, Search, Tag } from "lucide-react";
import ProductCardMockup from "@/components/screens/ProductCardMockup";
import { mockProducts } from "@/lib/constants";

const navItems = [
  { label: "Home", icon: Home, active: true },
  { label: "Categories", icon: LayoutGrid, active: false },
  { label: "Order Again", icon: RotateCcw, active: false },
  { label: "Offers", icon: Tag, active: false },
];

/* Hero phone */
export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[320px] rounded-[2.75rem] border border-grazify-border bg-ink p-2.5 shadow-card">
      <div className="overflow-hidden rounded-[2.25rem] bg-white">
        {/* Notch */}
        <div className="flex justify-center bg-white pt-3">
          <span className="h-5 w-24 rounded-full bg-ink" />
        </div>

        <div className="px-4 pb-4 pt-3">
          {/* Location header */}
          <div className="flex items-center justify-between">
            <div>
              <p className="flex items-center gap-1 text-sm font-bold text-ink">
                <MapPin className="h-4 w-4 text-grazify-primary" aria-hidden="true" />
                Parner Bhavan
                <ChevronDown className="h-4 w-4 text-muted" aria-hidden="true" />
              </p>
              <p className="mt-0.5 text-[11px] text-muted">
                Dattraj Colony, Mangal Nagar
              </p>
            </div>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-grazify-light text-xs font-bold text-grazify-dark">
              G
            </span>
          </div>

          {/* Search bar */}
          <div className="mt-3 flex items-center gap-2 rounded-2xl border border-grazify-border bg-grazify-soft px-3 py-2.5">
            <Search className="h-4 w-4 text-muted" aria-hidden="true" />
            <span className="text-xs text-muted">Search &quot;cabbage&quot;</span>
          </div>

          {/* Product listing */}
          <p className="mt-4 text-sm font-bold text-ink">Everyday Essentials</p>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {mockProducts.slice(0, 4).map((product, index) => (
              <div
                key={product.name}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 140}ms` }}
              >
                <ProductCardMockup product={product} />
              </div>
            ))}
          </div>

          {/* Bottom nav */}
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-grazify-border bg-white px-2 py-2">
            {navItems.map((item) => (
              <span
                key={item.label}
                className={`flex flex-1 flex-col items-center gap-1 text-[10px] font-medium ${
                  item.active ? "text-grazify-primary" : "text-muted"
                }`}
              >
                <item.icon className="h-4 w-4" aria-hidden="true" />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

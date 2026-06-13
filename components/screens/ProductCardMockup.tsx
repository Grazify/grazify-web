import { Plus } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import type { MockProduct } from "@/lib/constants";

type ProductCardMockupProps = {
  product: MockProduct;
  className?: string;
};

/* Product card */
export default function ProductCardMockup({
  product,
  className,
}: ProductCardMockupProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl border border-grazify-border bg-white p-2.5",
        className,
      )}
    >
      {/* Product visual */}
      <div className="relative">
        <div
          className={cn(
            "grid aspect-square place-items-center rounded-xl bg-gradient-to-br text-3xl",
            product.tint,
          )}
        >
          <span aria-hidden="true">{product.emoji}</span>
        </div>
        <span className="absolute -bottom-3 right-1.5 inline-flex items-center gap-0.5 rounded-lg border border-grazify-primary bg-white px-2.5 py-1 text-[11px] font-bold uppercase text-grazify-primary shadow-soft">
          <Plus className="h-3 w-3" aria-hidden="true" />
          Add
        </span>
      </div>

      <div className="mt-4 space-y-0.5">
        <p className="text-[11px] font-medium text-muted">{product.unit}</p>
        <p className="text-sm font-semibold leading-tight text-ink">
          {product.name}{" "}
          <span className="font-normal text-muted">({product.local})</span>
        </p>
        <p className="flex items-center gap-1 text-[11px] font-medium text-grazify-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-grazify-primary" />
          {product.delivery}
        </p>
        <p className="text-[11px] font-semibold text-grazify-dark">
          {product.discount}
        </p>
        <p className="flex items-baseline gap-1.5">
          <span className="text-sm font-bold text-ink">
            {formatPrice(product.price)}
          </span>
          <span className="text-[11px] text-muted line-through">
            MRP {formatPrice(product.mrp)}
          </span>
        </p>
      </div>
    </div>
  );
}

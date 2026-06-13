import { CheckCircle2, Minus, Plus, Search, XCircle } from "lucide-react";
import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import ProductCardMockup from "@/components/screens/ProductCardMockup";
import { mockProducts, previewScreens, productCategories } from "@/lib/constants";
import { cn, formatPrice } from "@/lib/utils";

type ScreenFrameProps = {
  title: string;
  caption: string;
  className?: string;
  children: React.ReactNode;
};

/* Preview screen frame */
function ScreenFrame({ title, caption, className, children }: ScreenFrameProps) {
  return (
    <figure
      className={cn(
        "lift flex h-full flex-col overflow-hidden rounded-3xl border border-grazify-border bg-white shadow-soft",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-grazify-border bg-grazify-soft px-4 py-3">
        <span className="text-sm font-bold text-ink">{title}</span>
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-grazify-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-grazify-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-grazify-primary" />
        </span>
      </div>
      <div className="flex-1 p-4">{children}</div>
      <figcaption className="border-t border-grazify-border px-4 py-3 text-xs leading-relaxed text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

const cartItems = [mockProducts[0], mockProducts[4]];

const orderRows = [
  { id: "ORD-109DA29A", emojis: ["🥒", "🫑", "🍅", "🌶️", "🫑"], status: "confirmed", price: 1228 },
  { id: "ORD-77BC12F4", emojis: ["🥛", "🌾", "🍒", "🍌", "🧄"], status: "cancelled", price: 1183 },
  { id: "ORD-44AD90C1", emojis: ["🥭", "🍎", "🍌", "🍅", "🥬"], status: "confirmed", price: 1508 },
] as const;

export default function AppPreviewSection() {
  const captions = Object.fromEntries(
    previewScreens.map((screen) => [screen.id, screen.caption]),
  );

  return (
    <section className="bg-grazify-mint py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Inside The App"
          title="A clean ordering experience, end to end"
          subtitle="A preview of how businesses will browse, order, and track their fresh supply on Grazify — home listings, categories, cart, and orders."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* Home listing */}
          <Reveal className="lg:col-span-2">
            <ScreenFrame title="Home listing" caption={captions.home}>
              <div className="flex items-center gap-2 rounded-2xl border border-grazify-border bg-grazify-soft px-3 py-2.5">
                <Search className="h-4 w-4 text-muted" aria-hidden="true" />
                <span className="text-xs text-muted">Search fresh produce</span>
              </div>
              <p className="mt-4 text-sm font-bold text-ink">Everyday Essentials</p>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {mockProducts.slice(0, 3).map((product) => (
                  <ProductCardMockup key={product.name} product={product} />
                ))}
              </div>
            </ScreenFrame>
          </Reveal>

          {/* Categories */}
          <Reveal delay={90}>
            <ScreenFrame title="Categories" caption={captions.categories}>
              <div className="grid grid-cols-3 gap-3">
                {productCategories.slice(0, 9).map((category) => (
                  <div
                    key={category.title}
                    className="flex flex-col items-center gap-1.5 rounded-2xl border border-grazify-border bg-grazify-soft p-2.5 text-center"
                  >
                    <span className="text-2xl" aria-hidden="true">
                      {category.emoji}
                    </span>
                    <span className="text-[10px] font-semibold leading-tight text-ink">
                      {category.title}
                    </span>
                  </div>
                ))}
              </div>
            </ScreenFrame>
          </Reveal>

          {/* Cart */}
          <Reveal delay={120}>
            <ScreenFrame title="Cart" caption={captions.cart}>
              <div className="rounded-2xl bg-grazify-light px-3 py-2.5 text-xs font-semibold text-grazify-dark">
                ⏱ Scheduled for tomorrow at 11:30 AM
              </div>
              <ul className="mt-3 space-y-3">
                {cartItems.map((item, index) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-3 rounded-2xl border border-grazify-border p-2.5"
                  >
                    <span
                      className={cn(
                        "grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br text-lg",
                        item.tint,
                      )}
                      aria-hidden="true"
                    >
                      {item.emoji}
                    </span>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-ink">
                        {item.name} ({item.local})
                      </p>
                      <p className="text-xs font-bold text-ink">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-grazify-primary px-2 py-1 text-white">
                      <Minus className="h-3 w-3" aria-hidden="true" />
                      <span className="text-xs font-bold">{index + 1}</span>
                      <Plus className="h-3 w-3" aria-hidden="true" />
                    </div>
                  </li>
                ))}
              </ul>
              <dl className="mt-3 space-y-2 rounded-2xl bg-grazify-soft p-3 text-xs">
                <div className="flex justify-between text-muted">
                  <dt>Items total</dt>
                  <dd className="font-semibold text-ink">{formatPrice(242)}</dd>
                </div>
                <div className="flex justify-between text-muted">
                  <dt>Delivery charge</dt>
                  <dd className="font-semibold text-ink">{formatPrice(99)}</dd>
                </div>
                <div className="flex justify-between border-t border-grazify-border pt-2 text-sm">
                  <dt className="font-bold text-ink">Grand total</dt>
                  <dd className="font-bold text-grazify-primary">
                    {formatPrice(341)}
                  </dd>
                </div>
              </dl>
            </ScreenFrame>
          </Reveal>

          {/* Orders */}
          <Reveal delay={150}>
            <ScreenFrame title="Orders" caption={captions.orders}>
              <ul className="space-y-3">
                {orderRows.map((order) => (
                  <li
                    key={order.id}
                    className="rounded-2xl border border-grazify-border p-3"
                  >
                    <div className="flex gap-1.5">
                      {order.emojis.map((emoji, i) => (
                        <span
                          key={i}
                          className="grid h-9 w-9 place-items-center rounded-lg bg-grazify-soft text-base"
                          aria-hidden="true"
                        >
                          {emoji}
                        </span>
                      ))}
                    </div>
                    <div className="mt-2.5 flex items-center justify-between">
                      <span
                        className={cn(
                          "flex items-center gap-1 text-xs font-semibold",
                          order.status === "confirmed"
                            ? "text-grazify-primary"
                            : "text-muted",
                        )}
                      >
                        {order.status === "confirmed" ? (
                          <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                        ) : (
                          <XCircle className="h-3.5 w-3.5" aria-hidden="true" />
                        )}
                        {order.status === "confirmed"
                          ? "Order Confirmed"
                          : "Order Cancelled"}
                      </span>
                      <span className="text-sm font-bold text-ink">
                        {formatPrice(order.price)}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </ScreenFrame>
          </Reveal>

          {/* Order details */}
          <Reveal delay={120}>
            <ScreenFrame title="Order details" caption={captions.details}>
              <div className="flex items-center gap-2 rounded-2xl bg-grazify-light px-3 py-2.5">
                <CheckCircle2 className="h-5 w-5 text-grazify-primary" aria-hidden="true" />
                <div>
                  <p className="text-xs font-bold text-ink">Confirmed</p>
                  <p className="text-[10px] text-muted">2 items in order</p>
                </div>
              </div>
              <ul className="mt-3 space-y-2.5">
                {cartItems.map((item) => (
                  <li key={item.name} className="flex items-center gap-3">
                    <span
                      className={cn(
                        "grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br text-base",
                        item.tint,
                      )}
                      aria-hidden="true"
                    >
                      {item.emoji}
                    </span>
                    <span className="flex-1 text-xs font-semibold text-ink">
                      {item.name} ({item.local})
                    </span>
                    <span className="text-xs font-bold text-ink">
                      {formatPrice(item.price)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex items-center justify-between rounded-2xl bg-grazify-soft px-3 py-3">
                <span className="text-xs font-bold text-ink">Total Bill</span>
                <span className="text-sm font-bold text-grazify-primary">
                  {formatPrice(341)}
                </span>
              </div>
              <p className="mt-3 text-[11px] text-muted">Order ID · ORD-109DA29A</p>
            </ScreenFrame>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

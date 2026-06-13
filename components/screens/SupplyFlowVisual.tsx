import { Fragment } from "react";
import { Building2, Package, ShieldCheck, Sprout } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type FlowNode = {
  label: string;
  sub: string;
  icon: LucideIcon;
};

const nodes: FlowNode[] = [
  { label: "Farm", sub: "Sourced fresh", icon: Sprout },
  { label: "Quality Check", sub: "Graded & passed", icon: ShieldCheck },
  { label: "Fresh Handling", sub: "Packed with care", icon: Package },
  { label: "Business", sub: "Delivered on time", icon: Building2 },
];

/* Supply flow */
export default function SupplyFlowVisual() {
  return (
    <div className="rounded-3xl border border-grazify-border bg-white p-6 shadow-soft sm:p-9">
      <div className="flex items-start">
        {nodes.map((node, index) => (
          <Fragment key={node.label}>
            {/* Node */}
            <div className="flex w-20 shrink-0 flex-col items-center gap-3 text-center sm:w-28">
              <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-grazify-gradient text-white shadow-float sm:h-16 sm:w-16">
                <span
                  className="absolute inset-0 rounded-2xl bg-grazify-primary animate-node-ping"
                  style={{ animationDelay: `${index * 0.6}s` }}
                />
                <node.icon
                  className="relative h-6 w-6 sm:h-7 sm:w-7"
                  aria-hidden="true"
                />
              </span>
              <span className="flex flex-col gap-0.5">
                <span className="text-xs font-bold text-ink sm:text-sm">
                  {node.label}
                </span>
                <span className="hidden text-[11px] text-muted sm:block">
                  {node.sub}
                </span>
              </span>
            </div>

            {/* Connector */}
            {index < nodes.length - 1 ? (
              <div className="relative mt-7 h-1 flex-1 overflow-hidden rounded-full bg-grazify-light sm:mt-8">
                <span className="absolute inset-0 rounded-full animate-flow" />
              </div>
            ) : null}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

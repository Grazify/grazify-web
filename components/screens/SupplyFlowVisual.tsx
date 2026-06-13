import { Building2, Package, ShieldCheck, Sprout } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type FlowNode = {
  label: string;
  icon: LucideIcon;
};

const nodes: FlowNode[] = [
  { label: "Farm", icon: Sprout },
  { label: "Quality Check", icon: ShieldCheck },
  { label: "Fresh Handling", icon: Package },
  { label: "Business", icon: Building2 },
];

/* Supply flow */
export default function SupplyFlowVisual() {
  return (
    <div className="rounded-3xl border border-grazify-border bg-white p-5 shadow-soft sm:p-7">
      <div className="flex items-center justify-between gap-2">
        {nodes.map((node, index) => (
          <div key={node.label} className="flex flex-1 items-center">
            {/* Node */}
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-grazify-light text-grazify-dark sm:h-14 sm:w-14">
                <node.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="text-[11px] font-semibold text-ink sm:text-xs">
                {node.label}
              </span>
            </div>

            {/* Connector */}
            {index < nodes.length - 1 ? (
              <div className="relative mx-1 mb-5 h-0.5 flex-1 rounded-full bg-grazify-border sm:mx-2">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-grazify-primary animate-travel" />
                </span>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

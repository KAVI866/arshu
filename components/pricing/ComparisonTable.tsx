import { Check, X } from "lucide-react";
import { pricingComparison } from "@/data/pricing";
import { cn } from "@/lib/utils";

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <span className="mx-auto grid size-6 place-items-center rounded-full bg-success/10 text-success">
        <Check className="size-3.5" strokeWidth={3} aria-label="Included" />
      </span>
    ) : (
      <span className="mx-auto grid size-6 place-items-center rounded-full bg-muted text-muted-foreground">
        <X className="size-3.5" strokeWidth={3} aria-label="Not included" />
      </span>
    );
  }
  return <span className="text-sm font-medium text-foreground">{value}</span>;
}

export function ComparisonTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow-soft)]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left">
          <caption className="sr-only">
            Comparison of Basic, Professional, and Enterprise plans
          </caption>
          <thead>
            <tr className="border-b border-border bg-muted/40">
              <th scope="col" className="w-[42%] px-6 py-4 text-sm font-semibold text-muted-foreground">
                Features
              </th>
              {["Basic", "Professional", "Enterprise"].map((plan, i) => (
                <th
                  key={plan}
                  scope="col"
                  className={cn(
                    "px-6 py-4 text-center text-sm font-semibold",
                    i === 1 ? "text-primary" : "text-foreground"
                  )}
                >
                  <span className="flex flex-col items-center gap-1">
                    {plan}
                    {i === 1 ? (
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">
                        Most popular
                      </span>
                    ) : null}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pricingComparison.map((row, index) => (
              <tr
                key={row.name}
                className={cn(
                  "border-b border-border transition-colors last:border-b-0 hover:bg-muted/30",
                  index % 2 === 1 && "bg-muted/20"
                )}
              >
                <th scope="row" className="px-6 py-3.5 text-sm font-medium text-foreground">
                  {row.name}
                </th>
                <td className="px-6 py-3.5 text-center">
                  <CellValue value={row.basic} />
                </td>
                <td className="bg-[color-mix(in_oklch,var(--primary)_4%,transparent)] px-6 py-3.5 text-center">
                  <CellValue value={row.professional} />
                </td>
                <td className="px-6 py-3.5 text-center">
                  <CellValue value={row.enterprise} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

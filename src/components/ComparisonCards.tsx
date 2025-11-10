import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const maxAdjustPoints = [
  "Reads and analyzes your policy for maximum coverage",
  "Documents damage to maximize your settlement",
  "Fee based on performance - you only pay when we win",
  "Licensed, bonded, and decades of experience representing you",
  "Your unwavering advocate working only for you",
];

const insuranceCompanyPoints = [
  "Documents damage on behalf of insurance company",
  "Hired to minimize the amount you receive",
  "Paid by insurance company to reduce your claim",
  "Experience in saving the insurance company money",
  "Team protects insurance company exposure, may deny claims",
];

export default function ComparisonCards() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6 text-center">
        MaxAdjust VS Company Insurance Adjuster
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="rounded-2xl border-2 border-brand-blue">
          <CardHeader>
            <CardTitle className="text-xl text-brand-blue">Max Adjust</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {maxAdjustPoints.map((point, i) => (
                <li key={i} className="flex gap-3">
                  <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-700">{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-2 border-neutral-300">
          <CardHeader>
            <CardTitle className="text-xl text-neutral-700">
              Company Insurance Adjuster
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {insuranceCompanyPoints.map((point, i) => (
                <li key={i} className="flex gap-3">
                  <X className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-700">{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}


import { Card, CardContent, CardHeader } from "@/components/ui/card";

const items = [
  {
    name: "Johnathan D.",
    quote: "The team went above and beyond to fight for my insurance claim.",
  },
  {
    name: "Jane S.",
    quote: "They turned a daunting process into something manageable.",
  },
  {
    name: "Michael R.",
    quote:
      "Outstanding negotiation skills. I received the compensation I deserved.",
  },
  {
    name: "Emily C.",
    quote: "Far more compensation than I expected. Highly recommend!",
  },
];

export default function Testimonials() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
        Clients, not claim numbers ⭐
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((t) => (
          <Card key={t.name} className="rounded-2xl">
            <CardHeader className="font-medium">{t.name}</CardHeader>
            <CardContent className="text-neutral-700">{t.quote}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}


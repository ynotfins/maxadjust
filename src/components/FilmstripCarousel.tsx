"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";

type Item = { src: string; alt: string; w: number; h: number };

export default function FilmstripCarousel({ items }: { items: Item[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    loop: true,
  });

  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  return (
    <section aria-label="Highlights" className="py-10">
      <div className="flex items-baseline justify-between mb-6">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Get the insurance settlement you deserve 💼🔧
        </h1>
      </div>
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-6">
          {items.map((it, i) => (
            <div
              key={i}
              className="embla__slide shrink-0 basis-[240px] md:basis-[300px] lg:basis-[360px]"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${items.length}`}
            >
              <div className="rounded-2xl border bg-white shadow-soft p-4 flex flex-col gap-3">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-neutral-50">
                  <Image
                    src={it.src}
                    alt={it.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 240px, (max-width:1024px) 300px, 360px"
                    priority={i < 3}
                  />
                </div>
                <p className="text-sm text-neutral-600">{it.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div aria-hidden className="sr-only">
        {items.map((_, i) => (
          <button key={i} onClick={() => scrollTo(i)} />
        ))}
      </div>
    </section>
  );
}


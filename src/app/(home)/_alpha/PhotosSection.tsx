"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X, Eye } from "lucide-react";

/** High-resolution photorealistic work imagery (no pixelated Alpha faces). */
const photos = [
    {
        src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
        alt: "Modern city skyline — commercial property claims",
        category: "Commercial",
    },
    {
        src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        alt: "Structural assessment after storm damage",
        category: "Storm",
    },
    {
        src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
        alt: "Professional cleanup and restoration crew",
        category: "Restoration",
    },
    {
        src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
        alt: "Claims documentation and negotiation",
        category: "Claims",
    },
    {
        src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
        alt: "Home exterior ready for settlement review",
        category: "Residential",
    },
    {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        alt: "Family home protected by public adjusters",
        category: "Residential",
    },
    {
        src: "/assets/images/services/fire-damage.jpg",
        alt: "Fire damage scene assessment",
        category: "Fire",
    },
    {
        src: "/assets/images/services/water-damage.webp",
        alt: "Water intrusion documentation",
        category: "Water",
    },
];

export default function PhotosSection() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const categories = [
        "All",
        ...Array.from(new Set(photos.map((photo) => photo.category))),
    ];
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredPhotos =
        selectedCategory === "All"
            ? photos
            : photos.filter((photo) => photo.category === selectedCategory);

    const openLightbox = (src: string, index: number) => {
        setSelectedImage(src);
        setCurrentIndex(index);
    };

    return (
        <section
            id="photos-section"
            className="ma-section bg-gradient-to-b from-white to-slate-50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-10 md:mb-12"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="ma-section-title mb-3">Our work in action</h2>
                    <p className="ma-section-sub max-w-2xl mx-auto">
                        Powerful, high-resolution moments from claims, restoration,
                        and the homes we fight for.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                                selectedCategory === category
                                    ? "bg-primary text-white border-primary shadow-md"
                                    : "bg-white text-slate-700 border-slate-200 hover:border-primary/40"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {filteredPhotos.map((photo, index) => (
                        <motion.button
                            key={photo.src}
                            type="button"
                            className="relative group overflow-hidden rounded-2xl bg-slate-100 border border-slate-100 text-left shadow-sm"
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.04 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -4 }}
                            onClick={() => openLightbox(photo.src, index)}
                        >
                            <div className="aspect-[4/3] relative max-h-40 md:max-h-48">
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width:768px) 45vw, 22vw"
                                    quality={90}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                                    <span className="inline-flex items-center gap-1 text-white text-xs font-semibold">
                                        <Eye className="w-3.5 h-3.5" />
                                        {photo.category}
                                    </span>
                                </div>
                            </div>
                        </motion.button>
                    ))}
                </div>

                {selectedImage ? (
                    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                        <button
                            type="button"
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/15 text-white flex items-center justify-center"
                            aria-label="Close"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                const i =
                                    (currentIndex - 1 + filteredPhotos.length) %
                                    filteredPhotos.length;
                                setCurrentIndex(i);
                                setSelectedImage(filteredPhotos[i]!.src);
                            }}
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 text-white flex items-center justify-center"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                const i = (currentIndex + 1) % filteredPhotos.length;
                                setCurrentIndex(i);
                                setSelectedImage(filteredPhotos[i]!.src);
                            }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 text-white flex items-center justify-center"
                            aria-label="Next"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                        <Image
                            src={selectedImage}
                            alt={filteredPhotos[currentIndex]?.alt || "Photo"}
                            width={1400}
                            height={900}
                            className="max-w-full max-h-[85vh] object-contain rounded-xl"
                            quality={95}
                        />
                    </div>
                ) : null}
            </div>
        </section>
    );
}

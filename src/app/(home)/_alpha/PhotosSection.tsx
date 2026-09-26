"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Eye } from 'lucide-react';

export default function PhotosSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [
    {
      src: "https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1758765775951-moy0cl5st4.png",
      alt: "MAX ADJUST Logo",
      category: "Branding"
    },
    {
      src: "https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1758762194279-epvtoq54uwv.jpg",
      alt: "Property damage assessment",
      category: "Property Damage"
    },
    {
      src: "https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1758762194279-c0o37ii3u4.jpg",
      alt: "Insurance calculation process",
      category: "Insurance Process"
    },
    {
      src: "https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image//alpha-face-21.jpg",
      alt: "Client testimonial - Francis H.",
      category: "Testimonials"
    },
    {
      src: "https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image//alpha-face-17.jpg",
      alt: "Client testimonial - Jacqueline G.",
      category: "Testimonials"
    },
    {
      src: "https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image//alpha-face-14.jpg",
      alt: "Client testimonial - Lillie W.",
      category: "Testimonials"
    },
    {
      src: "https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image//alpha-face-10.jpg",
      alt: "Client testimonial - Brandie G.",
      category: "Testimonials"
    },
    {
      src: "https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image//alpha-face-23.jpg",
      alt: "Client testimonial - Willard B.",
      category: "Testimonials"
    }
  ];

  const categories = ["All", ...Array.from(new Set(photos.map(photo => photo.category)))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPhotos = selectedCategory === "All" 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const openLightbox = (src: string, index: number) => {
    setSelectedImage(src);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredPhotos[nextIndex].src);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredPhotos[prevIndex].src);
  };

  return (
    <section id="photos-section" alpha-section-id="photos-section" className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold text-gray-900 mb-3 px-2">
            Our Work in Action
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto px-2">
            Browse through examples of our successful claims and the people we've helped
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 rounded-xl font-semibold transition-all border-2 text-xs ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-2 gap-3">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.src}
              className="relative group cursor-pointer overflow-hidden rounded-xl bg-white border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              onClick={() => openLightbox(photo.src, index)}
            >
              <div className="aspect-square relative">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  crossOrigin="anonymous"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-semibold truncate">{photo.alt}</p>
                  <p className="text-white/80 text-xs">{photo.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-3">
            <div className="relative max-w-5xl max-h-full w-full">
              <button
                onClick={closeLightbox}
                className="absolute top-1 right-1 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
              >
                <X className="w-4 h-4" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-1 top-1/2 transform -translate-y-1/2 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="relative">
                <Image
                  src={selectedImage}
                  alt={filteredPhotos[currentIndex]?.alt || "Photo"}
                  width={1200}
                  height={900}
                  className="max-w-full max-h-[85vh] object-contain rounded-xl"
                  crossOrigin="anonymous"
                />
                <div className="absolute bottom-1 left-1 right-1 bg-black/70 backdrop-blur-sm rounded-lg p-2 text-white">
                  <p className="font-semibold text-xs">{filteredPhotos[currentIndex]?.alt}</p>
                  <p className="text-xs text-gray-300">{filteredPhotos[currentIndex]?.category}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
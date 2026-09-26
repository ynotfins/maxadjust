"use client";

import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Francis H.",
      avatar: "https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image//alpha-face-21.jpg",
      rating: 5,
      text: "MAX ADJUST helped me get 3x more than what my insurance company initially offered. Professional and knowledgeable team!",
      amount: "$45,000"
    },
    {
      name: "Jacqueline G.",
      avatar: "https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image//alpha-face-17.jpg",
      rating: 5,
      text: "After the fire damage to my home, MAX ADJUST fought for every penny I deserved. Couldn't be happier with the results.",
      amount: "$67,000"
    },
    {
      name: "Lillie W.",
      avatar: "https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image//alpha-face-14.jpg",
      rating: 5,
      text: "Water damage claim was handled professionally. They got me significantly more than I expected from my insurance.",
      amount: "$32,000"
    },
    {
      name: "Brandie G.",
      avatar: "https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image//alpha-face-10.jpg",
      rating: 5,
      text: "Storm damage to our business was devastating, but MAX ADJUST made sure we got the full settlement we deserved.",
      amount: "$125,000"
    },
    {
      name: "Willard B.",
      avatar: "https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image//alpha-face-23.jpg",
      rating: 5,
      text: "Excellent service and communication throughout the entire claims process. Highly recommend MAX ADJUST.",
      amount: "$28,000"
    },
    {
      name: "Tobias M.",
      avatar: "https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image//alpha-face-4.jpg",
      rating: 5,
      text: "They turned what seemed like a hopeless situation into a successful claim. Amazing results!",
      amount: "$89,000"
    }
  ];

  const nextTestimonials = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonials = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials-section" alpha-section-id="testimonials-section" className="bg-secondary/5 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary mb-6">
            <Star className="w-4 h-4 mr-2 fill-current" />
            CLIENT SUCCESS STORIES
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Real Results From <br />
            <span className="text-gradient">Real Clients</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            See how we've helped property owners get the settlements they deserve.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="glass-card rounded-[2rem] p-8 md:p-12 h-full flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="flex-shrink-0">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        fill
                        className="object-cover"
                        crossOrigin="anonymous"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-orange-400 fill-current" />
                      ))}
                    </div>
                    
                    <div className="relative mb-6">
                      <Quote className="w-10 h-10 text-primary/10 absolute -top-4 -left-4" />
                      <p className="text-xl text-foreground leading-relaxed relative z-10 font-medium">
                        "{testimonials[currentIndex].text}"
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between border-t border-gray-100 dark:border-white/10 pt-6">
                      <div>
                        <div className="font-bold text-foreground text-lg">{testimonials[currentIndex].name}</div>
                        <div className="text-sm text-muted-foreground">Verified Client</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Settlement</div>
                        <div className="text-2xl font-bold text-green-500">{testimonials[currentIndex].amount}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonials}
              className="w-12 h-12 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-foreground group-hover:text-white transition-colors" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300 dark:bg-white/20 w-2 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonials}
              className="w-12 h-12 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-foreground group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
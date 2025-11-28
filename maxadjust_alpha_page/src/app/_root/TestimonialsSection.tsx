"use client";

import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
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
    <section id="testimonials-section" alpha-section-id="testimonials-section" className="bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-3 py-1.5 bg-green-100 border border-green-200 rounded-full text-xs font-medium text-green-800 mb-3">
            <Star className="w-3 h-3 mr-2 fill-current" />
            CLIENT SUCCESS STORIES
          </div>
          
          <h2 className="text-xl font-bold text-gray-900 mb-3 px-2">
            Real Results From Real Clients
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto px-2">
            See how we've helped property owners get the settlements they deserve
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 gap-4">
            <motion.div
              key={currentIndex}
              className="bg-white border-2 border-gray-100 rounded-2xl p-4 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center mb-3">
                <Image
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  width={48}
                  height={48}
                  className="w-9 h-9 rounded-full mr-2 object-cover"
                  crossOrigin="anonymous"
                />
                <div>
                  <div className="font-bold text-gray-900 text-xs">{testimonials[currentIndex].name}</div>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative mb-3">
                <Quote className="w-5 h-5 text-blue-100 absolute -top-2 -left-2" />
                <p className="text-xs text-gray-700 leading-relaxed pl-3">{testimonials[currentIndex].text}</p>
              </div>
              
              <div className="flex items-center justify-between pt-3 border-t-2 border-gray-100">
                <span className="text-xs text-gray-500 font-medium">Settlement</span>
                <span className="text-base font-bold text-green-600">{testimonials[currentIndex].amount}</span>
              </div>
            </motion.div>
          </div>

          <button
            onClick={prevTestimonials}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 w-9 h-9 bg-white border-2 border-gray-200 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonials}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 w-9 h-9 bg-white border-2 border-gray-200 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all"
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-blue-600 w-5' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState } from 'react';
import { Phone, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, duration: 0.3 }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors group"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
          )}
        </button>
        
        {/* Pulse animation when closed */}
        {!isOpen && (
          <div className="absolute inset-0 w-16 h-16 bg-blue-600 rounded-full animate-ping opacity-20"></div>
        )}
      </motion.div>

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="bg-blue-600 text-white p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">24/7 EMERGENCY SUPPORT</h3>
                  <p className="text-blue-100 text-sm">We're here to help immediately</p>
                </div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-800 font-medium mb-2">Property damage emergency?</p>
                  <p className="text-gray-600 text-sm">
                    Don't wait - every minute counts when dealing with property damage. Our licensed adjusters are standing by 24/7.
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href="tel:8889995740"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (888) 999-5740 NOW
                  </a>
                  
                  <button
                    onClick={() => {
                      const element = document.getElementById('contact-section');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        setIsOpen(false);
                      }
                    }}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors"
                  >
                    Get Free Evaluation
                  </button>
                </div>

                <div className="text-center pt-2 border-t border-gray-100">
                  <p className="text-xs text-gray-500">
                    Licensed public adjusters • No upfront costs
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
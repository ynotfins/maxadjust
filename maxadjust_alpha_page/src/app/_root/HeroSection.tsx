"use client";

import { ChevronRight, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero-section" alpha-section-id="hero-section" className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 items-center">
          <motion.div 
            className="text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-3 py-1.5 bg-orange-50 border border-orange-200 rounded-full text-xs font-medium text-orange-700 mb-3">
              <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
              24/7 EMERGENCY RESPONSE
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-3 leading-tight text-center">
              Maximize Your Insurance Settlement
            </h1>
            
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Licensed public adjusters fighting for your rights. We handle everything from documentation to negotiation, ensuring you get the maximum payout you deserve.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <a 
                href="tel:8889995740" 
                className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                (888) 999-5740
              </a>
              <button 
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-5 py-2.5 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all text-sm"
              >
                Free Evaluation
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </motion.div>

            <motion.div 
              className="mt-4 grid grid-cols-3 gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div>
                <div className="text-xl font-bold text-blue-600">500%</div>
                <div className="text-xs text-gray-600">Higher Settlements</div>
              </div>
              <div>
                <div className="text-xl font-bold text-blue-600">24/7</div>
                <div className="text-xs text-gray-600">Emergency Support</div>
              </div>
              <div>
                <div className="text-xl font-bold text-blue-600">100%</div>
                <div className="text-xs text-gray-600">No Risk Guarantee</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative mt-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-white rounded-xl shadow-2xl p-4 border border-gray-100">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-medium text-gray-500">Settlement Comparison</div>
                    <div className="text-lg font-bold text-green-600">+347%</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                      <span className="text-xs text-gray-600">Insurance Initial Offer</span>
                      <span className="text-sm font-semibold text-gray-900">$15,000</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-blue-50 rounded-lg border-2 border-blue-200">
                      <span className="text-xs text-blue-700 font-medium">MAX ADJUST Result</span>
                      <span className="text-base font-bold text-blue-600">$67,000</span>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                  <div className="pt-2 border-t border-gray-100 text-center">
                    <p className="text-xs text-gray-500">Average client settlement increase</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { Phone, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: "Free Claim Evaluation",
      description: "Call us for a comprehensive assessment of your property damage and insurance policy coverage."
    },
    {
      number: 2,
      title: "Professional Documentation",
      description: "Our licensed adjusters submit all necessary paperwork and provide detailed damage estimates."
    },
    {
      number: 3,
      title: "Expert Negotiation",
      description: "We negotiate directly with your insurance company to maximize your settlement."
    },
    {
      number: 4,
      title: "Settlement Finalization",
      description: "We secure the best possible settlement and present you with full replacement value."
    },
    {
      number: 5,
      title: "Maximum Payout",
      description: "You receive a significantly higher settlement than self-filed claims."
    }
  ];

  return (
    <section id="process-section" alpha-section-id="process-section" className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-3 py-1.5 bg-blue-100 border border-blue-200 rounded-full text-xs font-medium text-blue-800 mb-3">
                <CheckCircle className="w-3 h-3 mr-2" />
                PROVEN 5-STEP PROCESS
              </div>
              
              <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                How We Get You Maximum Settlements
              </h2>
              
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Our adjusters consistently secure settlements close to double what insurance companies initially offer.
              </p>
            </motion.div>
            
            <div className="space-y-3">
              {steps.map((step, index) => (
                <motion.div 
                  key={step.number} 
                  className="flex items-start space-x-2 p-2 rounded-xl hover:bg-blue-50 transition-colors"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl flex items-center justify-center text-sm font-bold shadow-lg">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1 text-sm">{step.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            className="relative mt-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-xl transform -rotate-3 opacity-20"></div>
              <div className="relative bg-white rounded-xl shadow-2xl p-4 border border-gray-100">
                <div className="space-y-3">
                  <div className="text-center pb-3 border-b border-gray-100">
                    <div className="text-xs font-medium text-gray-500 mb-2">Average Settlement Increase</div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">500%</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-medium text-gray-600">Self-filed claim</span>
                        <span className="text-sm font-bold text-gray-900">$10,000</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gray-400 rounded-full" style={{ width: '20%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-3 border-2 border-blue-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-blue-700 font-bold">With MAX ADJUST</span>
                        <span className="text-base font-bold text-blue-600">$50,000</span>
                      </div>
                      <div className="h-2 bg-blue-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center pt-3 border-t border-gray-100">
                    <div className="w-14 h-14 mx-auto mb-2">
                      <Image
                        src="https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1758765775951-moy0cl5st4.png"
                        alt="MAX ADJUST Logo"
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <a 
                      href="tel:8889995740"
                      className="inline-flex items-center text-xs text-blue-600 font-semibold hover:text-blue-700"
                    >
                      <Phone className="w-3 h-3 mr-2" />
                      Call (888) 999-5740 for free evaluation
                    </a>
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
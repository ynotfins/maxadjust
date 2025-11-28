"use client";

import { CheckCircle, X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ComparisonSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="comparison-section" alpha-section-id="comparison-section" className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold text-gray-900 mb-3 px-2">
            Why Choose a Public Adjuster?
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto px-2">
            We handle the entire claims process and negotiate fair settlements while you focus on recovery
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-4 relative">
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-4 border-2 border-blue-200"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-2 shadow-lg">
                  <span className="text-white font-bold text-sm">MA</span>
                </div>
                <h3 className="text-base font-bold text-gray-900">With MAX ADJUST</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Expert policy analysis to maximize your coverage
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Professional documentation and claim submission
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Direct negotiation with insurance companies
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Licensed professionals working exclusively for you
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-gray-700 leading-relaxed font-semibold">
                    Average 500% higher settlements than self-filed claims
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-red-50 to-white rounded-xl shadow-lg p-4 border-2 border-red-200"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-2 shadow-lg">
                  <span className="text-white font-bold text-sm">SF</span>
                </div>
                <h3 className="text-base font-bold text-gray-900">Self-Filed Claims</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Limited knowledge of policy terms and coverage
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Time-consuming paperwork and documentation
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Insurance adjusters work to minimize payouts
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Risk of claim denial due to technicalities
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-gray-700 leading-relaxed font-semibold">
                    Typically receive much lower settlements
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button 
            onClick={scrollToContact}
            className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm"
          >
            Get Your Free Evaluation
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from 'framer-motion';
import { Shield, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';

export default function IntroSection() {
  return (
    <section id="intro-section" alpha-section-id="intro-section" className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-3 py-1.5 bg-orange-100 border border-orange-200 rounded-full text-xs font-medium text-orange-800 mb-3">
            <AlertTriangle className="w-3 h-3 mr-2" />
            DON'T LET INSURANCE COMPANIES SHORTCHANGE YOU
          </div>
          
          <h2 className="text-xl font-bold text-gray-900 mb-3 max-w-4xl mx-auto leading-tight px-2">
            Expert Public Adjusters Working For You
          </h2>
          
          <p className="text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            We know every policy detail and hidden clause that insurance companies won't tell you about. Our licensed adjusters ensure you receive the full compensation you're entitled to.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4">
          <motion.div
            className="text-center p-4 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
          >
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-2">Licensed & Bonded</h3>
            <p className="text-xs text-gray-600 leading-relaxed">State-certified professionals with decades of experience in insurance claims</p>
          </motion.div>

          <motion.div
            className="text-center p-4 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100 hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
          >
            <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-2">Zero Risk</h3>
            <p className="text-xs text-gray-600 leading-relaxed">No upfront costs - we only get paid when you receive your settlement</p>
          </motion.div>

          <motion.div
            className="text-center p-4 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
          >
            <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-2">Maximum Payouts</h3>
            <p className="text-xs text-gray-600 leading-relaxed">Average 500% more than self-filed claims - proven track record</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
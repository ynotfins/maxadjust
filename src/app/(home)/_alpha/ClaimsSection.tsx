"use client";

import { Droplet, Flame, Cloud, Zap, House, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ClaimsSection() {
  const claims = [
    { icon: Droplet, title: "Water Damage", color: "blue", gradient: "from-blue-500 to-blue-600" },
    { icon: Flame, title: "Fire Damage", color: "red", gradient: "from-red-500 to-red-600" },
    { icon: Cloud, title: "Mold Damage", color: "green", gradient: "from-green-500 to-green-600" },
    { icon: Zap, title: "Storm Damage", color: "yellow", gradient: "from-yellow-500 to-yellow-600" },
    { icon: House, title: "Smoke Damage", color: "gray", gradient: "from-gray-500 to-gray-600" },
    { icon: Droplet, title: "Flood Damage", color: "blue", gradient: "from-blue-500 to-blue-600" },
    { icon: Cloud, title: "Hail Damage", color: "indigo", gradient: "from-indigo-500 to-indigo-600" },
    { icon: Zap, title: "Hurricane", color: "purple", gradient: "from-purple-500 to-purple-600" }
  ];

  return (
    <section id="claims-section" alpha-section-id="claims-section" className="bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold text-gray-900 mb-3 px-2">
            All Types of Property Damage Claims
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto px-2">
            From water damage to natural disasters, we maximize your settlement for any covered loss
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {claims.map((claim, index) => {
            const IconComponent = claim.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-white border-2 border-gray-100 rounded-xl p-3 text-center hover:border-blue-200 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className={`w-10 h-10 bg-gradient-to-br ${claim.gradient} rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-xs text-gray-900 group-hover:text-blue-600 transition-colors">{claim.title}</h3>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="tel:8889995740"
            className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4 mr-2" />
            <div className="text-left">
              <div className="text-xs font-medium">24/7 EMERGENCY HOTLINE</div>
              <div className="text-base font-bold">(888) 999-5740</div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
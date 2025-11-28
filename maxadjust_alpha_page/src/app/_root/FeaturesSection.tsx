"use client";

import { Zap, FileText, Shield, CreditCard, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "24/7 Emergency Response",
      description: "Immediate assistance when disaster strikes",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: FileText,
      title: "Licensed Professionals",
      description: "State-certified public adjusters with decades of experience",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: Shield,
      title: "No Risk Guarantee",
      description: "We only get paid when you receive your settlement",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: CreditCard,
      title: "Maximum Settlements",
      description: "Average 500% more than self-filed claims",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Streamlined claims process with regular updates",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personal adjuster assigned to your case",
      gradient: "from-red-500 to-rose-500"
    }
  ];

  return (
    <section id="features-section" alpha-section-id="features-section" className="bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-3 py-1.5 bg-blue-100 border border-blue-200 rounded-full text-xs font-medium text-blue-800 mb-3">
            <Shield className="w-3 h-3 mr-2" />
            WHY CHOOSE MAX ADJUST
          </div>
          
          <h2 className="text-xl font-bold text-gray-900 mb-3 px-2">
            Your Trusted Partner in Insurance Claims
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto px-2">
            We're committed to getting you the maximum settlement you deserve with our proven process
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div 
                key={index} 
                className="group text-center p-4 bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
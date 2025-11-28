"use client";

import { Phone, Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { projectId } from '@/system-settings';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("forms")
        .insert({
          projectId: projectId,
          title: "contact-form",
          submission: formData
        });

      if (error) {
        console.error('Error submitting form:', error);
      } else {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-section" alpha-section-id="contact-section" className="bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-3 py-1.5 bg-green-100 border border-green-200 rounded-full text-xs font-medium text-green-800 mb-3">
            <Phone className="w-3 h-3 mr-2" />
            FREE CONSULTATION
          </div>
          
          <h2 className="text-xl font-bold text-gray-900 mb-3 px-2">
            Get Your Free Claim Evaluation
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto px-2">
            Don't let your insurance company shortchange you. Contact us today for a free evaluation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-2 p-3 bg-white rounded-xl border-2 border-gray-100 hover:border-blue-200 transition-colors">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm">24/7 Emergency Hotline</h4>
                  <p className="text-xs text-gray-600 mb-2">Call us anytime for immediate assistance</p>
                  <a href="tel:8889995740" className="text-blue-600 font-bold hover:text-blue-700 text-base">
                    (888) 999-5740
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-2 p-3 bg-white rounded-xl border-2 border-gray-100 hover:border-blue-200 transition-colors">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm">Email Us</h4>
                  <p className="text-xs text-gray-600 mb-2">Send us your questions or documents</p>
                  <a href="mailto:info@maxadjust.com" className="text-blue-600 font-semibold hover:text-blue-700 text-xs break-all">
                    info@maxadjust.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-2 p-3 bg-white rounded-xl border-2 border-gray-100 hover:border-blue-200 transition-colors">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm">Office Location</h4>
                  <p className="text-xs text-gray-600 mb-2">Visit us for in-person consultation</p>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    331 Newman Springs Rd<br />
                    Suite 143<br />
                    Red Bank, NJ 07701
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-100 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-2 text-sm">Why Choose MAX ADJUST?</h4>
              <ul className="space-y-2 text-xs text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Average 500% higher settlements
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  No upfront costs - we only get paid when you do
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Licensed professionals with decades of experience
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border-2 border-gray-100 rounded-xl p-4 shadow-lg">
              {isSubmitted ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-xs text-gray-600">
                    Your message has been submitted successfully. We'll contact you within 24 hours to discuss your claim.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-all text-xs"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-all text-xs"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-all text-xs"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-2">
                      Describe Your Property Damage *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-all text-xs"
                      placeholder="Please describe the damage to your property and when it occurred"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-2.5 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-xs"
                  >
                    {isSubmitting ? 'Submitting...' : (
                      <>
                        Get Free Evaluation
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
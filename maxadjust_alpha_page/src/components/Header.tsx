"use client";

import { Phone, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If section doesn't exist on current page, navigate to home page with hash
      window.location.href = `/#${sectionId}`;
    }
    setIsMenuOpen(false);
  };

  const goToHome = () => {
    window.location.href = '/';
  };

  return (
    <header id="header" alpha-section-id="header" className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={goToHome}
          >
            <Image
              src="https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1758765775951-moy0cl5st4.png"
              alt="MAX ADJUST Logo"
              width={200}
              height={60}
              className="h-10 w-auto"
              crossOrigin="anonymous"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#hero-section" 
              onClick={(e) => { e.preventDefault(); scrollToSection('hero-section'); }}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </a>
            <a 
              href="#process-section" 
              onClick={(e) => { e.preventDefault(); scrollToSection('process-section'); }}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Services
            </a>
            <a 
              href="#testimonials-section" 
              onClick={(e) => { e.preventDefault(); scrollToSection('testimonials-section'); }}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Testimonials
            </a>
            <a 
              href="#contact-section" 
              onClick={(e) => { e.preventDefault(); scrollToSection('contact-section'); }}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Phone Contact */}
          <motion.div 
            className="hidden md:flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a 
              href="tel:8889995740"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              (888) 999-5740
            </a>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden border-t border-gray-100 py-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              <a 
                href="#hero-section" 
                onClick={(e) => { e.preventDefault(); scrollToSection('hero-section'); }}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-1"
              >
                Home
              </a>
              <a 
                href="#process-section" 
                onClick={(e) => { e.preventDefault(); scrollToSection('process-section'); }}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-1"
              >
                Services
              </a>
              <a 
                href="#testimonials-section" 
                onClick={(e) => { e.preventDefault(); scrollToSection('testimonials-section'); }}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-1"
              >
                Testimonials
              </a>
              <a 
                href="#contact-section" 
                onClick={(e) => { e.preventDefault(); scrollToSection('contact-section'); }}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-1"
              >
                Contact
              </a>
              
              {/* Mobile Phone Contact */}
              <a 
                href="tel:8889995740"
                className="inline-flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors mt-4"
              >
                <Phone className="w-4 h-4 mr-2" />
                (888) 999-5740
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
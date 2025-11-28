"use client";

import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="footer" alpha-section-id="footer" className="bg-gray-50 border-t border-gray-200">
      {/* Footer Top */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <Image
                src="https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1758765775951-moy0cl5st4.png"
                alt="MAX ADJUST Logo"
                width={200}
                height={60}
                className="h-10 w-auto mb-4"
                crossOrigin="anonymous"
              />
              <p className="text-gray-600 mb-4 max-w-md">
                Licensed public adjusters helping property owners get the maximum insurance settlements they deserve. We fight for you when disaster strikes.
              </p>
              <div className="flex items-center space-x-3">
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-100 transition-colors">
                  <Image
                    src="https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image//alpha-social-logo-facebook.png"
                    alt="Facebook"
                    width={20}
                    height={20}
                    crossOrigin="anonymous"
                  />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-100 transition-colors">
                  <Image
                    src="https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image//alpha-social-logo-twitter.png"
                    alt="Twitter"
                    width={20}
                    height={20}
                    crossOrigin="anonymous"
                  />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-100 transition-colors">
                  <Image
                    src="https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image//alpha-social-logo-instagram.png"
                    alt="Instagram"
                    width={20}
                    height={20}
                    crossOrigin="anonymous"
                  />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-gray-900 font-semibold text-sm uppercase tracking-wide mb-4">
                Services
              </h3>
              <ul className="space-y-3">
                <li><a href="#claims-section" className="text-gray-600 hover:text-blue-600 transition-colors">Water Damage</a></li>
                <li><a href="#claims-section" className="text-gray-600 hover:text-blue-600 transition-colors">Fire Damage</a></li>
                <li><a href="#claims-section" className="text-gray-600 hover:text-blue-600 transition-colors">Mold Remediation</a></li>
                <li><a href="#claims-section" className="text-gray-600 hover:text-blue-600 transition-colors">Storm Damage</a></li>
                <li><a href="#claims-section" className="text-gray-600 hover:text-blue-600 transition-colors">Hurricane Claims</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-gray-900 font-semibold text-sm uppercase tracking-wide mb-4">
                Contact
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-600 text-sm">24/7 EMERGENCY HOTLINE</p>
                  <a href="tel:8889995740" className="text-blue-600 font-semibold hover:text-blue-700">
                    (888) 999-5740
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Email</p>
                  <a href="mailto:info@maxadjust.com" className="text-blue-600 hover:text-blue-700">
                    info@maxadjust.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Address</p>
                  <p className="text-gray-600 text-sm">331 Newman Springs Rd<br />Suite 143<br />Red Bank, NJ 07701</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-white py-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm">
              © 2025 MAX ADJUST. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
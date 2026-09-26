"use client";

import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero-section" alpha-section-id="hero-section" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="text-left space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse shadow-[0_0_10px_rgba(255,109,0,0.5)]"></span>
              24/7 EMERGENCY RESPONSE
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              Maximize Your <br />
              <span className="text-gradient">Insurance Claim</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Don't settle for less. Our licensed public adjusters fight for your rights to ensure you get the maximum payout you deserve.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a 
                href="tel:8889995740" 
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-1 text-base group"
              >
                <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                (888) 999-5740
              </a>
              <button 
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 text-foreground font-semibold rounded-2xl hover:bg-gray-50 dark:hover:bg-white/20 transition-all text-base backdrop-blur-sm shadow-sm hover:shadow-md"
              >
                Free Evaluation
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </motion.div>

            <motion.div 
              className="pt-8 grid grid-cols-3 gap-8 border-t border-gray-100 dark:border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { value: "500%", label: "Higher Settlements" },
                { value: "24/7", label: "Emergency Support" },
                { value: "100%", label: "No Risk Guarantee" }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div 
            className="relative lg:h-[600px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[2rem] transform rotate-6 opacity-20 blur-2xl"></div>
              
              <div className="glass-card rounded-[2rem] p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                
                <div className="space-y-8 relative z-10">
                  <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/10 pb-6">
                    <div>
                      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Settlement Comparison</div>
                      <div className="text-3xl font-bold text-green-500 mt-1">+347%</div>
                    </div>
                    <div className="h-12 w-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-500">
                      <ArrowRight className="w-6 h-6 -rotate-45" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Insurance Initial Offer</span>
                        <span className="text-sm font-medium text-muted-foreground line-through">$15,000</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gray-400 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>

                    <div className="p-6 bg-primary/5 rounded-xl border border-primary/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50"></div>
                      <div className="relative z-10">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm font-bold text-primary">MAX ADJUST Result</span>
                          <span className="text-2xl font-bold text-foreground">$67,000</span>
                        </div>
                        <div className="h-3 bg-primary/20 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full shadow-[0_0_10px_rgba(255,109,0,0.5)]" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-muted-foreground bg-gray-50 dark:bg-white/5 p-4 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <p>We only get paid when you get paid. No upfront costs.</p>
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
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LiveChat from '@/components/LiveChat';
import HeroSection from './_root/HeroSection';
import IntroSection from './_root/IntroSection';
import ClaimsSection from './_root/ClaimsSection';
import ProcessSection from './_root/ProcessSection';
import TestimonialsSection from './_root/TestimonialsSection';
import ComparisonSection from './_root/ComparisonSection';
import FeaturesSection from './_root/FeaturesSection';
import PhotosSection from './_root/PhotosSection';
import ContactSection from './_root/ContactSection';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <IntroSection />
      <ClaimsSection />
      <ProcessSection />
      <TestimonialsSection />
      <ComparisonSection />
      <FeaturesSection />
      <PhotosSection />
      <ContactSection />
      <Footer />
      <LiveChat />
    </main>
  );
}
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Differentials from '@/components/Differentials';
import HowItWorks from '@/components/HowItWorks';
import Plans from '@/components/Plans';
import WebDevelopment from '@/components/WebDevelopment';
import Service from '@/components/Service';
import CTAFinal from '@/components/CTAFinal';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Differentials />
        <HowItWorks />
        <Plans />
        <WebDevelopment />
        <Service />
        <CTAFinal />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

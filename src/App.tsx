import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { Manufacturing } from '@/components/Manufacturing';
import { Products } from '@/components/Products';
import { TechnicalData } from '@/components/TechnicalData';
import { Applications } from '@/components/Applications';
import { WhyProshield } from '@/components/WhyProshield';
import { Certifications } from '@/components/Certifications';
import { Leadership } from '@/components/Leadership';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { StickyCTA } from '@/components/StickyCTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Manufacturing />
        <Products />
        <TechnicalData />
        <Applications />
        <WhyProshield />
        <Certifications />
        <Leadership />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;

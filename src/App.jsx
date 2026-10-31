import { useEffect, useState } from 'react';
import TopBar from './components/TopBar.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ElevatorSimulator from './components/ElevatorSimulator.jsx';
import Services from './components/Services.jsx';
import TrustStats from './components/TrustStats.jsx';
import Leadership from './components/Leadership.jsx';
import WhyUs from './components/WhyUs.jsx';
import LeadForm from './components/LeadForm.jsx';
import Footer from './components/Footer.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-ink-950 text-slate-200">
      {/* Global ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            'radial-gradient(900px 520px at 12% -5%, rgb(29 48 168 / 0.28), transparent 60%),' +
            'radial-gradient(820px 500px at 92% 8%, rgb(14 165 233 / 0.16), transparent 60%),' +
            'radial-gradient(1000px 700px at 50% 110%, rgb(30 46 132 / 0.25), transparent 65%)',
        }}
      />

      <div className="relative z-10">
        <TopBar />
        <Navbar scrolled={scrolled} />
        <main>
          <Hero />
          <ElevatorSimulator />
          <Services />
          <TrustStats />
          <Leadership />
          <WhyUs />
          <LeadForm />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </div>
  );
}

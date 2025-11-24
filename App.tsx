
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FadeInSection from './components/FadeInSection';
import TermsModal from './components/TermsModal';
import { ViewState } from './types';
import { MessageSquare } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>('');

  // Handle flow: Select Package -> Open Terms Modal -> If Accepted, Go to Contact
  const handlePackageSelect = (pkgName: string) => {
    setSelectedPackage(pkgName);
    setIsTermsOpen(true);
  };

  const handleTermsAccept = () => {
    setIsTermsOpen(false);
    setCurrentView('contact');
    
    // Smooth scroll to contact section
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <FadeInSection>
              <Hero setView={setCurrentView} />
            </FadeInSection>
            <FadeInSection delay={100}>
              <Services withTopGradient />
            </FadeInSection>
            <FadeInSection delay={100}>
              <Portfolio />
            </FadeInSection>
            <FadeInSection delay={100}>
              <Pricing onSelectPackage={handlePackageSelect} />
            </FadeInSection>
            <FadeInSection delay={100}>
              <About withTopGradient />
            </FadeInSection>
            <FadeInSection delay={100}>
              <Testimonials />
            </FadeInSection>
            <FadeInSection delay={100}>
              <ContactForm initialServiceType={selectedPackage} />
            </FadeInSection>
          </>
        );
      case 'services':
        return <Services />;
      case 'portfolio':
        return <Portfolio />;
      case 'about':
        return <About />;
      case 'contact':
        return <ContactForm initialServiceType={selectedPackage} />;
      default:
        return <Hero setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-500 selection:text-white pb-20 md:pb-0 relative">
      <Navbar currentView={currentView} setView={setCurrentView} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />

      {/* S&K Modal Overlay */}
      <TermsModal 
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        onAccept={handleTermsAccept}
        packageName={selectedPackage}
      />
    </div>
  );
};

export default App;

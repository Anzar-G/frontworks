
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import SearchResults from './components/SearchResults';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FadeInSection from './components/FadeInSection';
import TermsModal from './components/TermsModal';
import { ViewState } from './types';
import { MessageSquare } from 'lucide-react';

type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark';
    const stored = window.localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    // Default ke dark mode jika belum ada preferensi yang tersimpan
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    window.localStorage.setItem('theme', theme);
  }, [theme]);

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
              <About />
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
        return <Portfolio searchQuery={searchQuery} />;
      case 'search':
        return <SearchResults query={searchQuery} />;
      case 'about':
        return <About />;
      case 'contact':
        return <ContactForm initialServiceType={selectedPackage} />;
      default:
        return <Hero setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-500 selection:text-white pb-20 md:pb-0 relative bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300">
      <Navbar 
        currentView={currentView} 
        setView={setCurrentView} 
        theme={theme} 
        setTheme={setTheme}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
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

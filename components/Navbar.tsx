import React, { useState } from 'react';
import { Menu, X, Cpu, ChevronRight } from 'lucide-react';
import { ViewState } from '../types';
import { useLockedBody } from '../useLockedBody';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: { id: ViewState; label: string }[] = [
    { id: 'home', label: 'Beranda' },
    { id: 'services', label: 'Layanan' },
    { id: 'portfolio', label: 'Portofolio' },
    { id: 'about', label: 'Tentang Saya' },
    { id: 'contact', label: 'Kontak' },
  ];

  const handleNavClick = (view: ViewState) => {
    setView(view);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Prevent scrolling when menu is open
  useLockedBody(isOpen);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer gap-2"
              onClick={() => handleNavClick('home')}
            >
              <img src="/favicon.png" alt="Logo" className="w-16 h-16 rounded-lg" />
              <span className="font-bold text-xl tracking-tight text-slate-800">
                Vox<span className="text-brand-600">Factum</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`${
                    currentView === link.id
                      ? 'text-brand-600 font-semibold'
                      : 'text-slate-600 hover:text-brand-500'
                  } transition-colors duration-200 text-sm font-medium`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="text-slate-600 hover:text-brand-600 p-2 focus:outline-none"
                aria-label="Open Menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-900/50 z-[60] transition-opacity duration-300 md:hidden backdrop-blur-sm ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Panel (Slide from Right) */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50/50">
             <div className="flex items-center gap-2">
                <img src="/favicon.png" alt="Logo" className="w-16 h-16 rounded-md" />
                <span className="font-bold text-lg text-slate-800">Menu</span>
             </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50"
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`group flex items-center justify-between w-full text-left px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                  currentView === link.id
                    ? 'bg-brand-50 text-brand-700 shadow-sm ring-1 ring-brand-100'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {link.label}
                {currentView === link.id && <ChevronRight size={16} className="text-brand-500" />}
              </button>
            ))}
          </div>

          {/* Drawer Footer */}
          <div className="p-6 border-t border-slate-100 bg-slate-50/80 mt-auto">
            <button 
              onClick={() => handleNavClick('contact')}
              className="w-full py-3.5 px-4 bg-slate-900 text-white rounded-xl font-semibold shadow-lg hover:bg-slate-800 hover:shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              Hubungi Saya
            </button>
            <p className="text-center text-[10px] text-slate-400 mt-6 uppercase tracking-wider font-semibold">
              &copy; {new Date().getFullYear()} Nizar.AI Portfolio
            </p>
          </div>
      </div>
    </>
  );
};

export default Navbar;
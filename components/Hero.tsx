import React, { useState } from 'react';
import { ArrowRight, Code, Database, Share2, Facebook, Instagram, Link as LinkIcon, MessageCircle, X } from 'lucide-react';
import { ViewState } from '../types';

interface HeroProps {
  setView: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const handleShare = (platform: string) => {
  const url = window.location.href;
  const text = "Cek portfolio Muhammad Nizar, AI Frontend Engineer keren ini!";
    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(text);

    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodedText}%20${encodedUrl}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank');
        break;
      case 'instagram':
        // Web API cannot directly share to Instagram Stories reliably across all devices.
        // Fallback: Copy link and guide user.
        navigator.clipboard.writeText(`${text} ${url}`);
        alert("Link dan teks disalin! Silakan buka Instagram untuk membuat Story.");
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert("Link berhasil disalin ke clipboard!");
        break;
    }
    setIsShareOpen(false);
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 pt-16 pb-20 lg:pt-32 lg:pb-28">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-200 opacity-30 blur-3xl filter animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-accent-200 opacity-30 blur-3xl filter"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></span>
              AI Engineer & Frontend Expert
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Mewujudkan Logika AI Menjadi <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500">Antarmuka Memukau</span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Saya membantu bisnis menerjemahkan model AI yang kompleks menjadi aplikasi web yang intuitif, cepat, dan estetik. Fokus pada pengalaman pengguna tanpa mengorbankan kecerdasan sistem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4 items-center sm:items-stretch">
              {/* Primary CTA: Conversion Focus */}
              <button 
                onClick={() => setView('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-lg text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-500/30"
              >
                Konsultasi Sekarang
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </button>

              {/* Secondary CTA: Portfolio */}
              <button 
                onClick={() => setView('portfolio')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border-2 border-slate-200 text-base font-medium rounded-lg text-brand-600 bg-white hover:bg-brand-50 hover:border-brand-200 transition-all shadow-sm"
              >
                Lihat Portofolio
              </button>
              
              {/* Share Button & Dropdown */}
              <div className="relative w-full sm:w-auto">
                <button
                  onClick={() => setIsShareOpen(!isShareOpen)}
                  className="w-full sm:w-auto h-full inline-flex items-center justify-center px-4 py-3 border border-slate-200 text-slate-600 bg-white hover:bg-slate-50 hover:text-brand-600 rounded-lg transition-colors shadow-sm gap-2"
                  aria-label="Share"
                >
                  <Share2 className="h-5 w-5" />
                  <span className="sm:hidden font-medium">Share</span>
                </button>

                {isShareOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setIsShareOpen(false)}
                    ></div>
                    <div className="absolute left-0 top-full mt-2 w-full sm:left-full sm:top-0 sm:ml-2 sm:w-80 sm:-translate-y-16 bg-white rounded-xl shadow-xl border border-slate-100 z-[9999] overflow-hidden transform transition-all animate-fade-in-up origin-top-left">
                      <div className="p-3 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Share Portfolio</span>
                        <button onClick={() => setIsShareOpen(false)} className="text-slate-400 hover:text-slate-600">
                          <X size={14} />
                        </button>
                      </div>
                      <div className="p-2 space-y-1">
                        <button 
                          onClick={() => handleShare('whatsapp')}
                          className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-[#25D366]/10 hover:text-[#25D366] rounded-lg transition-colors text-left"
                        >
                          <MessageCircle size={18} />
                          Share via WhatsApp
                        </button>
                        <button 
                          onClick={() => handleShare('facebook')}
                          className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-[#1877F2]/10 hover:text-[#1877F2] rounded-lg transition-colors text-left"
                        >
                          <Facebook size={18} />
                          Share ke Facebook
                        </button>
                        <button 
                          onClick={() => handleShare('instagram')}
                          className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-colors text-left"
                        >
                          <Instagram size={18} />
                          Share ke Instagram Story
                        </button>
                        <div className="h-px bg-slate-100 my-1"></div>
                        <button 
                          onClick={() => handleShare('copy')}
                          className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors text-left"
                        >
                          <LinkIcon size={18} />
                          Copy Link
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Visual/Image */}
          <div className="relative mt-10 md:mt-0 flex justify-center">
             <div className="relative bg-white p-2 rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
               <img 
                 src="https://picsum.photos/600/600" 
                 alt="AI Frontend Visualization" 
                 className="rounded-xl object-cover w-full h-auto max-w-md mx-auto"
                 loading="lazy"
               />
               
               {/* Floating Badges */}
               <div className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce duration-[3000ms]">
                 <div className="bg-green-100 p-2 rounded-full">
                   <Code className="text-green-600" size={20} />
                 </div>
                 <div>
                   <p className="text-xs text-slate-500">Code Quality</p>
                   <p className="font-bold text-slate-800">Clean & Scalable</p>
                 </div>
               </div>

               <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce duration-[4000ms]">
                 <div className="bg-purple-100 p-2 rounded-full">
                   <Database className="text-purple-600" size={20} />
                 </div>
                 <div>
                   <p className="text-xs text-slate-500">Data Integration</p>
                   <p className="font-bold text-slate-800">AI Ready</p>
                 </div>
               </div>

             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
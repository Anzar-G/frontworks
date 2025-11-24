import React, { useState } from 'react';
import FloatingLines from './FloatingLines';
import { ArrowRight, Code, Database, Share2, Facebook, Instagram, Link as LinkIcon, MessageCircle, X } from 'lucide-react';
import { ViewState } from '../types';

interface HeroProps {
  setView: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  const [isShareOpen, setIsShareOpen] = useState(false);

  // Share message & URL
  // Format pesan sesuai rekomendasi
  const shareUrl = "https://frontworks.vercel.app";
  // Versi 1 - Formal & Profesional (WhatsApp)
  const shareFormal = `Jasa Frontend Web Development Profesional - Voxfactum\n\nWujudkan website impian Anda dengan tampilan yang memukau dan performa optimal.\n\nKeunggulan Kami:\n- Desain Modern & User-Friendly\n- Responsif di Semua Perangkat\n- Loading Cepat & Teroptimasi\n- Clean Code & Well-Structured\n- Unlimited Revisi\n\nKonsultasi Gratis & Estimasi Harga Transparan.\n\n${shareUrl}`;
  // Versi 2 - Singkat & Padat (Copy Link)
  const shareShort = `Voxfactum - Jasa Pembuatan Website Frontend Profesional\n\nKami menghadirkan solusi website modern dengan desain menarik, responsif, dan performa tinggi. Clean code, unlimited revisi, dan konsultasi gratis.\n\nHubungi kami sekarang:\n${shareUrl}`;
  // Versi 3 - Value Proposition (Instagram)
  const shareValue = `Butuh Website Profesional untuk Bisnis Anda?\n\nVoxfactum hadir sebagai solusi frontend web development yang mengutamakan kualitas dan kepuasan klien.\n\nYang Anda Dapatkan:\n- Desain modern dan menarik\n- Tampilan responsif (mobile, tablet, desktop)\n- Performa loading cepat\n- Kode terstruktur dan berkualitas\n- Revisi hingga puas\n- Konsultasi gratis tanpa biaya\n\nWujudkan website impian Anda bersama kami.\n\nInfo lengkap: ${shareUrl}`;
  // Versi 4 - Corporate Style (Facebook)
  const shareCorporate = `Voxfactum - Professional Frontend Web Development Services\n\nKami menyediakan layanan pembuatan website frontend yang profesional dengan fokus pada user experience dan visual excellence.\n\nLayanan meliputi:\nLanding page, company profile, portfolio website, product showcase, dan UI implementation dari design.\n\nTeknologi: HTML5, CSS3, JavaScript, React, Vue, Tailwind CSS, Bootstrap\n\nKonsultasi gratis. Harga fleksibel sesuai kebutuhan.\n\n${shareUrl}`;

  // Notifikasi custom
  const showNotification = (message: string) => {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #667eea;
      color: white;
      padding: 1rem 2rem;
      border-radius: 10px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.3);
      z-index: 10000;
      animation: slideIn 0.3s ease-out;
    `;
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease-out';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  };

  // Inject animation CSS (once)
  React.useEffect(() => {
    if (!document.getElementById('share-notif-anim')) {
      const style = document.createElement('style');
      style.id = 'share-notif-anim';
      style.textContent = `
        @keyframes slideIn {
          from { transform: translateX(400px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(400px); opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // Handler share
  const handleShare = (platform: string) => {
    switch (platform) {
      case 'whatsapp': {
        const message = shareFormal;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        break;
      }
      case 'instagram': {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
          window.location.href = 'instagram://story-camera';
          setTimeout(() => {
            showNotification('Silakan screenshot halaman ini dan bagikan ke Instagram Story Anda!\n\nAtau klik "Copy Link" untuk menyalin link.');
          }, 2000);
        } else {
          showNotification('📱 Instagram Story hanya bisa dibagikan dari HP.\n\nSilakan:\n1. Buka website ini di HP\n2. Screenshot halaman ini\n3. Bagikan ke Instagram Story');
        }
        break;
      }
      case 'facebook': {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareCorporate)}`;
        window.open(facebookUrl, '_blank', 'width=600,height=400');
        break;
      }
      case 'copy': {
        const message = shareShort;
        navigator.clipboard.writeText(message).then(() => {
          showNotification('✅ Link berhasil disalin!');
        }).catch(() => {
          // Fallback untuk browser lama
          const textarea = document.createElement('textarea');
          textarea.value = message;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          showNotification('✅ Link berhasil disalin!');
        });
        break;
      }
    }
    setIsShareOpen(false);
  };

  return (
  <section className="relative overflow-hidden bg-slate-50 min-h-screen flex items-center">
      {/* Gradient transition ke section berikutnya */}
  {/* Gradient overlay menutupi section di bawah Hero */}
  <div className="pointer-events-none fixed left-0 bottom-0 w-full h-[40vh] z-[9999]" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, #111 100%)', pointerEvents: 'none'}} />
      {/* FloatingLines background animasi (versi lebih soft) */}
	  <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }}>
		<FloatingLines 
		  linesGradient={['#e947f5', '#2f4ba2']}
		  enabledWaves={['middle']}
		  lineCount={[4]} // lebih sedikit garis
		  lineDistance={[14]} // jarak sedikit lebih renggang
		  topWavePosition={{ x: 10.0, y: 0.5, rotate: -0.4 }}
		  middleWavePosition={{ x: 4.5, y: 0.0, rotate: 0.15 }}
		  animationSpeed={0.6}
		  interactive={false}
		  parallax={false}
		/>
	  </div>
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-200 opacity-30 blur-3xl filter animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-accent-200 opacity-30 blur-3xl filter"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 text-accent-500 text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></span>
              AI Engineer & Frontend Expert
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-[0_2px_8px_rgba(255,255,255,0.35)]">
              <span className="text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.35)]">Mewujudkan Logika AI Menjadi</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500">Antarmuka Memukau</span>
            </h1>
            
            <p className="text-lg text-white max-w-2xl leading-relaxed">
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
                 src="https://i.pinimg.com/736x/04/c0/32/04c0324cc13083806e419d6785e50351.jpg" 
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

          

             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
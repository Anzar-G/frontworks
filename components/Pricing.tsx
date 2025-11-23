
import React, { useState } from 'react';
import { Check, Star, Info, Server, ChevronDown, ChevronUp } from 'lucide-react';
import { PRICING_PACKAGES, HOSTING_INFO } from '../constants';

interface PricingProps {
  onSelectPackage: (pkgName: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onSelectPackage }) => {
  // State to track expanded pricing card on mobile
  const [expandedPackageId, setExpandedPackageId] = useState<string | null>(null);

  const togglePackage = (id: string) => {
    setExpandedPackageId(prev => prev === id ? null : id);
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">Paket Jasa</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Pengembangan Web - Front-end Only 🎨
          </p>
          <div className="mt-4 max-w-3xl text-lg text-slate-500 mx-auto bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <p className="font-medium text-slate-700 mb-2">Fokus Kami:</p>
            <p className="leading-relaxed">
              Spesialis dalam menciptakan tampilan (UI) dan pengalaman pengguna (UX) yang memukau, responsif, dan interaktif menggunakan teknologi <em>front-end</em> modern (React, Next.js). Solusi ideal bagi Anda yang sudah memiliki API <em>back-end</em> atau membutuhkan visualisasi data tanpa pengembangan server-side kustom.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {PRICING_PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative flex flex-col p-6 md:p-8 bg-white rounded-2xl transition-all duration-300 ${
                pkg.isPopular 
                  ? 'border-2 border-brand-500 shadow-2xl z-10' 
                  : 'border border-slate-200 shadow-sm'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-brand-500 text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-md uppercase tracking-wider">
                    <Star size={12} fill="currentColor" /> Paling Populer
                  </span>
                </div>
              )}

              {/* Card Header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-900">{pkg.name}</h3>
                <div className="mt-4 flex items-baseline text-slate-900">
                  <span className="text-2xl font-extrabold tracking-tight">
                    {pkg.price}
                  </span>
                </div>
                {/* Mobile Toggle Button */}
                <button 
                  onClick={() => togglePackage(pkg.id)}
                  className="md:hidden w-full mt-4 flex items-center justify-between text-sm text-brand-600 font-medium bg-brand-50 px-3 py-2 rounded-lg"
                >
                  {expandedPackageId === pkg.id ? 'Sembunyikan Detail' : 'Lihat Fitur & Detail'}
                  {expandedPackageId === pkg.id ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
                </button>
              </div>

              {/* Description & Features (Collapsible on Mobile) */}
              <div className={`
                ${expandedPackageId === pkg.id ? 'block' : 'hidden'} 
                md:block flex-1 transition-all duration-300 ease-in-out
              `}>
                <p className="text-sm text-slate-500 mb-6">{pkg.description}</p>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-green-500" />
                      </div>
                      <p className="ml-3 text-sm text-slate-600">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onSelectPackage(pkg.name)}
                className={`w-full py-4 px-6 rounded-xl font-bold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 mt-auto ${
                  pkg.isPopular
                    ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-500/30'
                    : 'bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {pkg.buttonText}
              </button>
            </div>
          ))}
        </div>
        
        {/* Domain & Hosting Disclaimer */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-0">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-100 p-2 rounded-lg text-amber-600">
                <Server size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-800">
                Penting: Perihal Domain & Hosting
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {HOSTING_INFO.map((info, idx) => (
                <div key={idx} className="bg-white/60 p-4 rounded-xl border border-amber-100">
                  <h4 className="font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
                    <Info size={14} className="text-amber-500" />
                    {info.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {info.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 text-center">
             <p className="text-slate-400 text-xs">
                * Harga dapat berubah tergantung kompleksitas fitur tambahan.
                <button onClick={() => onSelectPackage('Konsultasi Custom')} className="ml-1 text-brand-600 hover:text-brand-800 font-medium underline">
                    Hubungi saya untuk penawaran khusus.
                </button>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
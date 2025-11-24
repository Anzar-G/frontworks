import React from 'react';
import { SERVICES } from '../constants';

interface ServicesProps {
  withTopGradient?: boolean;
}

const Services: React.FC<ServicesProps> = ({ withTopGradient = false }) => {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors" id="services">
      {withTopGradient && (
        <div
          className="pointer-events-none absolute left-0 top-0 w-full h-32 z-30"
          style={{ background: 'linear-gradient(to bottom, #111 0%, rgba(0,0,0,0) 100%)' }}
        />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-brand-500 dark:text-brand-400 font-semibold tracking-wide uppercase">Layanan</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Solusi Frontend untuk Era AI
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 dark:text-slate-300 mx-auto">
            Spesialisasi dalam membangun antarmuka modern yang menjembatani kecerdasan buatan dengan pengguna akhir.
          </p>
        </div>

        {/* 
          MOBILE: Vertical Stack (Natural scrolling)
          DESKTOP: Standard Grid
        */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
           {/* Desktop View */}
           {SERVICES.map((service) => (
            <div key={service.id} className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl hover:shadow-lg transition-all duration-300 border border-slate-100 dark:border-slate-700 group">
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-lg shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="text-brand-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile View: Vertical Stack */}
        <div className="md:hidden flex flex-col space-y-4">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-slate-50 dark:bg-slate-900 p-5 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-start gap-4 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-white dark:bg-slate-800 rounded-lg shadow-sm flex items-center justify-center text-brand-600">
                <service.icon size={20} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-1 leading-tight">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
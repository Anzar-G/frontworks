import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">Testimoni</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Kata Mereka Tentang Saya
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile 2-Grid Carousel */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory space-x-4 pb-6 hide-scrollbar px-2">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="flex-none w-[85%] sm:w-[45%] snap-center"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        <div className="mt-4 text-center md:hidden">
            <span className="text-xs text-slate-400">Geser untuk melihat testimoni lainnya &rarr;</span>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 h-full flex flex-col relative">
    <Quote className="absolute top-6 right-6 text-brand-200" size={32} />
    <p className="text-slate-600 text-sm leading-relaxed italic mb-6 flex-grow relative z-10">
      "{testimonial.quote}"
    </p>
    <div className="flex items-center gap-4 mt-auto">
      <img 
        src={testimonial.avatar} 
        alt={testimonial.name} 
        className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
      />
      <div>
        <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
        <p className="text-xs text-brand-600 font-medium">{testimonial.role}, {testimonial.company}</p>
      </div>
    </div>
  </div>
);

export default Testimonials;
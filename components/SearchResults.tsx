import React from 'react';
import { PROJECTS, SERVICES, PRICING_PACKAGES, TESTIMONIALS } from '../constants';
import { Project, Service, PricingPackage, Testimonial } from '../types';

interface SearchResultsProps {
  query: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ query }) => {
  const normalized = query.trim().toLowerCase();

  const projectMatches: Project[] = !normalized
    ? []
    : PROJECTS.filter((p) => {
        const haystack = [
          p.title,
          p.description,
          p.category,
          ...(p.techStack || []),
        ]
          .join(' ')
          .toLowerCase();
        return haystack.includes(normalized);
      });

  const serviceMatches: Service[] = !normalized
    ? []
    : SERVICES.filter((s) =>
        `${s.title} ${s.description}`.toLowerCase().includes(normalized)
      );

  const pricingMatches: PricingPackage[] = !normalized
    ? []
    : PRICING_PACKAGES.filter((p) => {
        const haystack = [p.name, p.description, ...(p.features || [])]
          .join(' ')
          .toLowerCase();
        return haystack.includes(normalized);
      });

  const testimonialMatches: Testimonial[] = !normalized
    ? []
    : TESTIMONIALS.filter((t) => {
        const haystack = [t.name, t.role, t.company, t.quote]
          .join(' ')
          .toLowerCase();
        return haystack.includes(normalized);
      });

  const hasResults =
    projectMatches.length > 0 ||
    serviceMatches.length > 0 ||
    pricingMatches.length > 0 ||
    testimonialMatches.length > 0;

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-950 transition-colors min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs font-semibold tracking-wide text-brand-600 dark:text-brand-400 uppercase mb-2">
            Hasil Pencarian
          </p>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            "{query || 'Ketik kata kunci di navbar'}"
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-xl">
            Saat ini pencarian memindai:
            judul, deskripsi, kategori, dan tech stack dari proyek; layanan; paket harga; dan testimoni.
          </p>
        </div>

        {!query.trim() && (
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Mulai ketik di search bar di atas untuk melihat hasil.
          </p>
        )}

        {query.trim() && !hasResults && (
          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 p-8 text-center">
            <p className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-1">
              Tidak ada hasil yang cocok.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Coba gunakan kata kunci lain atau lebih umum.
            </p>
          </div>
        )}

        {/* Services Section */}
        {serviceMatches.length > 0 && (
          <div className="mt-8">
            <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wide mb-3">
              Layanan ({serviceMatches.length})
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {serviceMatches.map((service) => (
                <div
                  key={service.id}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col gap-2"
                >
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects Section */}
        {projectMatches.length > 0 && (
          <div className="mt-8">
            <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wide mb-3">
              Proyek Portofolio ({projectMatches.length})
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectMatches.map((project) => (
                <div
                  key={project.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        {project.category}
                      </p>
                      <h3 className="mt-1 text-base font-bold text-slate-900 dark:text-white line-clamp-2">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-auto">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-[10px] font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pricing Section */}
        {pricingMatches.length > 0 && (
          <div className="mt-8">
            <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wide mb-3">
              Paket Jasa ({pricingMatches.length})
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {pricingMatches.map((pkg) => (
                <div
                  key={pkg.id}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col gap-2"
                >
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {pkg.name}
                  </h3>
                  <p className="text-xs font-semibold text-brand-600 dark:text-brand-400">
                    {pkg.price}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3">
                    {pkg.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonials Section */}
        {testimonialMatches.length > 0 && (
          <div className="mt-8 mb-4">
            <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wide mb-3">
              Testimoni ({testimonialMatches.length})
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {testimonialMatches.map((t) => (
                <div
                  key={t.id}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col gap-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {t.name}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      {t.role}
                    </p>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 italic line-clamp-4">
                    "{t.quote}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchResults;

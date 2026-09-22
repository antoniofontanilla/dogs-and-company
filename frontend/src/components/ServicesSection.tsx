import React from 'react';
import { Clock, ArrowRight, Sparkles } from 'lucide-react';
import { Service } from '../types';

interface ServicesSectionProps {
  services: Service[];
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  onSelectService,
}) => {
  return (
    <section id="servicios" className="py-20 bg-white border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Nuestros Servicios</span>
          </div>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight"
          >
            Servicios de Peluquería & Estética Canina
          </h2>
          <p className="mt-3 text-base text-stone-600">
            Cada tratamiento se adapta a la raza, condición de la piel y temperamento de tu mascota.
          </p>
        </div>

        {/* Visual Catalog Grid */}
        <div
          id="services-catalog-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group bg-[#faf8f5] rounded-2xl border border-stone-200/80 overflow-hidden flex flex-col hover:border-amber-300 hover:shadow-lg hover:shadow-amber-100/50 transition-all duration-300"
            >
              {/* Service Photo */}
              <div className="relative h-48 w-full overflow-hidden bg-stone-200">
                <img
                  id={service.imageId}
                  src={service.imageUrl}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-lg text-xs font-bold text-stone-900 shadow-xs flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-600" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Service Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3
                      id={`service-title-${service.id}`}
                      className="text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors"
                    >
                      {service.title}
                    </h3>
                    <span
                      id={`service-price-${service.id}`}
                      className="text-base font-extrabold text-amber-600 shrink-0"
                    >
                      {service.price}
                    </span>
                  </div>

                  {/* Short 2-line description in Spanish */}
                  <p
                    id={`service-desc-${service.id}`}
                    className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-2"
                  >
                    {service.description}
                  </p>
                </div>

                {/* Only 1 button per card: "Reservar este servicio" */}
                <button
                  id={`btn-book-service-${service.id}`}
                  onClick={() => onSelectService(service.id)}
                  className="w-full mt-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-amber-500 text-stone-800 hover:text-stone-950 font-bold text-sm py-2.5 px-4 rounded-xl border border-stone-300 hover:border-amber-500 shadow-2xs transition-all duration-200 cursor-pointer active:scale-98"
                >
                  <span>Reservar este servicio</span>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-500 group-hover:text-stone-900" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

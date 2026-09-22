import React from 'react';
import { Camera, Heart, Star } from 'lucide-react';
import { ClientGalleryItem } from '../types';

interface GallerySectionProps {
  galleryItems: ClientGalleryItem[];
}

export const GallerySection: React.FC<GallerySectionProps> = ({ galleryItems }) => {
  return (
    <section id="galeria" className="py-20 bg-white border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-800 text-xs font-bold tracking-wider uppercase mb-3">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>Galería de Mascotas</span>
          </div>
          <h2
            id="gallery-heading"
            className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight"
          >
            Nuestros Clientes Felices
          </h2>
          <p className="mt-3 text-base text-stone-600">
            Una muestra del cariño, precisión y dedicación con la que tratamos a cada uno de nuestros pequeños visitantes.
          </p>
        </div>

        {/* Visual Gallery Grid (6 photos of groomed pets) */}
        <div
          id="gallery-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {galleryItems.map((item) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              className="group relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Pet Photo */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <img
                  id={item.imageId}
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                {/* Star rating overlay */}
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 text-amber-300 text-xs font-bold">
                  <Star className="w-3 h-3 fill-amber-300" />
                  <span>5.0</span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3
                      id={`gallery-pet-name-${item.id}`}
                      className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5"
                    >
                      <span>{item.petName}</span>
                      <span className="text-xs font-medium text-amber-300 bg-amber-900/50 px-2 py-0.5 rounded-md">
                        {item.breed}
                      </span>
                    </h3>
                  </div>

                  <p
                    id={`gallery-service-${item.id}`}
                    className="text-xs text-stone-300 font-medium mb-2"
                  >
                    Tratamiento: {item.serviceReceived}
                  </p>

                  {item.testimonial && (
                    <p
                      id={`gallery-quote-${item.id}`}
                      className="text-xs italic text-stone-200/90 border-l-2 border-amber-400 pl-2 line-clamp-2"
                    >
                      "{item.testimonial}"
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

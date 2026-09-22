import React from 'react';
import { ArrowDown, Heart, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices }) => {
  return (
    <section
      id="inicio"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-amber-50/60 via-[#faf8f5] to-[#faf8f5]"
    >
      {/* Subtle organic decorative elements */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-amber-200/20 via-orange-100/30 to-amber-100/20 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Friendly pill badge */}
            <div
              id="hero-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 border border-amber-200/80 text-amber-900 text-xs sm:text-sm font-semibold shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>Peluquería & Spa Canino en Santiago de Chile</span>
            </div>

            {/* Clear and friendly headline in Spanish */}
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.12]"
            >
              El mejor cuidado y cariño para tu <span className="text-amber-600 underline decoration-amber-300 decoration-wavy decoration-2 underline-offset-4">peludo</span>
            </h1>

            {/* Short subtitle highlighting the value proposition */}
            <p
              id="hero-subtitle"
              className="text-base sm:text-lg text-stone-600 max-w-xl leading-relaxed"
            >
              En Dogs & Company transformamos el momento del aseo en una experiencia placentera y libre de estrés. Cosmética botánica de alta gama, estilistas titulados y dedicación exclusiva a cada mascota.
            </p>

            {/* Trust highlights */}
            <div id="hero-value-props" className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-lg pt-1">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/70 border border-amber-100 shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Heart className="w-3.5 h-3.5 fill-amber-500 text-amber-600" />
                </div>
                <span className="text-xs font-semibold text-stone-800">Trato amoroso</span>
              </div>

              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/70 border border-amber-100 shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <span className="text-xs font-semibold text-stone-800">100% Sin estrés</span>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-2 p-2 rounded-xl bg-white/70 border border-amber-100 shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                </div>
                <span className="text-xs font-semibold text-stone-800">Cosmética bio</span>
              </div>
            </div>

            {/* ONLY 1 main CTA button: "Ver Servicios" */}
            <div className="pt-2">
              <button
                id="hero-btn-servicios"
                onClick={onExploreServices}
                className="inline-flex items-center gap-2.5 bg-stone-900 hover:bg-stone-800 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>Ver Servicios</span>
                <ArrowDown className="w-4 h-4 text-amber-400 animate-bounce" />
              </button>
            </div>
          </div>

          {/* Main Featured Image: Large photo of a happy or well-groomed dog */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Backing decorative glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 to-orange-300/30 rounded-3xl transform rotate-2 scale-105 filter blur-lg -z-10" />

              {/* Card wrapper */}
              <div className="relative rounded-3xl overflow-hidden bg-white p-3 shadow-xl shadow-stone-200/60 border border-stone-200/60">
                <img
                  id="hero-img-dog"
                  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1000&q=85"
                  alt="Perro feliz y saludable disfrutando de los cuidados de Dogs & Company"
                  className="w-full h-80 sm:h-96 lg:h-[420px] object-cover rounded-2xl"
                  loading="eager"
                />

                {/* Floating experience badge */}
                <div
                  id="hero-floating-badge"
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-amber-100 shadow-lg flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-700 font-bold text-base">
                      🐾
                    </div>
                    <div>
                      <p className="text-xs font-bold text-stone-900">Salón Canino Autorizado</p>
                      <p className="text-[11px] text-stone-500">+1.200 perritos felices atendidos</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg">
                    <span className="text-amber-500 text-xs">★</span>
                    <span className="text-xs font-bold text-amber-900">4.9 / 5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

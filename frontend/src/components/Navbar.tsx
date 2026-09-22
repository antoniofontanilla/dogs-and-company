import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Sparkles } from 'lucide-react';
import { salonInfo } from '../data/salonData';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-amber-100/80 py-3.5'
          : 'bg-white/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo on the left */}
          <a
            id="brand-logo"
            href="#inicio"
            onClick={(e) => handleLinkClick(e, 'inicio')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
              <span className="text-xl">🐾</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl sm:text-2xl text-stone-900 tracking-tight flex items-center gap-1.5 font-['Outfit']">
                {salonInfo.name}
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-amber-700 uppercase -mt-0.5">
                Peluquería Canina & Boutique
              </span>
            </div>
          </a>

          {/* Simple centered links with smooth scroll */}
          <nav id="nav-links-desktop" className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <a
              id="nav-link-inicio"
              href="#inicio"
              onClick={(e) => handleLinkClick(e, 'inicio')}
              className="px-4 py-2 text-stone-700 hover:text-amber-600 font-semibold text-sm rounded-lg hover:bg-amber-50/70 transition-colors"
            >
              Inicio
            </a>
            <a
              id="nav-link-servicios"
              href="#servicios"
              onClick={(e) => handleLinkClick(e, 'servicios')}
              className="px-4 py-2 text-stone-700 hover:text-amber-600 font-semibold text-sm rounded-lg hover:bg-amber-50/70 transition-colors"
            >
              Servicios
            </a>
            <a
              id="nav-link-productos"
              href="#productos"
              onClick={(e) => handleLinkClick(e, 'productos')}
              className="px-4 py-2 text-stone-700 hover:text-amber-600 font-semibold text-sm rounded-lg hover:bg-amber-50/70 transition-colors"
            >
              Productos
            </a>
            <a
              id="nav-link-ubicacion"
              href="#ubicacion"
              onClick={(e) => handleLinkClick(e, 'ubicacion')}
              className="px-4 py-2 text-stone-700 hover:text-amber-600 font-semibold text-sm rounded-lg hover:bg-amber-50/70 transition-colors"
            >
              Ubicación
            </a>
          </nav>

          {/* 1 prominent button on the right: "Agendar Cita" */}
          <div className="hidden md:flex items-center">
            <button
              id="header-btn-agendar"
              onClick={() => onNavigate('agendar-cita')}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-stone-900 hover:text-stone-950 font-bold px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md hover:shadow-amber-500/25 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-stone-900" />
              <span>Agendar Cita</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              id="mobile-btn-agendar-quick"
              onClick={() => onNavigate('agendar-cita')}
              className="bg-amber-500 text-stone-950 font-bold text-xs px-3 py-2 rounded-lg flex items-center gap-1 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Cita</span>
            </button>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-100 focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu-dropdown" className="md:hidden mt-3 pt-3 pb-4 border-t border-amber-100 flex flex-col space-y-1">
            <a
              id="mobile-nav-link-inicio"
              href="#inicio"
              onClick={(e) => handleLinkClick(e, 'inicio')}
              className="px-3 py-2 text-stone-800 font-medium rounded-lg hover:bg-amber-50 text-base"
            >
              Inicio
            </a>
            <a
              id="mobile-nav-link-servicios"
              href="#servicios"
              onClick={(e) => handleLinkClick(e, 'servicios')}
              className="px-3 py-2 text-stone-800 font-medium rounded-lg hover:bg-amber-50 text-base"
            >
              Servicios
            </a>
            <a
              id="mobile-nav-link-productos"
              href="#productos"
              onClick={(e) => handleLinkClick(e, 'productos')}
              className="px-3 py-2 text-stone-800 font-medium rounded-lg hover:bg-amber-50 text-base"
            >
              Productos
            </a>
            <a
              id="mobile-nav-link-ubicacion"
              href="#ubicacion"
              onClick={(e) => handleLinkClick(e, 'ubicacion')}
              className="px-3 py-2 text-stone-800 font-medium rounded-lg hover:bg-amber-50 text-base"
            >
              Ubicación
            </a>
            <div className="pt-2">
              <button
                id="mobile-menu-btn-agendar"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('agendar-cita');
                }}
                className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold py-3 rounded-xl shadow-sm text-base"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Cita</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

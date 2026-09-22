import React from 'react';
import { MapPin, Clock, Phone, Mail, MessageSquare, CreditCard, ShieldCheck } from 'lucide-react';
import { salonInfo } from '../data/salonData';

export const Footer: React.FC = () => {
  const whatsappUrl = `https://wa.me/${salonInfo.whatsappNumber}?text=${encodeURIComponent(
    salonInfo.whatsappMessage
  )}`;

  return (
    <footer id="ubicacion" className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-stone-800">
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-bold text-lg shadow-sm">
                🐾
              </div>
              <div>
                <span className="font-extrabold text-xl text-white font-['Outfit'] block">
                  {salonInfo.name}
                </span>
                <span className="text-xs text-amber-400 font-semibold tracking-wide">
                  {salonInfo.tagline}
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Pasión y dedicación por el bienestar animal. Especialistas en baño relajante, corte a tijera de raza y estética canina respetuosa.
            </p>
            <div className="text-xs text-stone-500 pt-1">
              <span>CIF / NIF: {salonInfo.cif}</span>
            </div>
          </div>

          {/* Col 2: Physical salon address & direct directions */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Dónde Estamos</span>
            </h4>
            <div id="footer-address" className="text-xs sm:text-sm text-stone-300 space-y-1">
              <p className="text-stone-400 text-xs mt-2">barnechea</p>
              <p>Lo Barnechea, Santiago</p>
              <p className="text-stone-400 text-xs mt-2">
                Fácil estacionamiento para clientes.
              </p>
            </div>
          </div>

          {/* Col 3: Operating Hours */}
          <div id="footer-hours-container" className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Horarios de Atención</span>
            </h4>
            <div id="footer-hours" className="text-xs sm:text-sm space-y-1.5 text-stone-300">
              <p className="flex justify-between gap-2">
                <span className="text-stone-400">Lunes a Viernes:</span>
                <span className="font-medium text-white">9:30 - 19:30 h</span>
              </p>
              <p className="flex justify-between gap-2">
                <span className="text-stone-400">Sábados:</span>
                <span className="font-medium text-white">10:00 - 14:30 h</span>
              </p>
              <p className="flex justify-between gap-2">
                <span className="text-stone-400">Domingos y festivos:</span>
                <span className="text-amber-400 font-medium">Cerrado</span>
              </p>
            </div>
          </div>

          {/* Col 4: Contact & Direct WhatsApp Link */}
          <div id="footer-contact-container" className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Contacto Directo</span>
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-stone-300">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span>{salonInfo.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span>{salonInfo.email}</span>
              </p>
            </div>

            {/* Direct WhatsApp link (the only link allowed to open in a new external tab) */}
            <div className="pt-1">
              <a
                id="footer-whatsapp-link"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md transition-all duration-200 group"
              >
                <MessageSquare className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                <span>Chatear por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Payment methods & legal footer bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div id="footer-payment-methods" className="flex items-center gap-2 flex-wrap">
            <CreditCard className="w-4 h-4 text-stone-400" />
            <span className="text-stone-400 font-medium">Métodos de pago en salón:</span>
            <span className="text-stone-300">{salonInfo.paymentMethods.join(' • ')}</span>
          </div>

          <p className="text-stone-500 text-center sm:text-right">
            © {new Date().getFullYear()} {salonInfo.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { Calendar, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { BookingFormData, Service, Product } from '../types';
import { salonInfo } from '../data/salonData';
import { createBooking } from '../api';

interface BookingSectionProps {
  services: Service[];
  selectedServiceId: string;
  onServiceChange: (serviceId: string) => void;
  inquiryProducts: Product[];
  onRemoveInquiryProduct: (productId: string) => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  services,
  selectedServiceId,
  onServiceChange,
  inquiryProducts,
  onRemoveInquiryProduct,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    customerName: '',
    petNameAndBreed: '',
    phone: '',
    serviceId: selectedServiceId || (services[0]?.id ?? ''),
    date: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<BookingFormData | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Sync selected service if changed from outside
  useEffect(() => {
    if (selectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: selectedServiceId }));
    }
  }, [selectedServiceId]);

  // Today's date in YYYY-MM-DD for min date
  const todayString = new Date().toISOString().split('T')[0];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Por favor, introduce tu nombre.';
    }
    if (!formData.petNameAndBreed.trim()) {
      newErrors.petNameAndBreed = 'Indica el nombre y raza o tamaño de tu mascota.';
    }
    if (!formData.phone.trim() || formData.phone.length < 9) {
      newErrors.phone = 'Introduce un teléfono o WhatsApp de contacto válido.';
    }
    if (!formData.serviceId) {
      newErrors.serviceId = 'Selecciona un servicio de peluquería.';
    }
    if (!formData.date) {
      newErrors.date = 'Selecciona una fecha preferida para la cita.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await createBooking(formData);
      setConfirmedBooking({ ...formData });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error al guardar la reserva:', error);
      setSubmitError('Hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setConfirmedBooking(null);
    setSubmitError(null);
    setFormData({
      customerName: '',
      petNameAndBreed: '',
      phone: '',
      serviceId: services[0]?.id || '',
      date: '',
    });
  };

  const currentSelectedService = services.find((s) => s.id === (confirmedBooking?.serviceId || formData.serviceId));

  // Generate WhatsApp message link for direct confirmation
  const getWhatsAppConfirmationUrl = () => {
    if (!confirmedBooking) return '#';
    const text = encodeURIComponent(
      `¡Hola Dogs & Company! Acabo de solicitar cita previa:\n` +
      `👤 Dueño: ${confirmedBooking.customerName}\n` +
      `🐶 Mascota: ${confirmedBooking.petNameAndBreed}\n` +
      `✂️ Servicio: ${currentSelectedService?.title || 'Servicio de peluquería'}\n` +
      `📅 Fecha: ${confirmedBooking.date}\n` +
      (inquiryProducts.length > 0
        ? `🛍️ Productos de interés: ${inquiryProducts.map((p) => p.name).join(', ')}\n`
        : '') +
      `¿Tienen disponibilidad horaria confirmada? Muchas gracias.`
    );
    return `https://wa.me/${salonInfo.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="agendar-cita" className="py-20 bg-gradient-to-b from-[#faf8f5] to-amber-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold tracking-wider uppercase mb-3">
            <Calendar className="w-3.5 h-3.5 text-amber-600" />
            <span>Cita Previa</span>
          </div>
          <h2
            id="booking-heading"
            className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight"
          >
            Reserva la Cita de tu Mascota
          </h2>
          <p className="mt-3 text-base text-stone-600">
            Rellena los datos esenciales y te confirmaremos el horario exacto al instante por teléfono o WhatsApp.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-xl shadow-stone-200/50 overflow-hidden">
          {isSubmitted && confirmedBooking ? (
            /* Confirmation Success State */
            <div id="booking-confirmation-state" className="p-8 sm:p-12 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                  ¡Solicitud Recibida con Éxito!
                </h3>
                <p className="text-stone-600 mt-2 text-sm sm:text-base max-w-lg mx-auto">
                  Gracias, <strong className="text-stone-900">{confirmedBooking.customerName}</strong>. Hemos registrado la solicitud para mimar a <strong className="text-stone-900">{confirmedBooking.petNameAndBreed}</strong>.
                </p>
              </div>

              {/* Summary Box */}
              <div className="bg-stone-50 rounded-2xl p-5 sm:p-6 text-left max-w-md mx-auto border border-stone-200 space-y-3">
                <div className="flex items-center justify-between text-sm pb-2 border-b border-stone-200">
                  <span className="text-stone-500 font-medium">Servicio:</span>
                  <span className="font-bold text-stone-900">{currentSelectedService?.title}</span>
                </div>
                <div className="flex items-center justify-between text-sm pb-2 border-b border-stone-200">
                  <span className="text-stone-500 font-medium">Tarifa estimada:</span>
                  <span className="font-bold text-amber-600">{currentSelectedService?.price}</span>
                </div>
                <div className="flex items-center justify-between text-sm pb-2 border-b border-stone-200">
                  <span className="text-stone-500 font-medium">Fecha preferente:</span>
                  <span className="font-bold text-stone-900">{confirmedBooking.date}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-stone-500 font-medium">Teléfono de contacto:</span>
                  <span className="font-bold text-stone-900">{confirmedBooking.phone}</span>
                </div>

                {inquiryProducts.length > 0 && (
                  <div className="pt-2 border-t border-stone-200 text-xs text-stone-600">
                    <span className="font-bold text-stone-700 block mb-1">Productos añadidos para consulta:</span>
                    <ul className="list-disc list-inside space-y-0.5">
                      {inquiryProducts.map((p) => (
                        <li key={p.id}>{p.name} ({p.price})</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* WhatsApp immediate notify link */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  id="btn-whatsapp-confirm"
                  href={getWhatsAppConfirmationUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl shadow-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Avisar ahora por WhatsApp</span>
                </a>

                <button
                  id="btn-new-booking"
                  onClick={handleResetForm}
                  className="w-full sm:w-auto inline-flex items-center justify-center py-3 px-6 rounded-xl font-bold text-stone-700 hover:text-stone-900 hover:bg-stone-100 border border-stone-300 transition-colors text-sm"
                >
                  Agendar otra cita
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form
              id="booking-form"
              onSubmit={handleSubmit}
              className="p-6 sm:p-10 space-y-6"
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* 1. Nombre del cliente */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="input-customer-name"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700"
                  >
                    Nombre del cliente *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="input-customer-name"
                      name="customerName"
                      value={formData.customerName}
                      onChange={(e) => {
                        setFormData({ ...formData, customerName: e.target.value });
                        if (errors.customerName) setErrors({ ...errors, customerName: '' });
                      }}
                      placeholder="Ej. Carmen García"
                      className={`w-full px-4 py-3 rounded-xl border text-stone-900 placeholder:text-stone-400 bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.customerName
                          ? 'border-rose-400 focus:ring-rose-200'
                          : 'border-stone-200 focus:border-amber-500 focus:ring-amber-200'
                      }`}
                    />
                  </div>
                  {errors.customerName && (
                    <p className="text-xs text-rose-500 font-medium">{errors.customerName}</p>
                  )}
                </div>

                {/* 2. Nombre y raza de la mascota */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="input-pet-info"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700"
                  >
                    Nombre y raza de la mascota *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="input-pet-info"
                      name="petNameAndBreed"
                      value={formData.petNameAndBreed}
                      onChange={(e) => {
                        setFormData({ ...formData, petNameAndBreed: e.target.value });
                        if (errors.petNameAndBreed) setErrors({ ...errors, petNameAndBreed: '' });
                      }}
                      placeholder="Ej. Bruno - Golden Retriever / Mestizo"
                      className={`w-full px-4 py-3 rounded-xl border text-stone-900 placeholder:text-stone-400 bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.petNameAndBreed
                          ? 'border-rose-400 focus:ring-rose-200'
                          : 'border-stone-200 focus:border-amber-500 focus:ring-amber-200'
                      }`}
                    />
                  </div>
                  {errors.petNameAndBreed && (
                    <p className="text-xs text-rose-500 font-medium">{errors.petNameAndBreed}</p>
                  )}
                </div>

                {/* 3. Teléfono / WhatsApp */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="input-phone"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700"
                  >
                    Teléfono / WhatsApp *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="input-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="Ej. 612 345 678"
                      className={`w-full px-4 py-3 rounded-xl border text-stone-900 placeholder:text-stone-400 bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.phone
                          ? 'border-rose-400 focus:ring-rose-200'
                          : 'border-stone-200 focus:border-amber-500 focus:ring-amber-200'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-rose-500 font-medium">{errors.phone}</p>
                  )}
                </div>

                {/* 4. Servicio de interés (Dropdown select) */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="select-service"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700"
                  >
                    Servicio de interés *
                  </label>
                  <div className="relative">
                    <select
                      id="select-service"
                      name="serviceId"
                      value={formData.serviceId}
                      onChange={(e) => {
                        setFormData({ ...formData, serviceId: e.target.value });
                        onServiceChange(e.target.value);
                        if (errors.serviceId) setErrors({ ...errors, serviceId: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-stone-900 bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer ${
                        errors.serviceId
                          ? 'border-rose-400 focus:ring-rose-200'
                          : 'border-stone-200 focus:border-amber-500 focus:ring-amber-200'
                      }`}
                    >
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.title} ({service.price})
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-stone-500">
                      ▼
                    </div>
                  </div>
                  {errors.serviceId && (
                    <p className="text-xs text-rose-500 font-medium">{errors.serviceId}</p>
                  )}
                </div>

                {/* 5. Fecha deseada (Preferred Date) */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label
                    htmlFor="input-date"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700"
                  >
                    Fecha deseada *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="input-date"
                      name="date"
                      min={todayString}
                      value={formData.date}
                      onChange={(e) => {
                        setFormData({ ...formData, date: e.target.value });
                        if (errors.date) setErrors({ ...errors, date: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-stone-900 bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all cursor-pointer ${
                        errors.date
                          ? 'border-rose-400 focus:ring-rose-200'
                          : 'border-stone-200 focus:border-amber-500 focus:ring-amber-200'
                      }`}
                    />
                  </div>
                  {errors.date && (
                    <p className="text-xs text-rose-500 font-medium">{errors.date}</p>
                  )}
                </div>
              </div>

              {/* Inquiry Products notification if user selected any */}
              {inquiryProducts.length > 0 && (
                <div
                  id="booking-products-inquiry-box"
                  className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200/80 text-xs sm:text-sm text-stone-800"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-amber-950 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      Productos añadidos a tu consulta ({inquiryProducts.length}):
                    </span>
                    <span className="text-[11px] text-amber-800">Se incluirán en tu reserva</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {inquiryProducts.map((prod) => (
                      <span
                        key={prod.id}
                        className="inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-amber-200 text-stone-800 text-xs shadow-2xs"
                      >
                        <span>{prod.name}</span>
                        <button
                          type="button"
                          onClick={() => onRemoveInquiryProduct(prod.id)}
                          className="ml-1 text-stone-400 hover:text-rose-600 font-bold"
                          title="Quitar de la consulta"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Error message from server */}
              {submitError && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl font-medium">
                  {submitError}
                </div>
              )}

              {/* Submission button */}
              <div className="pt-4">
                <button
                  type="submit"
                  id="btn-confirm-booking"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed text-stone-950 font-extrabold text-base py-4 px-6 rounded-2xl shadow-md hover:shadow-lg hover:shadow-amber-500/25 active:scale-98 transition-all duration-200 cursor-pointer"
                >
                  <Calendar className="w-5 h-5 text-stone-950" />
                  <span>{isSubmitting ? 'Guardando reserva...' : 'Confirmar Cita'}</span>
                </button>
                <p className="text-center text-[11px] text-stone-600 font-semibold mt-2.5">
                  Sin pago previo online. Te contactaremos para validar el horario y resolver cualquier duda.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
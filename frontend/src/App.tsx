import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProductsSection } from './components/ProductsSection';
import { GallerySection } from './components/GallerySection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { Service, Product, ClientGalleryItem } from './types';
import { getServices, getProducts, getGallery } from './api';

export default function App() {
  const [services, setServices] = useState<Service[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [gallery, setGallery] = useState<ClientGalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [inquiryProducts, setInquiryProducts] = useState<Product[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    // Cargar datos en paralelo desde Django/MySQL
    Promise.all([getServices(), getProducts(), getGallery()])
      .then(([servicesData, productsData, galleryData]) => {
        setServices(servicesData);
        setProducts(productsData);
        setGallery(galleryData);

        // Seleccionar el primer servicio de la lista por defecto
        if (servicesData.length > 0) {
          setSelectedServiceId(String(servicesData[0].id));
        }
      })
      .catch((error) => {
        console.error('Error al obtener datos del servidor:', error);
        showToast('Error al conectar con el servidor.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70; // Header offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleSelectServiceFromCard = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    const service = services.find((s) => String(s.id) === String(serviceId));
    if (service) {
      showToast(`Servicio seleccionado: ${service.title}. Ya puedes confirmar tu cita.`);
    }
    scrollToSection('agendar-cita');
  };

  const handleAddProductInquiry = (product: Product) => {
    if (inquiryProducts.some((p) => p.id === product.id)) {
      setInquiryProducts((prev) => prev.filter((p) => p.id !== product.id));
      showToast(`Producto retirado de tu consulta: ${product.name}`);
    } else {
      setInquiryProducts((prev) => [...prev, product]);
      showToast(`¡Añadido! ${product.name} se incluirá en tu consulta de cita.`);
    }
  };

  const handleRemoveProductInquiry = (productId: string) => {
    setInquiryProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3800);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#faf8f5]">
        <div className="text-center">
          <p className="text-amber-800 font-bold text-lg mb-2">🐾 Cargando Dogs & Company...</p>
          <p className="text-stone-500 text-sm">Obteniendo datos desde la base de datos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#2c2724]">
      {/* Fixed Header */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Single Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onExploreServices={() => scrollToSection('servicios')} />

        {/* Section 1: Grooming Services */}
        <ServicesSection
          services={services}
          onSelectService={handleSelectServiceFromCard}
        />

        {/* Section 2: Products for Sale */}
        <ProductsSection
          products={products}
          onAddProductInquiry={handleAddProductInquiry}
          inquiryProductIds={inquiryProducts.map((p) => p.id)}
        />

        {/* Section 3: Visual Gallery "Nuestros Clientes" */}
        <GallerySection galleryItems={gallery} />

        {/* Section 4: Appointment Booking & Contact Form */}
        <BookingSection
          services={services}
          selectedServiceId={selectedServiceId}
          onServiceChange={setSelectedServiceId}
          inquiryProducts={inquiryProducts}
          onRemoveInquiryProduct={handleRemoveProductInquiry}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Notification Toast for user action feedback */}
      {toastMessage && (
        <div
          id="app-toast-notification"
          role="status"
          className="fixed bottom-6 right-6 z-50 max-w-sm bg-stone-900 text-white text-xs sm:text-sm px-4 py-3 rounded-2xl shadow-xl border border-stone-700/80 flex items-center gap-3 animate-fade-in"
        >
          <span className="text-amber-400 font-bold text-base">🐾</span>
          <p className="font-medium">{toastMessage}</p>
        </div>
      )}
    </div>
  );
}
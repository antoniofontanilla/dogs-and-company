export interface Service {
  id: string;
  title: string;
  price: string;
  priceNum: number;
  description: string;
  duration: string;
  imageUrl: string;
  imageAlt: string;
  imageId: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: string;
  priceNum: number;
  stockStatus: string;
  imageUrl: string;
  imageAlt: string;
  imageId: string;
}

export interface ClientGalleryItem {
  id: string;
  petName: string;
  breed: string;
  serviceReceived: string;
  testimonial?: string;
  imageUrl: string;
  imageAlt: string;
  imageId: string;
}

export interface BookingFormData {
  customerName: string;
  petNameAndBreed: string;
  phone: string;
  serviceId: string;
  date: string;
  timeSlot?: string;
  notes?: string;
}

export interface SalonInfo {
  name: string;
  tagline: string;
  address: string;
  city: string;
  phone: string;
  phoneFormatted: string;
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
  cif: string;
  hours: {
    weekdays: string;
    saturdays: string;
    sundays: string;
  };
  paymentMethods: string[];
}

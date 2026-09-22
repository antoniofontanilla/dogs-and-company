import { Service, Product, ClientGalleryItem, SalonInfo } from '../types';

export const salonInfo: SalonInfo = {
  name: "Dogs & Company",
  tagline: "Peluquería Canina & Boutique",
  address: "Calle de las Huellas 42, Barrio Salamanca",
  city: "28001 Madrid, España",
  phone: "+34 912 345 678",
  phoneFormatted: "912 345 678",
  whatsappNumber: "34612345678",
  whatsappMessage: "¡Hola Dogs & Company! Me gustaría consultar disponibilidad para una cita de peluquería canina.",
  email: "hola@dogsandcompany.es",
  cif: "B-88349201",
  hours: {
    weekdays: "Lunes a Viernes: 9:30 - 19:30 h",
    saturdays: "Sábados: 10:00 - 14:30 h",
    sundays: "Domingos: Cerrado"
  },
  paymentMethods: ["Efectivo", "Tarjeta (Visa, Mastercard)", "Bizum", "Apple Pay / Google Pay"]
};

export const servicesData: Service[] = [
  {
    id: "bano-deslanado",
    title: "Baño Relajante & Deslanado",
    price: "Desde 28€",
    priceNum: 28,
    description: "Baño con champú vegetal hidratante, eliminación de pelo muerto y secado suave con toalla térmica sin estrés.",
    duration: "60 - 75 min",
    imageUrl: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Perro disfrutando de un baño relajante con espuma en peluquería canina",
    imageId: "img-service-bano-deslanado"
  },
  {
    id: "corte-estilismo",
    title: "Corte de Raza & Estilismo",
    price: "Desde 38€",
    priceNum: 38,
    description: "Corte técnico a tijera o máquina adaptado al estándar de la raza y anatomía de tu peludo con acabado profesional.",
    duration: "75 - 90 min",
    imageUrl: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Perro recién arreglado con corte de pelo profesional en Dogs & Company",
    imageId: "img-service-corte-estilismo"
  },
  {
    id: "spa-integral",
    title: "Tratamiento Spa Completo",
    price: "Desde 49€",
    priceNum: 49,
    description: "Baño con ozonoterapia, mascarilla de keratina botánica, corte estilizado, limpieza ótica y arreglo de almohadillas.",
    duration: "90 - 120 min",
    imageUrl: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Perro relajado recibiendo cuidados de spa y mascarilla en peluquería canina",
    imageId: "img-service-spa-integral"
  },
  {
    id: "higiene-mantenimiento",
    title: "Higiene & Mantenimiento Exprés",
    price: "Desde 19€",
    priceNum: 19,
    description: "Corte y limado de uñas, rasurado higiénico, limpieza de oídos y lagrimales, más cepillado nutritivo de acabado.",
    duration: "30 - 45 min",
    imageUrl: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Cuidados de patas, uñas e higiene en peluquería canina Dogs & Company",
    imageId: "img-service-higiene-mantenimiento"
  }
];

export const productsData: Product[] = [
  {
    id: "prod-champu-organico",
    name: "Champú Orgánico Nutritivo con Aloe Vera",
    brand: "NaturPet Botanic",
    category: "Cosmética & Higiene",
    price: "15,50€",
    priceNum: 15.5,
    stockStatus: "En Stock",
    imageUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Bote de champú orgánico natural para perros con extracto de aloe vera",
    imageId: "img-product-champu-organico"
  },
  {
    id: "prod-collar-seresto",
    name: "Collar Antiparasitario Larga Duración (8 Meses)",
    brand: "Seresto / Elanco",
    category: "Antiparasitarios",
    price: "32,90€",
    priceNum: 32.9,
    stockStatus: "En Stock",
    imageUrl: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Collar antiparasitario protector para perros en caja Dogs & Company",
    imageId: "img-product-collar-seresto"
  },
  {
    id: "prod-pipetas-frontline",
    name: "Pipetas Spot-On Tri-Act (Pulgas, Garrapatas y Flebotomos)",
    brand: "Frontline Tri-Act",
    category: "Antiparasitarios",
    price: "24,50€",
    priceNum: 24.5,
    stockStatus: "En Stock",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Tratamiento antiparasitario tópico en pipetas para perros",
    imageId: "img-product-pipetas-frontline"
  },
  {
    id: "prod-arnes-ergonomico",
    name: "Arnés Ergonómico Antitirones con Forro Transpirable",
    brand: "ComfortWalk Pro",
    category: "Accesorios de Paseo",
    price: "27,00€",
    priceNum: 27.0,
    stockStatus: "En Stock",
    imageUrl: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Arnés ergonómico para perro acolchado y resistente",
    imageId: "img-product-arnes-ergonomico"
  },
  {
    id: "prod-cepillo-mantequilla",
    name: "Cepillo de Púas Finas para Deslanado & Desenredo",
    brand: "GroomingMaster",
    category: "Accesorios de Cepillado",
    price: "18,20€",
    priceNum: 18.2,
    stockStatus: "En Stock",
    imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Cepillo profesional de peluquería canina con mango de madera",
    imageId: "img-product-cepillo-mantequilla"
  },
  {
    id: "prod-balsamo-almohadillas",
    name: "Bálsamo Regenerador de Almohadillas y Trufa 100% Cera Natural",
    brand: "BioPaw Lab",
    category: "Cuidado Dermatológico",
    price: "13,90€",
    priceNum: 13.9,
    stockStatus: "En Stock",
    imageUrl: "https://images.unsplash.com/photo-1608248597359-548c26707324?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Bálsamo protector y reparador para huellas y nariz de perro",
    imageId: "img-product-balsamo-almohadillas"
  }
];

export const clientGallery: ClientGalleryItem[] = [
  {
    id: "client-1",
    petName: "Max",
    breed: "Golden Retriever",
    serviceReceived: "Baño Relajante & Deslanado Profundo",
    testimonial: "¡Salió oliendo a limpio y con el manto sedoso como nunca! Trato de diez.",
    imageUrl: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Max, un Golden Retriever feliz y limpio tras su baño en Dogs & Company",
    imageId: "img-gallery-client-max"
  },
  {
    id: "client-2",
    petName: "Coco",
    breed: "Caniche Toy",
    serviceReceived: "Corte a Tijera Estilo Peluche",
    testimonial: "El corte más bonito que le han hecho jamás. Sin nada de estrés ni temblores.",
    imageUrl: "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Coco, un Caniche Toy con corte a tijera impecable y esponjoso",
    imageId: "img-gallery-client-coco"
  },
  {
    id: "client-3",
    petName: "Luna",
    breed: "Bichón Maltés",
    serviceReceived: "Tratamiento Spa & Keratina",
    testimonial: "El pelo blanco recuperó todo su brillo y blancura natural. Encantada con las chicas.",
    imageUrl: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Luna, Bichón Maltés con pelo blanco brillante y lazo en Dogs & Company",
    imageId: "img-gallery-client-luna"
  },
  {
    id: "client-4",
    petName: "Toby",
    breed: "Schnauzer Miniatura",
    serviceReceived: "Corte de Raza Estándar & Barba",
    testimonial: "Le dejaron la barba y cejas perfectas. Son unos verdaderos artistas con la tijera.",
    imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Toby, Schnauzer con corte clásico definido y perfilado",
    imageId: "img-gallery-client-toby"
  },
  {
    id: "client-5",
    petName: "Milo",
    breed: "Pomerania",
    serviceReceived: "Deslanado Especial & Baño Spa",
    testimonial: "Milo parecía una nube de algodón esponjosa. Cuidaron muchísimo su piel delicada.",
    imageUrl: "https://images.unsplash.com/photo-1579213838051-dc00a1b63517?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Milo, Pomerania esponjoso con pelaje perfectamente cepillado",
    imageId: "img-gallery-client-milo"
  },
  {
    id: "client-6",
    petName: "Bella",
    breed: "Cocker Spaniel Inglés",
    serviceReceived: "Limpieza Ótica & Corte Clásico",
    testimonial: "Especial atención a sus orejas largas y delicadas. Volvemos cada mes sin falta.",
    imageUrl: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Bella, Cocker Spaniel con orejas peinadas y pelaje suave y dorado",
    imageId: "img-gallery-client-bella"
  }
];

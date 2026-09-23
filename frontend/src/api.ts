import axios from 'axios';
import { Service, Product, ClientGalleryItem, BookingFormData } from './types';

// Detecta si estamos en producción (Render) o en local
const API_URL = (import.meta as any).env.VITE_API_URL || 'http://127.0.0.1:8000/api';
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getServices = async (): Promise<Service[]> => {
  const response = await api.get('/services/');
  return response.data;
};

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get('/products/');
  return response.data;
};

export const getGallery = async (): Promise<ClientGalleryItem[]> => {
  const response = await api.get('/gallery/');
  return response.data;
};

export const createBooking = async (bookingData: BookingFormData) => {
  const response = await api.post('/bookings/', bookingData);
  return response.data;
};

export default api;
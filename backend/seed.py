import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from api.models import Service, Product, ClientGalleryItem

def run_seed():
    print("Cargando datos iniciales en la base de datos...")

    # Limpiar datos anteriores para no duplicar
    Service.objects.all().delete()
    Product.objects.all().delete()
    ClientGalleryItem.objects.all().delete()

    # 1. Cargar Servicios
    services = [
        {
            "title": "Corte y Estilismo Canino",
            "price": "$25.000",
            "price_num": 25000,
            "description": "Corte de pelo según la raza, baño con champú nutritivo, secado, cepillado y arreglo de uñas.",
            "duration": "60 min",
            "image_url": "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800",
            "image_alt": "Perro siendo peinado en peluquería",
            "image_id": "service-1"
        },
        {
            "title": "Baño Hidratante y Desparasitante",
            "price": "$18.000",
            "price_num": 18000,
            "description": "Baño completo con tratamiento hidratante, limpieza de oídos, corte de uñas y vaciado de glándulas anales.",
            "duration": "45 min",
            "image_url": "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?auto=format&fit=crop&q=80&w=800",
            "image_alt": "Perro recibiendo baño con espuma",
            "image_id": "service-2"
        },
        {
            "title": "Spa Felino Completo",
            "price": "$22.000",
            "price_num": 22000,
            "description": "Servicio especializado para gatos en zona silenciosa: cepillado profundo, baño seco/húmedo según temperamento y uñas.",
            "duration": "50 min",
            "image_url": "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800",
            "image_alt": "Gato relajado en sesión de cuidado",
            "image_id": "service-3"
        }
    ]

    for s in services:
        Service.objects.create(**s)

    # 2. Cargar Productos
    products = [
        {
            "name": "Champú Orgánico de Avena",
            "brand": "NaturPet",
            "category": "Higiene",
            "price": "$12.500",
            "price_num": 12500,
            "stock_status": "En stock",
            "image_url": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
            "image_alt": "Botella de champú para mascotas",
            "image_id": "prod-1"
        },
        {
            "name": "Cepillo Mágico Deslanador",
            "brand": "FurCare",
            "category": "Accesorios",
            "price": "$15.900",
            "price_num": 15900,
            "stock_status": "En stock",
            "image_url": "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800",
            "image_alt": "Cepillo profesional para pelo de mascota",
            "image_id": "prod-2"
        }
    ]

    for p in products:
        Product.objects.create(**p)

    # 3. Cargar Galería
    gallery = [
        {
            "pet_name": "Max",
            "breed": "Golden Retriever",
            "service_received": "Corte y Estilismo Canino",
            "testimonial": "¡Dejaron a Max brillante y súper suave! Excelente atención.",
            "image_url": "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800",
            "image_alt": "Golden Retriever feliz tras su baño",
            "image_id": "gal-1"
        },
        {
            "pet_name": "Luna",
            "breed": "Gato Persa",
            "service_received": "Spa Felino Completo",
            "testimonial": "Tienen mucha paciencia con los gatos. Luna quedó hermosísima.",
            "image_url": "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&q=80&w=800",
            "image_alt": "Gata Persa esponjosa y limpia",
            "image_id": "gal-2"
        }
    ]

    for g in gallery:
        ClientGalleryItem.objects.create(**g)

    print("¡Datos cargados con éxito en MySQL!")

if __name__ == '__main__':
    run_seed()
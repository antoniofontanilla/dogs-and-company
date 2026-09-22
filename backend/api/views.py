from rest_framework import viewsets
from .models import Service, Product, ClientGalleryItem, Booking
from .serializers import (
    ServiceSerializer, 
    ProductSerializer, 
    ClientGalleryItemSerializer, 
    BookingSerializer
)

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ClientGalleryItemViewSet(viewsets.ModelViewSet):
    queryset = ClientGalleryItem.objects.all()
    serializer_class = ClientGalleryItemSerializer


class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
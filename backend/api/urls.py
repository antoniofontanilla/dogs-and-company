from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    ServiceViewSet, 
    ProductViewSet, 
    ClientGalleryItemViewSet, 
    BookingViewSet
)

router = DefaultRouter()
router.register(r'services', ServiceViewSet)
router.register(r'products', ProductViewSet)
router.register(r'gallery', ClientGalleryItemViewSet)
router.register(r'bookings', BookingViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
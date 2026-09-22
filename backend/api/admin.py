from django.contrib import admin
from .models import Booking

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    # Columnas que se mostrarán en la lista del panel
    list_display = ('id', 'customer_name', 'pet_name_and_breed', 'phone', 'service_id', 'date', 'created_at')
    
    # Filtros laterales
    list_filter = ('date', 'created_at')
    
    # Buscador por nombre de cliente, mascota o teléfono
    search_fields = ('customer_name', 'pet_name_and_breed', 'phone')
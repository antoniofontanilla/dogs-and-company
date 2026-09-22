from django.db import models

# Create your models here.
from django.db import models

class Service(models.Model):
    title = models.CharField(max_length=150)
    price = models.CharField(max_length=50, help_text="Ej: $15.000")
    price_num = models.IntegerField(help_text="Valor numérico para cálculos")
    description = models.TextField()
    duration = models.CharField(max_length=50, help_text="Ej: 1 hora, 45 min")
    image_url = models.URLField(max_length=500, blank=True, null=True)
    image_alt = models.CharField(max_length=200, blank=True, null=True)
    image_id = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.title


class Product(models.Model):
    name = models.CharField(max_length=150)
    brand = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    price = models.CharField(max_length=50, help_text="Ej: $8.500")
    price_num = models.IntegerField(help_text="Valor numérico para cálculos")
    stock_status = models.CharField(max_length=50, default="Disponible")
    image_url = models.URLField(max_length=500, blank=True, null=True)
    image_alt = models.CharField(max_length=200, blank=True, null=True)
    image_id = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return f"{self.name} - {self.brand}"


class ClientGalleryItem(models.Model):
    pet_name = models.CharField(max_length=100)
    breed = models.CharField(max_length=100)
    service_received = models.CharField(max_length=150)
    testimonial = models.TextField(blank=True, null=True)
    image_url = models.URLField(max_length=500, blank=True, null=True)
    image_alt = models.CharField(max_length=200, blank=True, null=True)
    image_id = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return f"{self.pet_name} ({self.breed})"


class Booking(models.Model):
    customer_name = models.CharField(max_length=150)
    pet_name_and_breed = models.CharField(max_length=150)
    phone = models.CharField(max_length=30)
    service = models.ForeignKey(Service, on_delete=models.SET_NULL, null=True, blank=True)
    date = models.DateField()
    time_slot = models.CharField(max_length=50, blank=True, null=True)
    notes = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Reserva de {self.customer_name} para {self.date}"
from rest_framework import serializers
from .models import Service, Product, ClientGalleryItem, Booking

class ServiceSerializer(serializers.ModelSerializer):
    priceNum = serializers.IntegerField(source='price_num')
    imageUrl = serializers.CharField(source='image_url', allow_null=True, required=False)
    imageAlt = serializers.CharField(source='image_alt', allow_null=True, required=False)
    imageId = serializers.CharField(source='image_id', allow_null=True, required=False)

    class Meta:
        model = Service
        fields = ['id', 'title', 'price', 'priceNum', 'description', 'duration', 'imageUrl', 'imageAlt', 'imageId']


class ProductSerializer(serializers.ModelSerializer):
    priceNum = serializers.IntegerField(source='price_num')
    stockStatus = serializers.CharField(source='stock_status')
    imageUrl = serializers.CharField(source='image_url', allow_null=True, required=False)
    imageAlt = serializers.CharField(source='image_alt', allow_null=True, required=False)
    imageId = serializers.CharField(source='image_id', allow_null=True, required=False)

    class Meta:
        model = Product
        fields = ['id', 'name', 'brand', 'category', 'price', 'priceNum', 'stockStatus', 'imageUrl', 'imageAlt', 'imageId']


class ClientGalleryItemSerializer(serializers.ModelSerializer):
    petName = serializers.CharField(source='pet_name')
    serviceReceived = serializers.CharField(source='service_received')
    imageUrl = serializers.CharField(source='image_url', allow_null=True, required=False)
    imageAlt = serializers.CharField(source='image_alt', allow_null=True, required=False)
    imageId = serializers.CharField(source='image_id', allow_null=True, required=False)

    class Meta:
        model = ClientGalleryItem
        fields = ['id', 'petName', 'breed', 'serviceReceived', 'testimonial', 'imageUrl', 'imageAlt', 'imageId']


class BookingSerializer(serializers.ModelSerializer):
    customerName = serializers.CharField(source='customer_name')
    petNameAndBreed = serializers.CharField(source='pet_name_and_breed')
    serviceId = serializers.PrimaryKeyRelatedField(
        queryset=Service.objects.all(), 
        source='service', 
        required=False, 
        allow_null=True
    )
    timeSlot = serializers.CharField(source='time_slot', required=False, allow_null=True)

    class Meta:
        model = Booking
        fields = ['id', 'customerName', 'petNameAndBreed', 'phone', 'serviceId', 'date', 'timeSlot', 'notes']
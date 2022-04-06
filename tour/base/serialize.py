from rest_framework import serializers
from .models import Packages

class PackageSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False)
    class Meta:
        model=Packages
        fields="__all__"
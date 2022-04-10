from rest_framework import serializers
from .models import Packages

class PackageSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False)  #image is not always required because we don't wanna
                                                    #update image every single time on updating some other data
    class Meta:
        model=Packages
        fields="__all__"
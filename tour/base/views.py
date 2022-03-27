
from django.shortcuts import render
from .models import Packages
from  . import serialize
from .serialize import PackageSerializer
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response

@api_view(['GET'])
def apiOverview(request):
    api_urls={
        'Packages':"/Packages/",
        'Detail View':"/package-details/",
        'Delete':'/package-delete/<str:pk>/',
        'Update':'/package-update/<str:pk>/',
        'Create':'/package-create/',
    }
    return Response(api_urls)
@api_view(['GET'])
def package_list(request):
    Package=Packages.objects.all()
    serializeObj=PackageSerializer(Package,many='true')
    return Response(serializeObj.data)

@api_view(['GET'])
def package_detail(request, pk):
    Package=Packages.objects.get(id=pk)
    serializeObj=PackageSerializer(Package,many='false')
    return Response(serializeObj.data)

@api_view(['POST'])
def create_package(request):
    serializeObj=PackageSerializer(data=request.data)
    if serializeObj.is_valid():
        serializeObj.save()
    return Response(serializeObj.data)

@api_view(['POST'])
def update_package(request,pk):
    Package=Packages.objects.get(id=pk)
    serializeObj=PackageSerializer(instance=Package,data=request.data)
    if serializeObj.is_valid():
        serializeObj.save()
    return Response(serializeObj.data)

@api_view(['DELETE'])
def delete_package(request,pk):
    Package=Packages.objects.get(id=pk)
    Package.delete()

    return Response("Package Deleted Successfully")



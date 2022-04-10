from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from rest_framework import viewsets

from .models import Packages
from  . import serialize
from .serialize import PackageSerializer
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.decorators import login_required




@api_view(['GET'])
def package_list(request):
    Package=Packages.objects.all()
    serializeObj=PackageSerializer(Package,many='true')
    return Response(serializeObj.data)



@api_view(['POST'])
def create_package(request):
    serializeObj=PackageSerializer(data=request.data)
    if serializeObj.is_valid():
        serializeObj.save()
    return Response(serializeObj.data)
#
@api_view(['PATCH'])
def update_package(request,pk):

    Package=Packages.objects.get(id=pk)

    serializeObj=PackageSerializer(instance=Package,data=request.data)
    data={}
    if serializeObj.is_valid():
        serializeObj.save()
        data["success"]="update succesfully"
        return Response(data=data)

    return Response(serializeObj.errors)
#
@api_view(['DELETE'])
def delete_package(request,pk):
    Package=Packages.objects.get(id=pk)
    Package.delete()

    return Response("Package Deleted Successfully")

#
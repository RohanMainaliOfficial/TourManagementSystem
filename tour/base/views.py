from django.http import HttpResponse
from django.shortcuts import render

from .models import Packages, PackageDaysDetails,Request
from  . import serialize
from .serialize import PackageSerializer, PackageDaysSerializer, RequestSerializer
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.decorators import login_required





@api_view(['GET'])
def package_list(request):
    Package=Packages.objects.all()
    serializeObj=PackageSerializer(Package,many='true')
    return Response(serializeObj.data)

@api_view(['GET'])
def package_details(request,pk):
    Package=Packages.objects.filter(id=pk)
    serializeObj=PackageSerializer(Package,many='true')
    return Response(serializeObj.data)

@api_view(['GET'])
def package_days_list(request):
    package_days=PackageDaysDetails.objects.all()
    serializeObj=PackageDaysSerializer(package_days,many='true')
    return Response(serializeObj.data)

@api_view(['GET'])
def package_days_details(request,pk):
    package_days=PackageDaysDetails.objects.filter(package_id=pk)
    ordered_package_days=package_days.order_by('day_count')
    serializeObj=PackageDaysSerializer(ordered_package_days,many='true')
    return Response(serializeObj.data)

@api_view(['GET'])
def view_request(request):
    request=Request.objects.all()
    serializeObj=RequestSerializer(request,many='true')
    return Response(serializeObj.data)


@api_view(['POST'])
def create_package(request):
    serializeObj=PackageSerializer(data=request.data)
    if serializeObj.is_valid():
        serializeObj.save()
    return Response(serializeObj.data)

@api_view(['POST'])
def create_package_days(request):
    serializeObj=PackageDaysSerializer(data=request.data)
    if serializeObj.is_valid():
        serializeObj.save()
    return Response(serializeObj.data)

@api_view(['POST'])
def create_request(request):
    serializeObj=RequestSerializer(data=request.data)
    if serializeObj.is_valid():
        serializeObj.save()
    else:
        return Response("Bad")
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

@api_view(['DELETE'])
def delete_package_days(request,pk):
    PackageDays=PackageDaysDetails.objects.filter(package_id=pk)
    PackageDays.delete()

@api_view(['DELETE'])
def delete_request(request,pk):
    request=Request.objects.filter(package_id=pk)
    request.delete()



    return Response("Package Deleted Successfully")

#

from django.core.mail import EmailMessage
from django.conf import settings

def success(email):

    email=EmailMessage(
        'Booking Request',
        'Hey please chechout new booking request and verify the request ASAP'
        'Link: http://localhost:3000/request',
        settings.EMAIL_HOST_USER,
        ['np03cs4s210057@heraldcollege.edu.np']
    )
    email.fail_silently=False
    email.send()

    return HttpResponse("succes")


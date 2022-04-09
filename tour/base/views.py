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

class PackageViewSet(viewsets.ModelViewSet):
    queryset = Packages.objects.all()
    serializer_class = PackageSerializer

    def post(self,request,*args,**kwargs):
        image=request.data['image']
        name=request.data['name']
        id = request.data['id']
        description = request.data['description']
        price = request.data['price']
        category=request.data['category']
        seat = request.data['seat']
        Packages.objects.create(name=name,image=image,id=id,description=description,price=price,seat=seat,category='category')
        return HttpResponse({'Package created'},status=200)


@api_view(['GET'])
def apiOverview(request):
    api_urls={
        # 'Packages':"/Packages/",
        # 'Detail View':"/package-details/",
        # 'Delete':'/package-delete/<str:pk>/',
        # 'Update':'/package-update/<str:pk>/',
        'Create':'/package-create/',
    }
    return Response(api_urls)

@api_view(['GET'])
def package_list(request):
    Package=Packages.objects.all()
    serializeObj=PackageSerializer(Package,many='true')
    return Response(serializeObj.data)

# @api_view(['GET'])
# def package_detail(request, pk):
#     Package=Packages.objects.get(id=pk)
#     serializeObj=PackageSerializer(Package,many='false')
#     return Response(serializeObj.data)
from .forms import UploadFileForm

# Imaginary function to handle an uploaded file.

def handle_uploaded_file(param):
    pass


def upload_file(request):
    if request.method == 'POST':
        form = UploadFileForm(request.POST, request.FILES)
        if form.is_valid():
            handle_uploaded_file(request.FILES['file'])
            return HttpResponseRedirect('/success/url/')
    else:
        form = UploadFileForm()
    return render(request, 'upload.html', {'form': form})

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
from django.urls import path,include

from . import views

urlpatterns = [
    path('api/packages/',views.package_list),
    path('api/create-package/',views.create_package),
    path('api/update-package/<str:pk>/',views.update_package),
    path('api/delete-package/<str:pk>/',views.delete_package),
]
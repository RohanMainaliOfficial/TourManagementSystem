from django.urls import path,include
from . import views

urlpatterns = [
    # path('', views.index),
    # path('api/',views.apiOverview),
    path('api/packages/',views.package_list),
    # path('api/package-detail/<str:pk>/',views.package_detail),
    path('api/create-package/',views.create_package),
    # path('api/update-package/<str:pk>/',views.update_package),
    # path('api/delete-package/<str:pk>/',views.delete_package),
]
from django.urls import path,include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from . import views

urlpatterns = [
    # path('', views.index),
    # path('api/',views.apiOverview),
    path('api/packages/',views.package_list),
    # path('api/package-detail/<str:pk>/',views.package_detail),
    path('api/create-package/',views.create_package),
    path('api/update-package/<str:pk>/',views.update_package),
    path('api/delete-package/<str:pk>/',views.delete_package),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
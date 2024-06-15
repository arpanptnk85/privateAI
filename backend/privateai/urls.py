from django.contrib import admin
from rest_framework import routers
from django.urls import path, include
from main import views
from main.viewsets.user_viewsets import UserViewSet

# Routers provide a way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('api-privateai/', include(router.urls)),
    path('auth/login/', views.login),
    path('signup/', views.signup),
    path('validate-token/', views.validate_token),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('admin/', admin.site.urls),
]

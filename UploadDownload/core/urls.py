
from .views import  FileViewSet
from django.urls import include, path

from rest_framework import routers 

router = routers.DefaultRouter()
router.register(r'pdf', FileViewSet, basename='file')

urlpatterns = [
    path('', include(router.urls)),
]

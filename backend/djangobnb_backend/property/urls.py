from django.urls import path
from . import api

urlpatterns = [
    path('', api.properties_list, name='properties_list'),
    path('create/', api.create_property, name='create_property'),
    path('<uuid:pk>/', api.properties_detail, name='properties_detail'),
]
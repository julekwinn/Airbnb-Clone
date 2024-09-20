from django.urls import path
from dj_rest_auth.registration.views import RegisterView
from dj_rest_auth.views import LoginView, LogoutView, UserDetailsView
from dj_rest_auth.jwt_auth import get_refresh_view
from . import api
from rest_framework_simplejwt.views import TokenVerifyView

urlpatterns = [
    path("register/", RegisterView.as_view(), name="rest_register"),
    path("login/", LoginView.as_view(), name="rest_login"),
    path("logout/", LogoutView.as_view(), name="rest_logout"),
    path("user/", UserDetailsView.as_view(), name="user"),
    path("token/refresh/", get_refresh_view().as_view(), name="token_refresh"),
    path("token/verify/", TokenVerifyView.as_view(), name="token_verify"),
    path('<uuid:pk>/', api.landlord_detail, name='api_landlord_detail'),
    path('myreservations/', api.reservation_list, name='api_reservation_list')
]

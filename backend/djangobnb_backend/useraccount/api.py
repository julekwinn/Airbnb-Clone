from .serializers import UserDetailSerializer
from .models import User
from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from property.serializers import ReservationListSerializer

@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def landlord_detail(request, pk):
    landlord = User.objects.get(pk=pk)
    serializer = UserDetailSerializer(landlord, many=False)
    return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
def reservation_list(request):
    reservations = request.user.reservations.all()
    
    serializer = ReservationListSerializer(reservations, many=True)
    
    return JsonResponse(serializer.data, safe=False)
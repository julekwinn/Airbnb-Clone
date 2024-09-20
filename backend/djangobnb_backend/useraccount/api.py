from .serializers import UserDetailSerializer
from .models import User
from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes

@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def landlord_detail(request, pk):
    landlord = User.objects.get(pk=pk)
    serializer = UserDetailSerializer(landlord, many=False)
    return JsonResponse(serializer.data, safe=False)
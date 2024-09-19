from django.http import JsonResponse

from rest_framework.decorators import api_view, authentication_classes, permission_classes
from .forms import PropertyForm
from .models import Property
from .serializers import PropertiesListSerializer


@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def properties_list(request):
    properties = Property.objects.all()
    serializer = PropertiesListSerializer(properties, many=True)
    return JsonResponse({'data': serializer.data})

@api_view(['POST', 'FILES'])
def create_property(request):
    print("Received request to create property")
    form = PropertyForm(request.POST, request.FILES)
    if form.is_valid():
        print("Form is valid")
        property = form.save(commit=False)
        property.landlord = request.user
        property.save()
        print("Property saved successfully")
        
        return JsonResponse({'success': True})
    else:
        print("Form is invalid")
        print(f"Form errors: {form.errors}")
        print(f"Non-field errors: {form.non_field_errors()}")
        return JsonResponse({'errors': form.errors}, status=400)
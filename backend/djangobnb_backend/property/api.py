from django.http import JsonResponse

from rest_framework.decorators import api_view, authentication_classes, permission_classes
from .forms import PropertyForm
from .models import Property, Reservation
from .serializers import PropertiesListSerializer, PropertiesDetailSerializer


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
    
    
@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def properties_detail(request, pk):
    property = Property.objects.get(pk=pk)
    serializer = PropertiesDetailSerializer(property, many=False) 
    return JsonResponse(serializer.data)
    
    
    
    
@api_view(['POST'])
def book_property(request, pk):
    try:
        start_date = request.POST.get('start_date', '')
        end_date = request.POST.get('end_date', '')
        number_of_nights = request.POST.get('number_of_nights', '')
        total_price = request.POST.get('total_price', '')
        guests = request.POST.get('guests', '')
        
        property = Property.objects.get(pk=pk)
        Reservation.objects.create(
            property=property,
            start_date=start_date,
            end_date=end_date,
            number_of_nights=number_of_nights,
            total_price=total_price,
            guests=guests,
            created_by=request.user
        )
        
    except Exception as e:
        print(f"Error: {str(e)}")
        return JsonResponse({'error': str(e)}, status=400)
        
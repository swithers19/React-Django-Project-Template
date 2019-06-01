from trip.models import Trip
from .serializer import TripSerializer
from rest_framework import viewsets

class TripViewset(viewsets.ModelViewSet):
    queryset=Trip.objects.all()
    serializer_class=TripSerializer

from trip.models import Trip
from .serializer import TripSerializer
from rest_framework import viewsets
from django.contrib.auth.mixins import LoginRequiredMixin

class TripViewset(LoginRequiredMixin, viewsets.ModelViewSet):
    queryset=Trip.objects.all()
    serializer_class=TripSerializer

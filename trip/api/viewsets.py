from trip.models import Trip, Destination, Post
from .serializer import TripSerializer, DestinationSerializer, PostSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import viewsets
from django.contrib.auth.mixins import LoginRequiredMixin


class TripViewset(LoginRequiredMixin, viewsets.ModelViewSet):
    queryset=Trip.objects.all()
    serializer_class=TripSerializer

    @action(detail=True, methods=['get', 'post'])
    def destinations(self, request, *args, **kwargs):
        trip = self.get_object()
        destinations = Destination.objects.filter(tripID=trip)
        serialized = DestinationSerializer(destinations, many=True)
        return Response(serialized.data)

class PostViewset(viewsets.ModelViewSet):
    queryset=Post.objects.all()
    serializer_class=PostSerializer
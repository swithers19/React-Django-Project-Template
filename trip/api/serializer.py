from rest_framework import serializers
from trip.models import Trip, Post, Destination

class TripSerializer(serializers.ModelSerializer):
    author = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model=Trip
        fields=('name', 'author','startDate', 'endDate')


class DestinationSerializer(serializers.ModelSerializer):
    class Meta:
        model=Destination
        fields=('name', 'tripID','startDate', 'endDate', 'notes')

class PostSerializer(serializers.ModelSerializer):
    author = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Post
        fields = ('title', 'content', 'author')

from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.conf import settings

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)


#Trip associated with User
class Trip(models.Model):
    name = models.CharField(max_length=200)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
    startDate = models.DateField(blank=True, null=True)
    endDate = models.DateField(blank=True, null=True)

    def __str__(self):
        return self.name

#Destinations of trip
class Destination(models.Model):
    name = models.CharField(max_length=200)
    tripID = models.ForeignKey(Trip, on_delete=models.CASCADE)
    startDate = models.DateField(default=timezone.now)
    endDate = models.DateField(default=timezone.now) 
    notes = models.TextField(default='')

    def __str__(self):
        return self.name
from django.db import models

# Create your models here.
class Trip(models.Model):
    name = models.CharField(max_length=200)
    startDate = models.DateField()
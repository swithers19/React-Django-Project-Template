from trip.api.viewsets import TripViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register('trip',TripViewset)
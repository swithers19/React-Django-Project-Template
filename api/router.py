from trip.api.viewsets import TripViewset, PostViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register('trip',TripViewset)
router.register('post', PostViewset)
from django.shortcuts import render, redirect
from django.conf import settings
# Create your views here.
def index(request):
    if settings.DEVMODE:
        return redirect('http://localhost:3000')
    else:
        return render(request, "index.html")

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Post
from .api.serializer import PostSerializer

@api_view(['GET'])
def post_list(request):
  if request.method == 'GET':
    posts = Post.objects.all()
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)


def test(request):
    return render(request, "test.html")
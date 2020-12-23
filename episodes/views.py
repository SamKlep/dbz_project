from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .models import Episode
from .serializers import *


@api_view(['GET', 'POST'])
def episode_list(request):
    if request.method == 'GET':
        data = Episode.objects.all()

        serializer = EpisodeSerializer(
            data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = EpisodeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def episode_detail(request, pk):
    try:
        episode = Episode.objects.get(pk=pk)
    except Episode.DoesNotExist:
        return Response({'message': 'The episode does not exist'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        episode_serializer = EpisodeSerializer(episode)
        return Response(episode_serializer.data)

    elif request.method == 'PUT':
        episode_data = JSONParser().parse(request)
        episode_serializer = EpisodeSerializer(
            episode, data=episode_data)
        if episode_serializer.is_valid():
            episode_serializer.save()
            return Response(episode_serializer.data)
        return Response(episode_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        episode.delete()
        return Response({'message': 'Episode was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

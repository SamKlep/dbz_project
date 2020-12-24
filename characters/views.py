from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .models import Character
from .serializers import *


@api_view(['GET', 'POST'])
def characters_list(request):
    if request.method == 'GET':
        data = Character.objects.all()

        serializer = CharacterSerializer(
            data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CharacterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def character_detail(request, pk):
    try:
        character = Character.objects.get(pk=pk)
    except Character.DoesNotExist:
        return Response({'message': 'The character does not exist'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        character_serializer = CharacterSerializer(character)
        return Response(character_serializer.data)

    elif request.method == 'PUT':
        character_data = JSONParser().parse(request)
        character_serializer = CharacterSerializer(
            character, data=character_data)
        if character_serializer.is_valid():
            character_serializer.save()
            return Response(character_serializer.data)
        return Response(character_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        character.delete()
        return Response({'message': 'Character was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)


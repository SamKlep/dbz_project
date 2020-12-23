from rest_framework import serializers
from .models import Character


class CharacterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Character
        fields = ('id', 'name', 'age', 'birthday', 'sex', 'height', 'weight', 'alignment', 'quote',
                  'description', 'background', 'powers', 'image_main', 'image_1', 'image_2', 'image_3')

from rest_framework import serializers
from .models import Episode


class EpisodeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Episode
        fields = ('id', 'title', 'number', 'saga',
                  'description', 'japan_air_date', 'usa_air_date', 'image')

from django.db import models


class Episode(models.Model):
    title = models.CharField(max_length=250)
    number = models.IntegerField(blank=True)
    saga = models.CharField(max_length=250)
    description = models.TextField(blank=True)
    japan_air_date = models.TextField(blank=True)
    usa_air_date = models.TextField(blank=True)
    image = models.ImageField(upload_to='episodes/images/')

    def __str__(self):
        return self.title

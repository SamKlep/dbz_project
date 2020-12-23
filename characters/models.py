from django.db import models


class Character(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField(blank=True)
    birthday = models.TextField(blank=True)
    sex = models.TextField(blank=True)
    height = models.IntegerField(blank=True)
    weight = models.IntegerField(blank=True)
    alignment = models.TextField(blank=True)
    quote = models.TextField(blank=True)
    description = models.TextField(blank=True)
    background = models.TextField(blank=True)
    powers = models.TextField(blank=True)
    image_main = models.ImageField(upload_to='characters/images/')
    image_1 = models.ImageField(upload_to='characters/images/', blank=True)
    image_2 = models.ImageField(upload_to='characters/images/', blank=True)
    image_3 = models.ImageField(upload_to='characters/images/', blank=True)

    def __str__(self):
        return self.name


from django.urls import path
from . import views

app_name = 'characters'

urlpatterns = [
    path('<int:character_id>/', views.detail, name='detail'),

]

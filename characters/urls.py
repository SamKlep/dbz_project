
from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings

app_name = 'characters'

urlpatterns = [
    path('<int:character_id>/', views.detail, name='detail'),
    
]

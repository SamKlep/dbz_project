
from django.urls import path
from django.conf.urls import url
from . import views

app_name = 'episodes'

urlpatterns = [
    # path('<int:episode_id>/', views.episode_detail),
    url(r'^api/episodes/(?P<pk>[0-9]+)$', views.episode_detail),
    path('api/episodes/', views.episode_list),

]

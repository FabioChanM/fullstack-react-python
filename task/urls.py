from django.urls import path, include, re_path
from rest_framework import routers
from task import views
from . import views



router = routers.DefaultRouter()
router.register(r'task', views.TaskView, 'task')

urlpatterns = [
    path("api/v1/", include(router.urls)),
]

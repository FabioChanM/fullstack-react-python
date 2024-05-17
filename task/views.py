from django.shortcuts import render
from rest_framework import viewsets
from .serializer import TaskSerializer  # Corregido el error de importación
from .models import Task

# Create your views here.
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer  # Corregido el nombre del atributo
    queryset = Task.objects.all()

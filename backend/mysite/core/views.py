from rest_framework import generics

from . import models
from . import serializers

from rest_framework import viewsets

class UserListView(viewsets.ModelViewSet):
    queryset = models.CustomUser.objects.all()
    serializer_class = serializers.UserSerializer

class CurrentUserView(viewsets.ModelViewSet):
    serializer_class = serializers.UserSerializer
    def get_queryset(self):
        obj=models.CustomUser.filter(user = uid)
        return obj

class ProjectViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ProjectSerializer
    queryset = models.Project.objects.all()



"""
class UserListView(generics.ListCreateAPIView):
    queryset = models.CustomUser.objects.all()
    serializer_class = serializers.UserSerializer


class ProjectViewSet(generics.ListAPIView):
    serializer_class = serializers.ProjectSerializer
    queryset = models.Project.objects.all()

class ProjectDetailView(generics.RetrieveAPIView):
     queryset = models.Project.objects.all()
     serializer_class = serializers.ProjectSerializer


class ProjectCreateView(generics.CreateAPIView):
     queryset = models.Project.objects.all()
     serializer_class = serializers.ProjectSerializer


class ProjectUpdateView(generics.UpdateAPIView):
     queryset = models.Project.objects.all()
     serializer_class = serializers.ProjectSerializer


class ProjectDeleteView(generics.DestroyAPIView):
     queryset = models.Project.objects.all()
     serializer_class = serializers.ProjectSerializer
"""

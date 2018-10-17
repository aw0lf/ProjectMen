from rest_framework import serializers
from . import models
from rest_framework.views import APIView

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CustomUser
        fields = ('id','email', 'password', 'first_name','last_name','date_of_birth','gender','role','owner' )



class CurrentUserView(APIView):
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

class ActivitySerializer(serializers.ModelSerializer):

    current_user = serializers.SerializerMethodField('_user')

    def _user(self, obj):
        request = getattr(self.context, 'request', None)
        if request:
            return request.user

    class Meta:
        model =models.CustomUser
        fields = ('id','current_user')


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Project
        owner = PrimaryKeyRelatedField(queryset=CustomUser.objects.all())

        fields=('id','title','description', 'start_date', 'end_date', 'status','owner_id',owner)

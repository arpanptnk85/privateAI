from rest_framework import serializers
from django.contrib.auth.models import User

# Serializers define the API representation.

# UserSerializer class inherits from serializers.ModelSerializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email']
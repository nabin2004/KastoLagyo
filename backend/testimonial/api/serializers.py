from rest_framework import serializers
from .models import Testimonial
from .models import User



class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = ['id', 'user', 'text', 'submitted_at', 'status', 'rating']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'profile_picture', 'created_at', 'updated_at']

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['name', 'profile_picture'] 

class TestimonialWithUserSerializer(serializers.ModelSerializer):
    user = UserProfileSerializer()  

    class Meta:
        model = Testimonial
        fields = ['id', 'text', 'submitted_at', 'status', 'rating', 'user']  
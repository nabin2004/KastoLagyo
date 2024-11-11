from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Testimonial, User
from .serializers import TestimonialSerializer, UserSerializer, TestimonialWithUserSerializer


class TestimonialListCreateView(APIView):
    """
    Handles GET and POST requests for testimonials.
    """
    def get(self, request):
        # Retrieve all testimonials
        testimonials = Testimonial.objects.all()
        serializer = TestimonialSerializer(testimonials, many=True)
        return Response(serializer.data)

    def post(self, request):
        # Create a new testimonial
        serializer = TestimonialSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TestimonialDetailView(APIView):
    """
    Handles GET, PUT, DELETE requests for individual testimonials.
    """
    def get(self, request, pk):
        try:
            testimonial = Testimonial.objects.get(pk=pk)
        except Testimonial.DoesNotExist:
            return Response({"detail": "Not found."}, status=status.HTTP_404_NOT_FOUND)

        serializer = TestimonialSerializer(testimonial)
        return Response(serializer.data)

    def put(self, request, pk):
        try:
            testimonial = Testimonial.objects.get(pk=pk)
        except Testimonial.DoesNotExist:
            return Response({"detail": "Not found."}, status=status.HTTP_404_NOT_FOUND)

        serializer = TestimonialSerializer(testimonial, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            testimonial = Testimonial.objects.get(pk=pk)
        except Testimonial.DoesNotExist:
            return Response({"detail": "Not found."}, status=status.HTTP_404_NOT_FOUND)

        testimonial.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class UserViewSet(viewsets.ModelViewSet):
    """
    Handles CRUD operations for User objects, including profile picture upload.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    parser_classes = (MultiPartParser, FormParser)

    def create(self, request, *args, **kwargs):
        # Handle user creation with profile picture upload
        return super().create(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        # Handle user update with profile picture upload
        return super().update(request, *args, **kwargs)

class TestimonialListWithUserView(APIView):
    """
    View to retrieve testimonials with associated user data.
    """
    def get(self, request):
        testimonials = Testimonial.objects.select_related('user').all()  # Optimizes query by joining user data
        serializer = TestimonialWithUserSerializer(testimonials, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    
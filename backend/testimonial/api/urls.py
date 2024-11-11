from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TestimonialListCreateView, TestimonialDetailView, UserViewSet, TestimonialListWithUserView
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register(r'users', UserViewSet, basename='user')

urlpatterns = [
    path('testimonials/', TestimonialListCreateView.as_view(), name='testimonial-list-create'),
    path('testimonials/<int:pk>/', TestimonialDetailView.as_view(), name='testimonial-detail'),
        path('testimonials-with-user/', TestimonialListWithUserView.as_view(), name='testimonial-list-with-user'),
    path('', include(router.urls)),  
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

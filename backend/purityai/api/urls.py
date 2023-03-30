from django.urls import path

from . import views

urlpatterns = [
    path('helloWorld/', views.helloWorld, name='helloWorld'),
    path('backgroundRemover/', views.backgroundRemover, name='backgroundRemover'),
    path('imageUpscaler/', views.imageUpscaler, name='imageUpscaler'),
    path('textRemoval/', views.textRemoval, name='textRemoval'),
    path('gtokenSet/', views.gtokenSet, name='gtokenSet'),
    path('visionAI/', views.visionAI, name='visionAI')
]
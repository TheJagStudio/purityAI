from django.contrib import admin
from django.urls import include, path
from django.views.generic import TemplateView

urlpatterns = [
    path('api/', include('api.urls')),
    path('admin/', admin.site.urls),
    path("",TemplateView.as_view(template_name='index.html')),
    path("api-doc/",TemplateView.as_view(template_name='index.html')),
    path("remove-background/",TemplateView.as_view(template_name='index.html')),
    path("cleanup/",TemplateView.as_view(template_name='index.html')),
    path("text-remover/",TemplateView.as_view(template_name='index.html')),
    path("reimagine/",TemplateView.as_view(template_name='index.html')),
    path("image-upscaler/",TemplateView.as_view(template_name='index.html')),
    path("video2/",TemplateView.as_view(template_name='index.html')),
    path("faq/",TemplateView.as_view(template_name='index.html')),
    path("about-us/",TemplateView.as_view(template_name='index.html')),
    path("text-to-image/",TemplateView.as_view(template_name='index.html')),
]


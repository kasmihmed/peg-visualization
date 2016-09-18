"""furniture_visualization URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic import TemplateView
from z_buffering import views as z_buffering_views

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^painter/algo/canvas/$',z_buffering_views.get_painter_canvas, name="painter_canvas"),
    url(r'^painter/algo/svg/$', z_buffering_views.get_painter_svg, name="painter_svg"),
    url(r'z_buffer/algo/$',z_buffering_views.z_buffer,name="z_buffer_page"),
    url(r'z_buffer/algo/furniture/(?P<furniture>.*)/peg/(?P<peg>.*)/$', z_buffering_views.create_visualisation, name="z_buffer_visualisation"),
]

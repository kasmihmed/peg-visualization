from django.shortcuts import render
from z_buffering.models import *
from django.http import HttpResponse


def get_painter_svg(request):
    pegs = PegAngle.objects.all()
    furnitures = FurnitureAngle.objects.all()
    return render(request,'index_svg.html',{'pegs':pegs,'furnitures':furnitures})

def get_painter_canvas(request):
    pegs = PegAngle.objects.all()
    furnitures = FurnitureAngle.objects.all()
    return render(request,'index_canvas.html',{'pegs':pegs,'furnitures':furnitures})


def z_buffer(request):
    pegs = PegAngle.objects.all()
    furnitures = FurnitureAngle.objects.all()
    return render(request,'index_z_buffering.html',{'pegs':pegs,'furnitures':furnitures})


def create_visualisation(request,furniture,peg):
    from z_buffering.tools_utils import generate_visualization
    from cStringIO import StringIO
    from django.conf import settings
    import os
    from PIL import Image
    response = HttpResponse(content_type="image/png")
    if os.path.isfile(settings.PROJECT_ROOT+'static/img/visualization/'+furniture+"_"+peg+".png"):
        image = Image.open(settings.PROJECT_ROOT+'static/img/visualization/'+furniture+"_"+peg+".png")
        image.save(response, 'PNG', quality=100)
    else:
        thumb_handle = StringIO()
        # check if file exist if not
        peg = PegAngle.objects.get(name=peg)
        furniture = FurnitureAngle.objects.get(name=furniture)
        image=generate_visualization(furniture.picture_path, peg.picture_path)
        image.save(settings.PROJECT_ROOT+'static/img/visualization/'+furniture.name+"_"+peg.name+".png")
        image.save(response, 'PNG', quality=100)
    return response
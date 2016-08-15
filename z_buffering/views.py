from django.shortcuts import render
from z_buffering.models import *


def get_painter_svg(request):
    pegs = PegAngle.objects.all()
    furnitures = FurnitureAngle.objects.all()
    return render(request,'index_svg.html',{'pegs':pegs,'furnitures':furnitures})

def get_painter_canvas(request):
    pegs = PegAngle.objects.all()
    furnitures = FurnitureAngle.objects.all()
    return render(request,'index_canvas.html',{'pegs':pegs,'furnitures':furnitures})
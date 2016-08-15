from django.contrib import admin
from z_buffering.models import PegAngle,FurnitureAngle

class PegAngleAdmin(admin.ModelAdmin):
    pass

class FurnitureAngleAdmin(admin.ModelAdmin):
    pass

admin.site.register(PegAngle, PegAngleAdmin)
admin.site.register(FurnitureAngle, FurnitureAngleAdmin)
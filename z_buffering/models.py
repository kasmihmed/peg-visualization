from __future__ import unicode_literals

from django.db import models



class FurnitureAngle(models.Model):
    picture_path = models.CharField(max_length=200)
    name = models.CharField(max_length=30)
    width = models.PositiveIntegerField(default=0)
    height = models.PositiveIntegerField(default=0)
    peg_positions_x = models.CharField(max_length=200,default='0')
    peg_positions_y = models.CharField(max_length=200,default='0')

    def __unicode__(self):
        return self.name


class PegAngle(models.Model):
    picture_path = models.CharField(max_length=200)
    name = models.CharField(max_length=30)

    def __unicode__(self):
        return self.name

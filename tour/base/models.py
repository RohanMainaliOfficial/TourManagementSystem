from django.db import models
from django.utils.translation import gettext_lazy as _

def upload_to(instance,fileName):
    return 'posts/{fileName}'.format(fileName=fileName)

class Packages(models.Model):
    id=models.IntegerField(primary_key=True)
    name=models.CharField(max_length=150)
    description=models.CharField(max_length=500)
    price=models.IntegerField(max_length=10, null=True)
    seat=models.IntegerField(max_length=100, null=True)
    image=models.ImageField(_("image"),upload_to=upload_to )

    def __str__(self):
        return self.name
# Create your models here.

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
    category=models.CharField(max_length=50,null=True)
    image=models.ImageField(_("image"),upload_to=upload_to )

    def __str__(self):
        return self.name
# Create your models here.
class UserLogin(models.Model):
    User_id=models.AutoField(primary_key=True)
    User_name=models.CharField(max_length=70,null=False)
    password=models.CharField(max_length=13,null=False)
    Email=models.CharField(max_length=50,null=False)
    Phone=models.IntegerField(max_length=11,null=False)
    def __str__(self):
        return self.User_id;


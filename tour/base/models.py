from django.db import models
from django.utils.translation import gettext_lazy as _

def upload_to(instance,fileName):
    return 'posts/{fileName}'.format(fileName=fileName)

class Packages(models.Model):
    id=models.AutoField(primary_key=True)
    name=models.CharField(max_length=150,null=True)
    days=models.IntegerField(null=True)
    description=models.CharField(max_length=500,null=True)
    price=models.IntegerField( null=True)
    seat=models.IntegerField( null=True)
    category=models.CharField(max_length=50,null=True)
    image=models.ImageField(_("image"),upload_to=upload_to )

    def __str__(self):
        return self.name
# Create your models here.

class PackageDaysDetails(models.Model):
    package_id=models.ForeignKey(Packages,on_delete=models.CASCADE,null=True)
    day_count=models.IntegerField(null=True)
    day_description=models.CharField(max_length=2000,null=True)

class Request(models.Model):
    package_id=models.ForeignKey(Packages,on_delete=models.CASCADE,null=True);
    id=models.AutoField(primary_key=True)
    name=models.CharField(max_length=150)
    email=models.CharField(max_length=550)
    phoneOne=models.IntegerField(null=True)
    phoneTwo=models.IntegerField( null=True)
    date=models.CharField(max_length=25, null=True)
    peopleNumber=models.IntegerField(null=True)
    otherInfo=models.CharField(max_length=1500,null=True)
    status=models.CharField(max_length=25,null=True)

    def __str__(self):
        return self.name
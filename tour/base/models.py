from django.db import models
class Packages(models.Model):
    id=models.IntegerField(primary_key=True)
    name=models.CharField(max_length=150)
    description=models.CharField(max_length=500)

    def __str__(self):
        return self.name
# Create your models here.

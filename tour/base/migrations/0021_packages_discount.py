# Generated by Django 4.0.3 on 2022-05-08 07:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0020_remove_packages_discount'),
    ]

    operations = [
        migrations.AddField(
            model_name='packages',
            name='discount',
            field=models.IntegerField(default=0),
        ),
    ]

# Generated by Django 4.0.3 on 2022-04-01 14:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0007_rename_upload_packages_files'),
    ]

    operations = [
        migrations.AlterField(
            model_name='packages',
            name='files',
            field=models.FileField(null=True, upload_to='files'),
        ),
    ]

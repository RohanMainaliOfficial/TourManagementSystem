# Generated by Django 4.0.3 on 2022-03-27 12:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Packages',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=150)),
                ('description', models.CharField(max_length=500)),
            ],
        ),
    ]

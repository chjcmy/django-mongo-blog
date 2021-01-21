# Generated by Django 3.0.5 on 2021-01-19 04:49

from django.db import migrations, models
import djongo.models.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ContentTitle',
            fields=[
                ('_id', djongo.models.fields.ObjectIdField(auto_created=True, primary_key=True, serialize=False)),
                ('subject', models.CharField(max_length=255)),
                ('title', models.CharField(max_length=255)),
                ('content', models.CharField(max_length=255)),
                ('date', models.DateField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='ContentType',
            fields=[
                ('_id', djongo.models.fields.ObjectIdField(auto_created=True, primary_key=True, serialize=False)),
                ('type', models.CharField(max_length=255)),
                ('subject', models.CharField(max_length=255)),
                ('url', models.CharField(max_length=255)),
            ],
        ),
    ]

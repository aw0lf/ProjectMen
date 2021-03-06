# Generated by Django 2.1.1 on 2018-10-15 21:30

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_auto_20181015_2059'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=120)),
                ('description', models.TextField(max_length=600)),
                ('start_date', models.CharField(default=datetime.date.today, max_length=100)),
                ('end_date', models.CharField(default=datetime.date.today, max_length=100)),
                ('status', models.CharField(choices=[('new', 'new'), ('in progress', 'in progress'), ('finished', 'finished')], default='new', max_length=12)),
                ('owner', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='projects', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]

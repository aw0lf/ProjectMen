from django.contrib.auth.models import AbstractUser
from django.db import models
import datetime

class CustomUser(AbstractUser):
    GENDER_CHOICES = (
    ('M', 'Male'),
    ('F', 'Female'),
    )

    ROLE_CHOICES = (
    ('MANAGER', 'Menager'),
    ('EMPLOYER', 'Employer'),
    )


    email = models.EmailField (
        verbose_name='email address',
        max_length=255,
        unique=True,
    )

    
    id = models.AutoField(primary_key=True)

    date_of_birth = models.DateField(default='2018-01-01')
    active = models.BooleanField(default=True)
    admin = models.BooleanField(default=False)

    first_name = models.CharField(max_length=120,default='first_name')
    last_name = models.CharField(max_length=120,default='last_name')
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES,default='M')
    phone_number = models.CharField(max_length=120,blank=True)
    role = models.CharField(max_length=9, choices=ROLE_CHOICES,default='EMPLOYER')



    def get_full_name(self):
        return self.email

    def get_short_name(self):
        return self.email

    def __str__(self):
        return self.email

#Projects

USERNAME_REGEX = '^[a-zA-Z0-9.+-]*$'


class Project(models.Model):

    NEW = 'new'
    IN_PROGRESS = 'in progress'
    FINISHED = 'finished'

    PROJECT_STATUS = (
        (NEW, 'new'),
        (IN_PROGRESS, 'in progress'),
        (FINISHED, 'finished'),
    )

    title = models.CharField(max_length=120)
    description = models.TextField(max_length=600)
    start_date = models.CharField(max_length=100,default=datetime.date.today)
    end_date = models.CharField(max_length=100,default=datetime.date.today)
    status = models.CharField(
                    max_length=12,
                    choices=PROJECT_STATUS,
                    default=NEW,
                    )
    owner = models.ForeignKey(CustomUser, related_name='projects', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title

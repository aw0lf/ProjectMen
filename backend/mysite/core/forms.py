from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import CustomUser

class CustomUserCreationForm(UserCreationForm):


    email = forms.CharField(label='Email', widget=forms.EmailInput)
    date_of_birth = forms.CharField(label='Date of birth',widget=forms.DateInput)
    first_name = forms.CharField(label='First Name', widget=forms.TextInput)
    last_name = forms.CharField(label='Last Name', widget=forms.TextInput)
    phone_number = forms.CharField(label='Phone number', widget=forms.TextInput)
    username=forms.CharField(label='Username', widget=forms.TextInput)

    GENDER_CHOICES = (
    ('M', 'Male'),
    ('F', 'Female'),
    )

    ROLE_CHOICES = (
    ('MANAGER', 'Menager'),
    ('EMPLOYER', 'Employer'),
    )


    gender = forms.ChoiceField(choices = GENDER_CHOICES, label="Gender", initial='M', widget=forms.Select(), required=True)

    class Meta(UserCreationForm.Meta):
        model = CustomUser
        fields = ('email', 'password', 'active', 'admin', 'date_of_birth', 'first_name', 'last_name', 'phone_number', 'gender', 'role' )

class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = CustomUser
        fields = UserChangeForm.Meta.fields

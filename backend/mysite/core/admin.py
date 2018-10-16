from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser,Project

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    fieldsets = (
        (None, {'fields': ('username','email', 'password', 'date_of_birth', 'first_name', 'last_name', 'phone_number', 'gender','role')}),
        ('Personal info', {'fields': ()}),
        ('Permissions', {'fields': ('admin',)}),
    )
    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'password1', 'password2', 'date_of_birth', 'first_name', 'last_name', 'phone_number','gender','role')}
        ),
    )
    list_display = ['email', 'password', 'active', 'admin', 'date_of_birth', 'first_name', 'last_name', 'phone_number', 'gender', 'role'
]

admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Project)

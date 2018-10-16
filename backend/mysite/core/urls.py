from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('', views.ProjectViewSet, base_name='projects')
router.register('users/view', views.UserListView, base_name='users')
#router.register('users/current', views.CurrentUserView, base_name='user')
router.register(r'api/user-id', views.CurrentUserView, base_name="UserId")

urlpatterns = router.urls

"""
from django.urls import include, path
from . import views


urlpatterns = [
    path('rest-auth/', include('rest_auth.urls')),
    path('', views.UserListView.as_view()),
    path('', views.ProjectViewSet.as_view()),
    path('create/', views.ProjectCreateView.as_view()),
    path('<pk>', views.ProjectDetailView.as_view()),
    path('<pk>/update/', views.ProjectUpdateView.as_view()),
    path('<pk>/delete/', views.ProjectDeleteView.as_view()),
]11111111111111111z
"""

from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('', views.ProjectViewSet, base_name='projects')
router.register('users/view', views.UserListView, base_name='users')
router.register(r'api/user-id', views.CurrentUserView, base_name="UserId")

urlpatterns = router.urls


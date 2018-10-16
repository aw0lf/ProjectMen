from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', views.ProjectViewSet, base_name='projects')

urlpatterns = router.urls

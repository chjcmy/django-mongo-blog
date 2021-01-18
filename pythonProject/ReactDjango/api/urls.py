from django.urls import path
from . import views

urlpatterns = [
    path('add_post/', views.ContentType_add_post),
    path('add_post/ContentTitle', views.TitleContent_add_post),
    path('update_post/<str:id>', views.update_post),
    path('delete_post/<str:id>', views.delete_post),
    path('read_post/<str:id>', views.read_post),
    path('ContentType_read_post_all', views.ContentType_read_post_all),
    path('ContentTitle_read_post_all', views.ContentTitle_read_post_all),
]

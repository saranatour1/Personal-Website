from django.urls import path

from . import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('',views.main), #the main page at route '/' 
    path('contact',views.contact_me), #contactme at route /contact
    path('about',views.about_me), #aboutme at route /about
    path('blog',views.blog),
    path('quote',views.quote),
    path('gallery',views.gallery), 
]
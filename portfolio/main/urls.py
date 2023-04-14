from django.urls import path

from . import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('',views.main), #the main page at route '/' 
    path('contact',views.contact_me), #contactme at route /contact
    
]
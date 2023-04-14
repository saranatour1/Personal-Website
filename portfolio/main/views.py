from django.shortcuts import render

# Create your views here.

# Main page to render the main template 

# For now I have nothing to store in a database
def main(request):
  # print(request) #<WSGIRequest: GET '/'>
  return render(request,'main.html')


# Contact me route, remember to add form information here? use mailchimp

def contact_me(request):

  return render(request,'contactme.html') 


# About me  route @ /about
def about_me(request):
  return render(request,'aboutme.html') 

# blog page @ /blog /keep the blogs here?
def blog(request):
  return render(request,'blogs.html')

# Motivitational quotes @quotes
def quote(request):
  return render(request,'quote.html')

# @gallery

def gallery(request):
  return render(request,'gallery.html')
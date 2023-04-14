from django.shortcuts import render

# Create your views here.

# Main page to render the main template 

# For now I have nothing to store in a database
# Basic main page functionality, no overdone things
def main(request):
  # print(request) #<WSGIRequest: GET '/'>
  return render(request,'main.html')


# Contact me route, remember to add form information here? use mailchimp

# About me  route @ /about
def about_me(request):
  return render(request,'aboutme.html') 

# Contact me
def contact_me(request):
  return render(request,'contactme.html') 




# blog page @ /blog /keep the blogs here?
def blog(request):
  return render(request,'blogs.html')

# Motivitational quotes @quotes
def quote(request):
  return render(request,'quote.html')

# @gallery

def gallery(request):
  return render(request,'gallery.html')




# Add a story time line, one user 'per ip address per story' can watch a story
from django.shortcuts import render

# Create your views here.

# Main page to render the main template 

# For now I have nothing to store in a database
def main(request):
  return render(request,'main.html')


# Contact me route, remember to add form information here? use mailchimp

def contact_me(request):
  return render(request,'contactme.html') 


# About me  route @ /about
def contact_me(request):
  return render(request,'contactme.html') 
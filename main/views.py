from django.shortcuts import render

from datetime import timedelta
# Create your views here.



  # take environment variables from .env.
# Main page to render the main template 

from imagekitio import ImageKit
import os

private_key = os.getenv('PRIVATE_KEY')
public_key = os.getenv('PUBLIC_KEY')
url_endpoint = os.getenv('URL_ENDPOINT')
    
imagekit = ImageKit(
    private_key=private_key,
    public_key=public_key,
    url_endpoint=url_endpoint,
)


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


def blogs(request,blognum):
  if blognum == 1:
    return render(request,'blog1.html')
  elif blognum == 2:
    return render(request,'blog2.html')
  elif blognum == 3:
    return render(request,'blog3.html')

# Motivitational quotes @quotes
def quote(request):
  return render(request,'quote.html')

# @gallery  ,using Google cloud storage api 

def gallery(request):
  img=[]
  for num in range(1,162,1):
    img.append(f"{num}.jpg")
  # print(img)
  
  imgs=[]
  for path in img:
    imagekit_url = imagekit.url({
      "path": f"/{path}",
      "url_endpoint": f"{url_endpoint}",
    })
    imgs.append(imagekit_url)
    # print(imagekit_url) 
  context={'imgs':imgs}
  return render(request,'gallery.html',context)




# Add a story time line, one user 'per ip address per story' can watch a story

#under construction error 404
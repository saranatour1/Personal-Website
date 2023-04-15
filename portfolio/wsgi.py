"""
WSGI config for portfolio project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/howto/deployment/wsgi/
"""

import os
import dotenv
from django.core.wsgi import get_wsgi_application


dotenv.read_dotenv(os.path.join(os.path.dirname(os.path.dirname(__file__)), '.env'))

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio.settings')

application = get_wsgi_application()
<<<<<<< HEAD

# vercel_app/wsgi.py
app = application
=======
>>>>>>> parent of 387b4e7 (vercel app configuration settings)

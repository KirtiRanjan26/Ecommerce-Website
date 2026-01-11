from django.shortcuts import render
from django.http import JsonResponse as jsonResponse


def home(request):
    data={
        'message':'Welcome to Ecommerce Store'
    }
    return jsonResponse(data)
# Create your views here.

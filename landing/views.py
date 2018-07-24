from django.shortcuts import render, redirect
from .forms import CommentForm
from .models import *


def landing(request):
    decorations_images = DecorationImg.objects.filter(is_new=True)
    customes_images = CustomerImg.objects.filter(is_active=True)
    
    form = CommentForm(request.POST or None)
    if request.method == "POST" and form.is_valid():
        form.save()
        form = CommentForm()
        return redirect("/#footer")
    return render(request, "landing/landing.html", locals())


def archive(request):
    decorations_images = DecorationImg.objects.filter(is_new=True)
    customes_images = CustomerImg.objects.filter(is_active=True)

    form = CommentForm(request.POST or None)
    if request.method == "POST" and form.is_valid():
        form.save()
        form = CommentForm()
        return redirect("/archive")
    return render(request, "landing/archive.html", locals())

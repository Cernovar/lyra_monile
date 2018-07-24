from django.db import models
from PIL import Image


class Decoration(models.Model):
    name = models.CharField(max_length=50, blank=False, null=True)
    discription = models.TextField(blank=True, null=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return "%s %s" % (self.name, self.discription)

    class Meta:
        verbose_name = 'Украшение'
        verbose_name_plural = 'Украшения'


class DecorationImg(models.Model):
    decoration = models.ForeignKey(Decoration, on_delete=models.SET_NULL, blank=True, null=True)
    img = models.ImageField(upload_to='decorations_img', blank=True, null=True)
    is_new = models.BooleanField(default=True)

    class Meta:
        verbose_name = 'Фотография украшения'
        verbose_name_plural = 'Фотографии украшений'


class Customer(models.Model):
    name = models.CharField(max_length=50, blank=False, null=True)
    citation = models.TextField(blank=True, null=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return "%s %s" % (self.name, self.citation)

    class Meta:
        verbose_name = 'Клиент'
        verbose_name_plural = 'Клиенты'


class CustomerImg(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, blank=True, null=True)
    img = models.ImageField(upload_to='customers_img', blank=True, null=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = 'Фотография клиента'
        verbose_name_plural = 'Фотографии клиентов'


class Comment(models.Model):
    name = models.CharField(max_length=50, blank=False, null=True)
    email = models.EmailField(max_length=70, blank=True, null=True)
    comment = models.TextField(max_length=400, blank=False, null=True)
    date = models.DateTimeField(auto_now_add=True, blank=True)

    def __str__(self):
        return "%s %s %s" % (self.name, self.email, self.comment)

    class Meta:
        verbose_name = 'Комментарий'
        verbose_name_plural = 'Комментарии'
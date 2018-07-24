from django.contrib import admin
from .models import *

class DecorationImgInline(admin.TabularInline):
    '''Tabular Inline View for DecorationImg'''

    model = DecorationImg
    min_num = 3
    max_num = 20
    extra = 0
    

class DecorationAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Decoration._meta.fields]
    # exclude = ["name"]
    list_filter = ["name"]
    search_fields = ["name"]
    inlines = [DecorationImgInline]

    class Meta:
        model = Decoration


class DecorationImgAdmin(admin.ModelAdmin):
    list_display = [field.name for field in DecorationImg._meta.fields]

    class Meta:
        model = DecorationImg


class CustomerImgInline(admin.TabularInline):
    '''Tabular Inline View for CustomerImg'''

    model = CustomerImg
    min_num = 3
    max_num = 20
    extra = 0


class CustomerAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Customer._meta.fields]
    # exclude = ["name"]
    list_filter = ["name"]
    search_fields = ["name"]
    inlines = [CustomerImgInline]

    class Meta:
        model = Customer


class CustomerImgAdmin(admin.ModelAdmin):
    list_display = [field.name for field in CustomerImg._meta.fields]

    class Meta:
        model = CustomerImg


class CommentAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Comment._meta.fields]
    # exclude = ["name"]
    list_filter = ["name"]
    search_fields = ["name"]

    class Meta:
        model = Comment

admin.site.register(Decoration, DecorationAdmin)
admin.site.register(Customer, CustomerAdmin)
# admin.site.register(Recent, RecentAdmin)
admin.site.register(Comment, CommentAdmin)
admin.site.register(DecorationImg, DecorationImgAdmin)
admin.site.register(CustomerImg, CustomerImgAdmin)

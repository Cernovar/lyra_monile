from django import forms
from .models import Comment


class CommentForm(forms.ModelForm):
    """Form definition for MODELNAME."""
    
    class Meta:
        """Meta definition for MODELNAMEform."""

        model = Comment
        exclude = ('',)

        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-name', 'placeholder': 'Введите ваше имя'}),
            'email': forms.EmailInput(attrs={'class': 'form-email', 'placeholder': 'Введите ваш email'}),
            'comment': forms.Textarea(attrs={'class': 'form-comment', 'placeholder': 'Введите сообщение'}),
        }

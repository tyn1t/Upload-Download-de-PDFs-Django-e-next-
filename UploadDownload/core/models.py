from django.db import models
from django.forms import ValidationError
from django.utils import timezone


# Create your models here.
class Files(models.Model):
    name = models.CharField(max_length=255, blank=True)
    pdf = models.FileField(upload_to='store/pdfs/')
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.pdf
    
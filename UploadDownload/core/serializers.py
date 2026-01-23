from rest_framework import serializers
from .models import Files

class FileSerializer(serializers.ModelSerializer):

    
    def validate_pdf(self, value):
        if not value.name.lower().endswith('.pdf'):
            raise serializers.ValidationError('Apenas arquivos PDF')
        
        max_size = 5 * 1024 * 1024  # 5 MB
        if value.size > max_size:
            raise serializers.ValidationError('O tamanho do arquivo não pode exceder 5 MB')
        return value
     
    class Meta:
        model = Files
        fields = ['id', 'pdf' , 'name']
        read_only_fields = ["name"]
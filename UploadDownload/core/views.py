from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser, FormParser

from .models import Files
from .serializers import FileSerializer

class FileViewSet(viewsets.ModelViewSet):
    queryset = Files.objects.all()
    serializer_class = FileSerializer 
    parser_classes = (MultiPartParser, FormParser)
        
    def perform_create(self, serializer):             
        file = self.request.FILES.get('pdf')
        serializer.save(name=file.name)
        
    # @action(detail=True, methods=['get'])
    # def dowload(self, request, pk=None):
    #     file_obj = self.get_object()
    #     return FileResponse(
    #         file_obj.file.open('rb'),
    #         as_attachment=True,
    #         filename=file_obj.file.name
    #     )
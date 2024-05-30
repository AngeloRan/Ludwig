from django.shortcuts import render
from django.http import JsonResponse
from django.conf import settings

# Create your views here.

class Media:

    static_dir = settings.STATIC_DIR

    def __init__(self) -> None:
        pass

    @staticmethod
    def get_path(media):
        return f'{Media.static_dir}/{media}'

def health(request):
    response = {'message': 'ok'}
    status = 200
    return JsonResponse(response, status=status)

def getMedia(request):

    if request.method == 'POST':
        data = request.POST
        #section = data['section']
        #medias = Media.get_by_name(data['selected_media']) or Media.filter_by_section(section)

        medias = data['selected_media']

        if medias:
            media_list =  [{media: Media.get_path(media)} for media in medias] # if media.is_in_section(section)]
        else:
            media_list = []
        
        response = {'medias': media_list}
        
        status = 200
        return JsonResponse(response, status=status)
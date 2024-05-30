from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

def health(request):
    response = {'message': 'ok'}
    status = 200
    return JsonResponse(response, status=status)

def getMedia(request):
    media = 'MEDIA CLASS'
    if request.method == 'POST':
        data = request.POST
        section = data['section']
        medias = media.get_by_name(data['selected_media']) or media.filter_by_section(section)

        if medias:
            media_list =  [{media: media.resolve} for media in medias if media.is_in_section(section)]
        
        else:
            media_list =  [{media.media: media.resolve} for media in medias]
        
        response = {'medias': media_list}
        
        status = 200
        return JsonResponse(response, status=status)
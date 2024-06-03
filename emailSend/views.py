from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import EmailMessage
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
@api_view(['POST'])
def contact(request):
    if request.method == "POST":
        name = request.data['name']
        email = request.data['email']
        subject = request.data['subject']
        message = request.data['message']

        email_message = EmailMessage(
            subject,
            message,
            'fabioleon00@gmail.com',
            [email],
        )
        email_message.send(fail_silently=False)
        
        return Response({'message': 'Email sent successfully'})

    return Response({'error': 'Invalid request method'}, status=status.HTTP_400_BAD_REQUEST)

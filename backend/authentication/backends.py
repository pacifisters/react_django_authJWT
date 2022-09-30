import jwt

from django.conf import settings

from rest_framework import authentication, exceptions

from .models import User


class JWTAuthentication(authentication.BaseAuthentication):
    authentication_header_prefix = 'Bearer'

    def authenticate(self, request):
        
        if request.method == 'POST':
            return None

       
        request.user = None
        
        auth_header = authentication.get_authorization_header(request).decode('utf-8').split()
        auth_header_prefix = self.authentication_header_prefix.lower()

        if not auth_header:
            msg = 'Пользователь не соответствует токену.'
            raise exceptions.AuthenticationFailed(msg)

        if len(auth_header) == 1:            
            msg = 'Пользователь не соответствует токену.'
            raise exceptions.AuthenticationFailed(msg)

        elif len(auth_header) > 2:
            msg = 'Пользователь не соответствует токену.'
            raise exceptions.AuthenticationFailed(msg)
        
        prefix = auth_header[0]
        token = auth_header[1]

        if prefix.lower() != auth_header_prefix:
            msg = 'Пользователь не соответствует токену.'
            raise exceptions.AuthenticationFailed(msg)
        return self._authenticate_credentials(request, token)

    def _authenticate_credentials(self, request, token):
                    
        try:
            payload = jwt.decode(token, "12345", algorithms=["HS256"])
        except Exception:
            msg = 'Ошибка аутентификации. Токен не действителен.'
            raise exceptions.AuthenticationFailed(msg)

        try:
            user = User.objects.get(pk=payload['id'])
        except User.DoesNotExist:
            msg = 'Пользователь соответствующий данному токену не найден.'
            raise exceptions.AuthenticationFailed(msg)

        if not user.is_active:
            msg = 'Данный пользователь деактивирован.'
            raise exceptions.AuthenticationFailed(msg)
        return (user, token)

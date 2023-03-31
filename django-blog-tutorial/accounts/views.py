from django.shortcuts import redirect
from allauth.account import views

# Create your views here.

# View for Login
class LoginView(views.LoginView): # Inherit LoginView from allauth
    template_name = 'accounts/login.html'

# View for Logout
class LogoutView(views.LogoutView): # Inherit LogoutView from allauth
    template_name = 'accounts/logout.html'

    def post(self, request, *args, **kwargs):
        if self.request.user.is_authenticated:
            self.logout() # If logged in, then proceed to logout
        return redirect('/') # Redirect to Main page after logout

# View for Signup
class SignupView(views.SignupView): # Inherit SignupView from allauth
    template_name = 'accounts/signup.html'
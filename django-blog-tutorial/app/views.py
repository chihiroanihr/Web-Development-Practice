from django.shortcuts import render, redirect
from django.views.generic import View
from .models import Post # Import Post model that has been created.
from .forms import PostForm
from django.contrib.auth.mixins import LoginRequiredMixin

# Create your views here.

# View for the Main Page.
class IndexView(View):
    def get(self, request, *args, **kwargs): # called first when main page is accessed
        post_data = Post.objects.order_by('-id') # order by descending IDs
        return render(request, 'app/index.html', { # via calling render(), give post data to template 'index.html'
            'post_data': post_data
        })

# View for the Post detail screen
class PostDetailView(View):
    def get(self, request, *args, **kwargs):
        post_data = Post.objects.get(id=self.kwargs['pk'])
        return render(request, 'app/post_detail.html', {
            'post_data': post_data
        })

# View for the Create Post
class PostCreateView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        form = PostForm(request.POST or None)
        return render(request, 'app/post_form.html', {
            'form': form
        })

    def post(self, request, *args, **kwargs):
        form = PostForm(request.POST or None)

        # Validate form
        if form.is_valid():
            post_data = Post()
            post_data.author = request.user # replace post author with logged in user
            post_data.title = form.cleaned_data['title'] # cleaned_data gets data from the form input
            post_data.content = form.cleaned_data['content'] 
            post_data.save() # save to database

            # Redirect to post_detail.html view when done
            return redirect('post_detail', post_data.id)

        # If error (failed validation), then stay on the form page
        return render(request, 'app/post_form.html', {
            'form': form
        })

# View for the Edit Post
class PostEditView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        post_data = Post.objects.get(id=self.kwargs['pk'])
        form = PostForm(
            request.POST or None,
            # Initialize form values フォームに初期値を入力しておく。
            initial = {
                'title': post_data.title,
                'content': post_data.content
            }
        )

        return render(request, 'app/post_form.html', {
            'form': form
        })
    
    def post(self, request, *args, **kwargs):
        form = PostForm(request.POST or None)

        # Validate form
        if form.is_valid():
            post_data = Post.objects.get(id=self.kwargs['pk']) # get id of the post that is edited
            post_data.title = form.cleaned_data['title'] # cleaned_data gets data from the form input
            post_data.content = form.cleaned_data['content'] 
            post_data.save() # save to database

            # Redirect to post_detail.html view of that edited post when done
            return redirect('post_detail', self.kwargs['pk'])

        # If error (failed validation), then stay on the form page
        return render(request, 'app/post_form.html', {
            'form': form
        })

# View for the Delete Post
class PostDeleteView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        post_data = Post.objects.get(id=self.kwargs['pk'])
        return render(request, 'app/post_delete.html', {
            'post_data': post_data
        })

    def post(self, request, *args, **kwargs):
        post_data = Post.objects.get(id=self.kwargs['pk'])
        post_data.delete()

        # Redirect to index.html (Main page)
        return redirect('index')
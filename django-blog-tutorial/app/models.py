from django.db import models
from django.conf import settings # import settings.py
from django.utils import timezone # import timezone

# Create your models here.

class Post(models.Model):
    # Connect foreign key with the database author
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField("Title", max_length=200) # must set max_length when CharField() is used
    content = models.TextField("Content")
    created = models.DateTimeField("Date Created", default=timezone.now)

    # 管理画面(admin.py)などで表示される文字列を定義することができる。
    def __str__(self):
        return self.title

#管理画面：操作、編集、削除など、Web上でデータベースを操作できる便利な画面。
from django.contrib import admin
from .models import Post # models.pyで作成したモデルをここに追加。

# Register your models here.
admin.site.register(Post)

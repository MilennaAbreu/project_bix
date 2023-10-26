from django.urls import path

from . import views

app_name = "centercontrols"

urlpatterns = [
    path(
        "centercontrol/",
        views.CentercontrolListAPIView.as_view(),
        name="control-list",
    )
]

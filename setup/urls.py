from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

from centercontrol.views import (
    ControlListView,
    ControlCreateView,
    ControlUpdateView,
    ControlDeleteView,
    ControlCompleteView,
)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api-auth/", include("rest_framework.urls")),
    path("api/", include("centercontrol.urls")),
    path("", ControlListView.as_view(), name="centercontrol_list"),
    path("create", ControlCreateView.as_view(), name="centercontrol_create"),
    path("update/<int:pk>", ControlUpdateView.as_view(), name="centercontrol_update"),
    path("delete/<int:pk>", ControlDeleteView.as_view(), name="centercontrol_delete"),
    path(
        "complete/<int:pk>",
        ControlCompleteView.as_view(),
        name="centercontrol_complete",
    ),
]

urlpatterns += [re_path(r"ˆ.*", TemplateView.as_view(template_name="index.html"))]

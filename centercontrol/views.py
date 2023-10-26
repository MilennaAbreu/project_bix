from rest_framework import mixins, generics, permissions
from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic import ListView

from django.views.generic import ListView, CreateView, UpdateView, DeleteView, View
from django.urls import reverse_lazy

from .models import Centercontrol
from .serializers import TabelaEmpresa
from .serializers import TabelaEmpregado
from .serializers import TabelaFerias


class CentercontrolListAPIView(generics.ListAPIView):
    serializer_class = TabelaEmpresa
    permission_classes = [permissions.AllowAny]
    queryset = Centercontrol.objects.all()


class CentercontrolListAPIView(generics.ListAPIView):
    serializer_class = TabelaEmpregado
    permission_classes = [permissions.AllowAny]
    queryset = Centercontrol.objects.all()


class CentercontrolListAPIView(generics.ListAPIView):
    serializer_class = TabelaFerias
    permission_classes = [permissions.AllowAny]
    queryset = Centercontrol.objects.all()


class ControlListView(ListView):
    models = Centercontrol


class ControlListView(ListView):
    model = Centercontrol


class ControlCreateView(CreateView):
    model = Centercontrol
    fields = ["company_name", "deadline"]
    success_url = reverse_lazy("centercontrol_list")


class ControlUpdateView(UpdateView):
    model = Centercontrol
    fields = ["company_name", "deadline"]
    success_url = reverse_lazy("centercontrol_list")


class ControlDeleteView(DeleteView):
    model = Centercontrol
    success_url = reverse_lazy("centercontrol_list")


class ControlCompleteView(View):
    def get(self, request, pk):
        centercontrol = get_object_or_404(Centercontrol, pk=pk)
        centercontrol.mark_has_complete()
        return redirect("centercontrol_list")

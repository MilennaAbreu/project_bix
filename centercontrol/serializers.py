from rest_framework import serializers

from .models import Centercontrol
from .models import Worker
from .models import Vacation


class TabelaEmpresa(serializers.ModelSerializer):
    class Meta:
        model = Centercontrol
        fields = (
            "id",
            "company_name",
        )
        read_only_fiels = ("id",)


class TabelaEmpregado(serializers.ModelSerializer):
    class Meta:
        model = Worker
        fields = (
            "id",
            "cod_company",
            "name",
            "admission",
            "dismissal",
        )
        read_only_fiels = ("id",)

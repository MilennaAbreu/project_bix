from django.db import models


class Centercontrol(models.Model):
    company_name = models.CharField(max_length=100, null=False, blank=False)
    cnpj = models.IntegerField(null=False, blank=False)


class Worker(models.Model):
    cod_company = models.IntegerField(null=False, blank=False)
    name = models.CharField(max_length=100, null=False, blank=False)
    function = models.CharField(max_length=100, null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True, null=False, blank=False)
    admission = models.DateField(
        verbose_name="Data de Admissão", null=False, blank=False
    )
    dismissal = models.DateField(null=True)


class Vacation(models.Model):
    cod_company = models.IntegerField(null=False, blank=False)
    cod_worker = models.IntegerField(null=False, blank=False)
    date_vacation_start = models.DateField(
        verbose_name="Data Inicio de Ferias", null=False, blank=False
    )
    date_vacation_end = models.DateField(
        verbose_name="Data Fim de Ferias", null=False, blank=False
    )

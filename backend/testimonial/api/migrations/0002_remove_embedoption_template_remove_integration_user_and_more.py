# Generated by Django 5.1.3 on 2024-11-11 15:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='embedoption',
            name='template',
        ),
        migrations.RemoveField(
            model_name='integration',
            name='user',
        ),
        migrations.RemoveField(
            model_name='workflow',
            name='user',
        ),
        migrations.DeleteModel(
            name='Analytics',
        ),
        migrations.DeleteModel(
            name='EmbedOption',
        ),
        migrations.DeleteModel(
            name='Template',
        ),
        migrations.DeleteModel(
            name='Integration',
        ),
        migrations.DeleteModel(
            name='Workflow',
        ),
    ]
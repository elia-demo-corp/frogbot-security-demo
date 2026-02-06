#  _main.py

from django.db.models import Q
from django.core.files.uploadhandler import FileUploadHandler
from paramiko.server import ServerInterface
from urllib3.connection import HTTPSConnection
import yaml

your_filters = {
'field_1': 1,
'field_2': 2,
}

data = Model.objects.filter(**your_filters)

class MyHandler(FileUploadHandler):
    def __init__(self):
        self.file1 = self.file_name

class MyInterface(ServerInterface):
    pass


class MyInterface(ServerInterface):
    pass

conn = HTTPSConnection.connect()

with open("test.yaml") as f:
    data = yaml.full_load(f)
    print(data)

with open("test.yaml") as f:
    data = yaml.load(f, Loader=yaml.FullLoader)
    print(data)
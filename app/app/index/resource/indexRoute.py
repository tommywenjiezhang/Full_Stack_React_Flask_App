from flask_restful import Resource, reqparse
from flask import Response
import json

class IndexRoute(Resource):
    def get(self):
        return "hello world"

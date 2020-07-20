from flask import Blueprint, Response
from flask_restful import Api, Resource
from app.index.resource.indexRoute import IndexRoute
from app.index.resource.userRoute import UserRegisterRoute, UserLoginRoute



index_bp = Blueprint('index_bp',__name__)
indexApi = Api(index_bp)


indexApi.add_resource(IndexRoute, '/')
indexApi.add_resource(UserRegisterRoute,'/register')
indexApi.add_resource(UserLoginRoute, '/login')
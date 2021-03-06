from flask import Flask
from flask.json import jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_jwt import JWT, jwt_required, current_identity
from datetime import timedelta
from flask import Response


db = SQLAlchemy()

def create_app(test_config=None):
    app = Flask(__name__)

    app.config.from_object('app.config.Config')
    app.secret_key = "zhang"
    if test_config == None:
        app.config.from_object('app.config.Config')
    else:
        app.config.update(test_config)
    db.init_app(app)
    with app.app_context():
        from app.cities import cities_bp
        from app.index import index_bp
        app.register_blueprint(index_bp, url_prefix="/")
        app.register_blueprint(cities_bp, url_prefix='/cities')
        from app.auth import authenicate, identity
        app.config['JWT_EXPIRATION_DELTA'] = timedelta(seconds=18000)
        jwt = JWT(app, authenicate, identity)

        @jwt.auth_response_handler
        def customized_response_handler(access_token, identity):
            return jsonify({
                'access_token': access_token.decode('utf-8'),
                'user_id': identity.id}
            )

        @jwt.jwt_error_handler
        def customized_error_handler(error):
            return Response(response=jsonify({'message': error.description,'code': error.status_code}), status=error.status_code,mimetype="application/json")



    return app


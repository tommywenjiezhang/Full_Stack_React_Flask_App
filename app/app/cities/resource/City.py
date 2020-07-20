from flask_restful import Resource, reqparse
from app.model.Citymodel import City, CitySchema
from flask import Response
import json


class CityRoute(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('cityName', type=str, help='city name')
    parser.add_argument("lat", type=float)
    parser.add_argument("lng", type=float)
    parser.add_argument("country", type=str)
    parser.add_argument("abbreviation")
    parser.add_argument('capital')
    parser.add_argument("population", type=int)

    def get(self, id):
        city = City.query.filter_by(id=id).first()
        schema = CitySchema()
        cityJson = json.dumps(schema.dump(city))
        return Response(response=cityJson, status=200, mimetype="application/json")

    def delete(self, id):
        city = City.findById(id)
        if city:
            city.delete_from_db()
            return {'message': 'Item deleted.'}
        return Response(response={'message': 'Item not found.'}, status=404, mimetype="application/json")

    def put(self, id):
        data = CityRoute.parser.parse_args()
        city = City.findById(id)

        if city:
            city.cityName = data['cityName']
            city.country = data['country']
            city.abbreviation = data['abbreviation']

        else:
            city = City(**data)
        city.save_to_db()
        return Response(response=city.json(), status=200, mimetype="application/json")



class CitiesRoute(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('cityName', type=str, help='city name')
    parser.add_argument("lat", type=float)
    parser.add_argument("lng", type=float)
    parser.add_argument("country", type=str)
    parser.add_argument("abbreviation")
    parser.add_argument('capital')
    parser.add_argument("population", type=int)

    def get(self):
        cities = City.query.all()
        schema = CitySchema()
        jsonRes = json.dumps([schema.dump(city) for city in cities])
        return Response(response=jsonRes, status=200, mimetype="application/json")

    def post(self):
        data = CitiesRoute.parser.parse_args()
        city = City(**data)
        try:
            city.save_to_db()
        except:
            return {"message": "An error occurred inserting the item."}
        cityJson = city.json()
        return Response(response=cityJson, status=200, mimetype="application/json")

from app import db
from marshmallow import Schema, fields
import json

class City(db.Model):
    __tablename__ = "tblCitiesImport"
    id = db.Column('id',db.Integer, primary_key=True)
    cityName = db.Column("fldName",db.String(50))
    lat = db.Column("fldLat", db.Float)
    lng = db.Column("fldLong",db.Float)
    country = db.Column("fldCountry",db.String)
    abbreviation = db.Column("fldAbbreviation",db.String)
    capital = db.Column("fldCapitalStatus",db.String)
    population = db.Column("fldPopulation",db.BIGINT)
    UserID = db.Column("UserID", db.Integer)

    def __init__(self, cityName,lat,lng,country,abbreviation,capital,population):
        self.cityName = cityName
        self.lat = lat
        self.lng = lng
        self.country = country
        self.abbreviation = abbreviation
        self.capital = capital
        self.population = population
        self.UserID = 1

    @classmethod
    def findById(cls, id):
        return cls.query.filter_by(id=id).first()

    def json(self):
        city = {"cityName": self.cityName,
                "lat":self.lat,
                "lng": self.lng,
                "country":self.country,
                "abbreviation":self.abbreviation,
                "capital": self.capital,
                "population":self.population,
                "UserID": self.UserID
                }
        cityJson = json.dumps(city)
        return cityJson

    def schema(self):
        schema = CitySchema()
        return schema.dumps(self)
    def snapshot(self):
        return {"cityName":self.cityName}
    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()


class CitySchema(Schema):
    id = fields.Integer()
    cityName = fields.String()
    lat = fields.Float()
    lng = fields.Float()
    country = fields.String()
    abbreviation = fields.String()
    capital = fields.String()
    population = fields.Integer()
    UserID = fields.Integer()
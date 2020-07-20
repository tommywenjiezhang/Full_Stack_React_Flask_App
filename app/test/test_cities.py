
from app import create_app, db
import os
import pytest
import json

TEST_DB = 'test.sqlite'
basedir = os.path.abspath(os.path.dirname(__file__))


@pytest.fixture
def client():
    app = create_app({"TESTING": True,
                      'SQLALCHEMY_DATABASE_URI': 'sqlite:///' + os.path.join(basedir, TEST_DB),
                      'DEBUG': False
                      })
    with app.test_client() as client:
        with app.app_context():
            db.init_app(app)
        yield client




def test_get(client):
    response = client.get("/cities",follow_redirects=True)
    result =  {
        "lng": 139.7514,
        "capital": "primary",
        "id": 1,
        "population": 35676000,
        "cityName": "Tokyo",
        "lat": 35.685,
        "abbreviation": "JPN",
        "country": "Japan"
    }
    responseType = "type of data is"
    assert response.status_code == 200
    returnData = json.loads(response.data)
    assert result in returnData

def test_sample():
    assert 2 == 2
if __name__ == "__main__":
    print('sqlite:///' + os.path.join(basedir, TEST_DB))




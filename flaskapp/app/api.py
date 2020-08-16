from flask import Flask
import pandas as pd
import numpy as np
from flask import request, jsonify
from flask_restful import Api, Resource
from flask_marshmallow import Marshmallow
from app import app
import json

api= Api(app)


class EggsDemand(Resource):
    def get(self):
        data= pd.read_csv('eggs_demand.csv')
        data= data.groupby('Area').agg({'Year': lambda x: list(x),'Value': lambda x: list(x)}).to_json(orient='index')
        return json.dumps(data)

# api.add_resource(EggsDemand, '/eggsDemand')





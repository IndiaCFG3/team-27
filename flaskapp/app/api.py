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

class EggsPriceDemand(Resource):
    def get(self):
        data= pd.read_csv('eggs_price_demand.csv')
        data= data.groupby('Area').agg({'Year': lambda x: list(x),'Value': lambda x: list(x)}).to_json(orient='index')
        return json.dumps(data)

class EggsMalnutritionDemand(Resource):
    def get(self):
        data= pd.read_csv('eggs_malnutrition_demand.csv')
        data= data.groupby('Counrty ').agg({'Survey year': lambda x: list(x),'Wasting': lambda x: list(x), 'Stunting': lambda x: list(x),
        'Underweight': lambda x: list(x)}).to_json(orient='index')
        return json.dumps(data)


class ProteinDemand(Resource):
    def get(self):
        data= pd.read_csv('protein_demand.csv')
        data= data.groupby('Entity').agg({'Year': lambda x: list(x),'Food Balance Sheets: Grand Total - Protein supply quantity (g/capita/day) (FAO (2017)) (g/capita/day)': lambda x: list(x)}).to_json(orient='index')
        return json.dumps(data)


# class EggsMalnutritionDemand(Resource):
#     def get(self):

api.add_resource(EggsDemand, '/eggsDemand')
api.add_resource(EggsPriceDemand, '/eggsPriceDemand')
api.add_resource(EggsMalnutritionDemand, '/eggsMalnutritionDemand')
api.add_resource(ProteinDemand, '/eggsProteinDemand')





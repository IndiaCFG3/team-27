from flask import Flask
import pandas as pd
import numpy as np
from flask import request, jsonify
from flask_restful import Api, Resource
from flask_marshmallow import Marshmallow
from app import app
import json

api= Api(app)


class EggsProducedByArea(Resource):
    def get(self):
        data= pd.read_csv('eggs_produced.csv')
        area = 'Afghanistan'
        data= data.groupby(area).agg({'Year': lambda x: list(x),'Value': lambda x: list(x)}).to_json(orient='index')
        return json.dumps(data)

class EggsProducedByYear(Resource):
    def get(self):
        data= pd.read_csv('eggs_produced.csv')
        year = '1975'
        data= data.groupby(year).agg({'Area': lambda x: list(x),'Value': lambda x: list(x)}).to_json(orient='index')
        return json.dumps(data)

class EggsExportedByArea(Resource):
    def get(self):
        data= pd.read_csv('eggs_export.csv')
        area = 'Afghanistan'
        data= data.groupby(area).agg({'Year': lambda x: list(x),'Value': lambda x: list(x)}).to_json(orient='index')
        return json.dumps(data)

class EggsExportedByYear(Resource):
    def get(self):
        data= pd.read_csv('eggs_export.csv')
        year = '1975'
        data= data.groupby(year).agg({'Area': lambda x: list(x),'Value': lambda x: list(x)}).to_json(orient='index')
        return json.dumps(data)

class EggsProducerPriceByArea(Resource):
    def get(self):
        data= pd.read_csv('eggs_price_demand.csv')
        area = 'Afghanistan'
        data= data.groupby(area).agg({'Year': lambda x: list(x),'Value': lambda x: list(x)}).to_json(orient='index')
        return json.dumps(data)

class EggsProducerPriceByYear(Resource):
    def get(self):
        data= pd.read_csv('eggs_price_demand.csv')
        year = '1975'
        data= data.groupby(year).agg({'Area': lambda x: list(x),'Value': lambda x: list(x)}).to_json(orient='index')
        return json.dumps(data)


# class EggsMalnutritionDemand(Resource):
#     def get(self):

api.add_resource(EggsDemand, '/eggsDemand')
api.add_resource(EggsPriceDemand, '/eggsPriceDemand')
api.add_resource(EggsMalnutritionDemand, '/eggsMalnutritionDemand')





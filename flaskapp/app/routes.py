from app import app
import pandas as pd
import numpy as np
from flask import request, jsonify
from flask_restful import Api, Resource
from flask_marshmallow import Marshmallow
import json



@app.route('/')
@app.route('/index')
def index():
    return "Hello, World!"

@app.route('/eggsDemand')
def eggsDemand():
    if request.method=='GET':
        data= pd.read_csv('eggs_demand.csv')
        data= data.groupby('Area').agg({'Year': lambda x: list(x),'Value': lambda x: list(x)}).to_json(orient='index')
        return json.dumps(data)

@app.route('/eggsPrice')
def eggsPrice():
    if request.method=='GET':
        data= pd.read_csv('eggs_price_demand.csv')
        data= data.groupby('Area').agg({'Year': lambda x: list(x),'Value': lambda x: list(x)}).to_json(orient='index')
        return json.dumps(data)

@app.route('/eggsMalnutrition')
def eggsMalnutrition():
    if request.method=='GET':
        data= pd.read_csv('eggs_malnutrition_demand.csv')
        data= data.groupby('Counrty ').agg({'Survey year': lambda x: list(x),'Wasting': lambda x: list(x), 'Stunting': lambda x: list(x), 
        'Underweight': lambda x: list(x)}).to_json(orient='index')
        return json.dumps(data)

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
        country = request.headers.get('country')
        data= pd.read_csv('eggs_demand.csv')
        data= data.groupby('Area').agg({'Year': lambda x: list(x),'Value': lambda x: list(x)}).to_dict(orient='index')
        return json.dumps(data[country])

@app.route('/eggsPrice')
def eggsPrice():
    if request.method=='GET':
        country = request.headers.get('country')
        data= pd.read_csv('eggs_price_demand.csv')
        data= data.groupby('Area').agg({'Year': lambda x: list(x),'Value': lambda x: list(x)}).to_dict(orient='index')
        return json.dumps(data[country])

@app.route('/eggsMalnutrition',methods=['POST'])
def eggsMalnutrition():
    if request.method=='GET':
        country = request.headers.get('country')
        data= pd.read_csv('eggs_malnutrition_demand.csv')
        data= data.groupby('Counrty ').agg({'Survey year': lambda x: list(x),'Wasting': lambda x: list(x), 'Stunting': lambda x: list(x), 
        'Underweight': lambda x: list(x)}).to_dict(orient='index')
        return json.dumps(data[country])

@app.route('/eggsProtein')
def eggsProtein():
    if request.method=='GET':
        country = request.headers.get('country')
        data= pd.read_csv('eggs_malnutrition_demand.csv')
        data= data.groupby('Counrty ').agg({'Survey year': lambda x: list(x),'Wasting': lambda x: list(x), 'Stunting': lambda x: list(x), 
        'Underweight': lambda x: list(x)}).to_dict(orient='index')
        return json.dumps(data[country])

@app.route('/eggsProducedByArea')
def eggsProducedByArea():
    if request.method=='GET':
        country = request.headers.get('country')
        data= pd.read_csv('eggs_produced.csv')
        data= data.groupby('Area').agg({'Year': lambda x: list(x),'Value': lambda x: list(x)}).to_dict(orient='index')
        return json.dumps(data[country])

@app.route('/eggsProducedByYear')
def eggsProducedByYear():
    if request.method=='GET':
        country = int(request.headers.get('country'))
        data= pd.read_csv('eggs_produced.csv')
        data= data.groupby('Year').agg({'Area': lambda x: list(x),'Value': lambda x: list(x)}).to_dict(orient='index')
        return json.dumps(data[country])

@app.route('/eggsExportedByArea')
def eggsExportedByArea():
    if request.method=='GET':
        country = request.headers.get('country')
        data= pd.read_csv('eggs_export.csv')
        data= data.groupby('Area').agg({'Year': lambda x: list(x),'Value': lambda x: list(x)}).to_dict(orient='index')
        return json.dumps(data[country])

@app.route('/eggsExportedByYear')
def eggsExportedByYear():
    if request.method=='GET':
        country = int(request.headers.get('country'))
        data= pd.read_csv('eggs_export.csv')
        data= data.groupby('Year').agg({'Area': lambda x: list(x),'Value': lambda x: list(x)}).to_dict(orient='index')
        return json.dumps(data[country])

@app.route('/eggsProducerPriceByArea')
def eggsProducerPriceByArea():
    if request.method=='GET':
        country = request.headers.get('country')
        data= pd.read_csv('eggs_price_demand.csv')
        data= data.groupby('Area').agg({'Year': lambda x: list(x),'Value': lambda x: list(x)}).to_dict(orient='index')
        return json.dumps(data[country])

@app.route('/eggsProducerPriceByYear')
def eggsProducerPriceByYear():
    if request.method=='GET':
        country = int(request.headers.get('country'))
        data= pd.read_csv('eggs_price_demand.csv')
        data= data.groupby('Year').agg({'Area': lambda x: list(x),'Value': lambda x: list(x)}).to_dict(orient='index')
        return json.dumps(data[country])

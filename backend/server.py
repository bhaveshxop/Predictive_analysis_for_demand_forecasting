from flask import Flask, request, jsonify
import google.generativeai as genai
import os
from dotenv import load_dotenv
from flask_cors import CORS

#imporing custom function
from predict_sales import forcasted_sales, getSalesModel, predict_daily_sales

load_dotenv()

app = Flask(__name__) 
CORS(app)

@app.route('/test', methods=['GET'])
def test():
    return jsonify({'message': 'Hello World'})

@app.route('/predict-sales', methods=['POST'])
def predict_sales():
    data = request.get_json()
    try:
        year = data['year']
        month = data['month']
        day = data['day']
        category = data['category']
        product = data['product']
        is_festival = data['isFestival']
        is_weekend = data['isWeekend']
        season = data['season']

        sales = predict_daily_sales(year, month, day, category, product, is_festival, is_weekend, season)
        return jsonify({'year' : year, 'month' : month, 'day' : day, 'category' : category, 'product' : product, 'isFestival' : is_festival, 'isWeekend' : is_weekend, 'season' : season, 'sales' : sales})
    except Exception as e:
        return jsonify({'error': str(e)})
   
if __name__ == '__main__':
   app.run(debug=True, port=5000)

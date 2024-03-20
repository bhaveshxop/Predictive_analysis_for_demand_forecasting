from flask import Flask, request, jsonify
import google.generativeai as genai
import os
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()

app = Flask(__name__) 
CORS(app)

@app.route('/test', methods=['GET'])
def test():
    return jsonify({'message': 'Hello World'})

@app.route('/predict-sales', methods=['POST'])
def predict_sales():
    data = request.get_json()
    print(data)
    return jsonify({'message': 'Prediction Success'})
   


if __name__ == '__main__':
    app.run(debug=True, port=5000)

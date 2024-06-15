from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return "Python Code"

@app.route('/api/predict', methods=['POST'])
def predict():
    input_data = request.json.get('input')
    prediction = f'Prediction for input "{input_data}"'
    return jsonify({"prediction": prediction})

@app.route('/api/predict-custom', methods=['POST'])
def predict_custom():
    input_data = request.json.get('input')
    prediction = f'Custom prediction for input "{input_data}"'
    return jsonify({"prediction": prediction})

if __name__ == '__main__':
    app.run(debug=True, port=5001)

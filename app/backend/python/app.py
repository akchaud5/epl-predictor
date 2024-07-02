from flask import Flask, request, jsonify
from flask_cors import CORS
from modules.data_processing import predicts

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return "Python Code"

@app.route('/api/predict', methods=['POST'])
def predict():
    predictions, optimized_team = predicts()

    return jsonify({"topPlayers": predictions, "optimizedTeam": optimized_team})

@app.route('/api/predict-custom', methods=['POST'])
def predict_custom():
    input_data = request.json.get('input')
    prediction = f'Custom prediction for input "{input_data}"'
    return jsonify({"prediction": prediction})

if __name__ == '__main__':
    app.run(debug=True, port=5001)

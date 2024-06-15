from flask import Flask, request, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return "Python Code"

@app.route('/predict', methods=['POST'])
def predict():

    return "Predict"

@app.route('/predict_custom', methods=['POST'])
def predict_custom():

    return "Predict Custom"

if __name__ == '__main__':
    app.run(debug=True, port=5000)

from flask import jsonify

def test_home_route(client):
    response = client.get('/')
    assert response.status_code == 200
    assert b"Python Code" in response.data

def test_predict_route(client):
    mock_input = {'data': 'test data'}
    response = client.post('/api/predict', json=mock_input)
    assert response.status_code == 200
    assert 'topPlayers' in response.json
    assert 'optimizedTeam' in response.json

def test_predict_custom_route(client):
    mock_input = {'input': {'numDefenders': 1, 'numMidfielders': 1, 'numGoalkeepers': 1, 'numForwards': 1, 'budget': 1000}}
    response = client.post('/api/predict-custom', json=mock_input)
    assert response.status_code == 200
    assert 'topPlayers' in response.json
    assert 'optimizedTeam' in response.json

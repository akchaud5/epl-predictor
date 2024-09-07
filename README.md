# EPL Prediction

## Overview

This project is aimed at predicting player performance in the English Premier League. It uses a Node.js backend for handling requests and user authentication, a React frontend for the user interface, and a Flask custom API for machine learning model predictions using XGBoost. Below is a detailed overview of the project structure, tech stack, instructions for running the application using Docker Compose, instructions for utilizing the custom API, and information about the workflow and the project structure.

---

## Tech Stack

### Backend (Node.js)
- **Node.js**: Serves the API for user authentication and predictions logic.
- **Express.js**: Framework for building the API.
- **JavaScript**: Widely used for dynamic web development.
- **PostgreSQL**: Database used to store user data.
- **Axios**: For making external API calls to the Flask ML models and other services.
- **JWT**: Token-based authentication for securing protected routes.
- **Morgan**: For request logging in the backend.

### Custom API (Python/Flask)
- **Flask**: Serves as a RESTful API to provide machine learning model predictions related to player performance.
- **XGBoost**: The machine learning library used for player performance predictions.

### Frontend (React)
- **React.js**: A JavaScript framework for building the user interface.
- **Context API**: Used for global state management, including authentication using JWT.
- **Axios**: For making API requests to the backend services.
- **React Router**: Handles client-side routing in the application.

---

## Docker Deployment

The project includes a `docker-compose.yml` file that simplifies the process of running the entire application in a containerized environment. The services include the Node.js backend, the Flask custom API for machine learning functionality, and the React frontend.

### Running with Docker Compose

1. **Ensure Docker is installed and running** on your system. Also, confirm that Docker Compose is installed.

2. **Navigate to the project root directory:**

    ```bash
    cd app
    ```

3. **Build and start the containers using Docker Compose:**

    ```bash
    docker-compose up --build
    ```

4. **Access the application**:
    - React Frontend: `http://localhost:3000`
    - Node.js Backend: `http://localhost:5000`
    - Flask API (ML model): `http://localhost:5001`

### Running Individual Containers

If you want to run containers individually:

#### Node.js Backend

```bash
cd backend/node
docker build -t node-backend .
docker run -p 5000:5000 node-backend
```

#### Flask Custom API

```bash
cd backend/python
docker build -t flask-ml-api .
docker run -p 8000:8000 flask-ml-api
```

#### React Frontend

```bash
cd frontend
docker build -t react-frontend .
docker run -p 3000:3000 react-frontend
```

---

## API Endpoints

The Flask API exposes two main endpoints for making predictions:

1. **POST `/api/predict`**
    - **Description**: Fetches player performance predictions based on default configurations.
    - **Response**: 
      ```json
      {
        "topPlayers": [...],
        "optimizedTeam": {...}
      }
      ```

2. **POST `/api/predict-custom`**
    - **Description**: Accepts custom input data to make predictions. The input data is provided in the request body.
    - **Request Body**:
      ```json
      {
        "input": { ... }
      }
      ```
    - **Response**: 
      ```json
      {
        "topPlayers": [...],
        "optimizedTeam": {...}
      }
      ```


---

## Workflow (.github/workflows/ci.yml)

This project uses GitHub Actions for Continuous Integration (CI). The workflow (`ci.yml`) is triggered on push or pull request events to the main branch.

### Key Steps in the Workflow:
- **Install Dependencies**: Installs dependencies for both the Node.js and Flask services.
- **Tests**: Runs tests to ensure code quality and functionality.
- **Docker Build**: Builds the Docker images for the frontend, backend, and API.

---

## File Structure

```plaintext
/Player-Performance-Prediction-2.0/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── app/
│   ├── backend/
│   │   ├── node/
│   │   │   ├── config/
│   │   │   ├── controllers/
│   │   │   ├── middleware/
│   │   │   ├── node_modules/
│   │   │   ├── routes/
│   │   │   ├── scripts/
│   │   │   ├── services/
│   │   │   ├── tests/
│   │   │   ├── utils/
│   │   │   ├── package.json
│   │   │   ├── package-lock.json
│   │   │   ├── index.js
│   │   │   └── Dockerfile
│   ├── python/
│   │   ├── datasets/
│   │   ├── modules/
│   │   ├── tests/
│   │   ├── visualizations/
│   │   ├── requirements.txt
│   │   ├── app.py
│   │   ├── config.yaml
│   │   └── Dockerfile
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── authentication/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── index.js
│   │   ├── index.css
│   │   ├── reportWebVitals.js
│   │   ├── setupTests.js
│   │   └── App.css
│   ├── package.json
│   ├── package-lock.json
│   └── Dockerfile
│
├── docker-compose.yml
└── .gitignore
```


---

## Datasets

### Fantasy Premier League 2023-2024
- **Credits**: Paolo Mazza (CC0: Public Domain)
- **Link**: [Fantasy Premier League Dataset 2023-2024](https://www.kaggle.com/datasets/meraxes10/fantasy-premier-league-dataset-2023-2024)

---

## Contributing

I welcome all collaborators and contributions to the **Player Performance Prediction 2.0** project! If you would like to contribute, whether it’s fixing a bug, adding a feature, or improving the documentation, feel free to submit a pull request.

### How to Contribute:

1. **Fork the Repository**: Click the "Fork" button at the top of the repository page.
2. **Create a Branch**: Create a new branch for your feature or bug fix.
   ```bash
   git checkout -b your-branch-name
   ```


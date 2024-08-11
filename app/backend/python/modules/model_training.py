import os
import yaml
import pandas as pd
import xgboost as xgb
from xgboost import XGBRegressor, plot_importance
from sklearn.model_selection import train_test_split, GridSearchCV, KFold
from sklearn.metrics import mean_squared_error
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader, TensorDataset

# Load configuration from config.yaml
def load_config():
    # Assuming the 'modules' directory is inside the project root
    config_path = os.path.join(os.path.dirname(__file__), '..', 'config.yaml')

    with open(config_path, 'r') as file:
        config = yaml.safe_load(file)
    return config

# Function to train all 4 models for each position
def train_models(dataframes, positions):
    trained_models = []

    for i in range(len(dataframes)):
        integer_columns = dataframes[i].select_dtypes(include=['int']).drop(columns=['total_points'])
        xgb_model = train_xgboost_model(integer_columns, dataframes[i]['total_points'], positions[i])
        trained_models.append(xgb_model)

    return trained_models

# Function to train XGBoost model with the predefined hyperparameters
def train_xgboost_model(X, y, position):
    config = load_config()
    hyperparams = config['model_training']['xgboost']

    # Create XGBoost regressor with predefined hyperparameters
    xgb_model = XGBRegressor(**hyperparams)

    # Train the model
    xgb_model.fit(X, y)

    print(f"XGBoost Model trained for {position} position.")

    return xgb_model

# Function to evaluate XGBoost model and print MSE
def evaluate_model(model, X_test, y_test, position):
    # Get the predictions
    y_pred = model.predict(X_test)

    # Calculate MSE
    mse = mean_squared_error(y_test, y_pred)
    print(f"Mean Squared Error for {position}: {mse}")

# Function to generate the visualizations
def visualize(models, output_dir, positions):
    # Ensuring there is a directory for the visualizations
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    visualizations = []

    for idx, model in enumerate(models):
        # Generate the feature importance plot
        fig, ax = plt.subplots(figsize=(10, 6))
        plot_importance(model, ax=ax)

        # Save the plot as an image file
        image_path = os.path.join(output_dir, f"visualization_{positions[idx]}.png")
        fig.savefig(image_path, format='png')

        # Close the figure to release memory
        plt.close(fig)

        # Append the image path to the list of visualizations
        visualizations.append(image_path)

    return visualizations

# DNN Class
class DenseNet(nn.Module):
    def __init__(self, input_size):
        super(DenseNet, self).__init__()
        self.fc1 = nn.Linear(input_size, 128)
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(128, 64)
        self.output_layer = nn.Linear(64, 1)

    def forward(self, x):
        x = self.relu(self.fc1(x))
        x = self.relu(self.fc2(x))
        x = self.output_layer(x)
        return x

# Function that trains the neural network
def train_nn_model(training_data, input_size, n_epochs=10):
    model = DenseNet(input_size)
    loss_function = nn.MSELoss()
    optimizer = optim.Adam(model.parameters(), lr=0.001)

    for epoch in range(n_epochs):
        model.train()
        for X_batch, y_batch in training_data:
            optimizer.zero_grad()
            outputs = model(X_batch)
            loss = loss_function(outputs, y_batch)
            loss.backward()
            optimizer.step()
        print(f'Epoch {epoch + 1}, Loss: {loss.item()}')
    return model

# Function that loads the data correctly for the NN
def load_nn_data(df, target_column='total_points', test_size=0.2, batch_size=32):
    X = df.drop(target_column, axis=1).values
    y = df[target_column].values

    X_tensor = torch.tensor(X, dtype=torch.float32)
    y_tensor = torch.tensor(y, dtype=torch.float32).view(-1, 1)

    X_train, X_test, y_train, y_test = train_test_split(X_tensor, y_tensor, test_size=test_size, random_state=42)

    train_dataset = TensorDataset(X_train, y_train)
    train_loader = DataLoader(train_dataset, batch_size=batch_size, shuffle=True)

    test_dataset = TensorDataset(X_test, y_test)
    test_loader = DataLoader(test_dataset, batch_size=batch_size)

    return train_loader, test_loader

# Function that loads the data for each position
def load_data_for_position(df, position, target_column='total_points', test_size=0.2, batch_size=32):
    position_df = df[df['position'] == position]
    return load_nn_data(position_df, target_column, test_size, batch_size)

# Function that calls train model for each position
def train_model_for_position(training_data, input_size, position, n_epochs=10):
    print(f"Training model for position: {position}")
    model = train_nn_model(training_data, input_size, n_epochs)
    return model

# Function that trains each model based on position
def train_and_save_models_by_position(df, positions=['GKP', 'MID', 'FWD', 'DEF']):
    models = []
    for position in positions:
        training_data, _ = load_data_for_position(df, position)
        input_size = df.shape[1] - 2
        model = train_model_for_position(training_data, input_size, position)
        models.append((position, model))
    return models

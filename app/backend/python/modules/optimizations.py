import pandas as pd
from pulp import LpProblem, LpVariable, lpSum, LpMaximize

# Function to set the parameters for the linear optimization
def linear_optimization(df):

    # Set the maximum budget and position constraints
    max_budget = 1000
    max_keepers = 2
    max_defenders = 5
    max_midfielders = 5
    max_forwards = 3

    # Call the optimize_team function
    selected_team = optimize_team(df, max_budget, max_keepers, max_defenders, max_midfielders, max_forwards)

    # Display the selected team
    print("Selected Team:")
    print(selected_team)
    return selected_team

# Function that uses PuLP to optimize team
def optimize_team(df, max_cost, max_keepers, max_defenders, max_midfielders, max_forwards):
    # Create a linear programming problem
    prob = LpProblem("TeamOptimization", LpMaximize)

    # Create binary decision variables for each player
    df['selected'] = LpVariable.dicts("Player", df.index, cat="Binary")

    # Objective function: Maximize total points
    prob += lpSum(df['predicted_points'] * df['selected'])

    # Cost constraint: Total cost should be less than max_cost
    prob += lpSum(df['now_cost'] * df['selected']) <= max_cost

    # Position constraints: Limit the number of players from each role
    prob += lpSum(df['selected'][df['position'] == 'GKP']) <= max_keepers
    prob += lpSum(df['selected'][df['position'] == 'DEF']) <= max_defenders
    prob += lpSum(df['selected'][df['position'] == 'MID']) <= max_midfielders
    prob += lpSum(df['selected'][df['position'] == 'FWD']) <= max_forwards

    # Solve the problem
    prob.solve()

    # Extract the selected players
    selected_players = df.loc[df['selected'].apply(lambda x: x.varValue) == 1]

    return selected_players

# Function to set the parameters for the linear optimization
def linear_optimization_specific(df, max_budget, max_keepers, max_defenders, max_midfielders, max_forwards, invalid_players):

    # Create a copy of the DataFrame
    df_copy = df.copy()

    # Remove invalid players from the copy of the DataFrame
    df_copy = df_copy[~df_copy['name'].isin(invalid_players)]

    # Call the optimize_team function
    selected_team = optimize_team_specific(df_copy, max_budget, max_keepers, max_defenders, max_midfielders, max_forwards)

    # Display the selected team
    print("Custom Team Selected: ")
    print(selected_team)
    return selected_team

# Function that uses PuLP to optimize team
def optimize_team_specific(df, max_cost, max_keepers, max_defenders, max_midfielders, max_forwards):
    # Create a linear programming problem
    prob = LpProblem("TeamOptimization", LpMaximize)

    # Create binary decision variables for each player
    df['selected'] = LpVariable.dicts("Player", df.index, cat="Binary")

    # Objective function: Maximize total points
    prob += lpSum(df['predicted_points'] * df['selected'])

    # Cost constraint: Total cost should be less than max_cost
    prob += lpSum(df['now_cost'] * df['selected']) <= max_cost

    # Position constraints: Limit the number of players from each role
    prob += lpSum(df['selected'][df['position'] == 'GKP']) <= max_keepers
    prob += lpSum(df['selected'][df['position'] == 'DEF']) <= max_defenders
    prob += lpSum(df['selected'][df['position'] == 'MID']) <= max_midfielders
    prob += lpSum(df['selected'][df['position'] == 'FWD']) <= max_forwards

    # Solve the problem
    prob.solve()

    # Extract the selected players
    selected_players = df.loc[df['selected'].apply(lambda x: x.varValue) == 1]

    return selected_players
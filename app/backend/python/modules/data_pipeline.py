import requests
import json
import pandas as pd
from data_processing import find_path

# Function to initialize the map of names to ids
def initialize_map():

    df = pd.read_csv(find_path())

    # Select only 'player_id' and 'player_name' columns
    player_names_and_ids_df = df[['id', 'name']]
    nametoid = player_names_and_ids_df.set_index('name')['id'].to_dict()

    return nametoid


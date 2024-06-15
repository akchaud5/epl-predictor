from flask_sqlalchemy import SQLAlchemy
import os
import pandas as pd

db = SQLAlchemy()

# Player class
class Player(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    now_cost = db.Column(db.Integer, nullable=True)
    position = db.Column(db.String(10), nullable=True)
    team = db.Column(db.String(40), nullable=True)
    clean_sheets_per_90 = db.Column(db.Float, nullable=True)
    threat_rank_type = db.Column(db.Integer, nullable=True)
    expected_assists_per_90 = db.Column(db.Float, nullable=True)
    expected_assists = db.Column(db.Float, nullable=True)
    points_per_game_rank = db.Column(db.Integer, nullable=True)
    goals_scored = db.Column(db.Integer, nullable=True)
    penalties_missed = db.Column(db.Integer, nullable=True)
    creativity_rank_type = db.Column(db.Integer, nullable=True)
    transfers_out = db.Column(db.Integer, nullable=True)
    value_form = db.Column(db.Float, nullable=True)
    direct_freekicks_order = db.Column(db.Integer, nullable=True)
    value_season = db.Column(db.Float, nullable=True)
    bonus = db.Column(db.Integer, nullable=True)
    starts_per_90 = db.Column(db.Float, nullable=True)
    cost_change_start = db.Column(db.Float, nullable=True)
    news_added = db.Column(db.String(255), nullable=True)
    expected_goals_conceded = db.Column(db.Float, nullable=True)
    cost_change_start_fall = db.Column(db.Float, nullable=True)
    expected_goals_conceded_per_90 = db.Column(db.Float, nullable=True)
    red_cards = db.Column(db.Integer, nullable=True)
    threat = db.Column(db.Float, nullable=True)
    selected_rank_type = db.Column(db.Integer, nullable=True)
    influence = db.Column(db.Float, nullable=True)
    penalties_saved = db.Column(db.Integer, nullable=True)
    corners_and_indirect_freekicks_order = db.Column(db.Integer, nullable=True)
    ep_next = db.Column(db.Float, nullable=True)
    event_points = db.Column(db.Integer, nullable=True)
    web_name = db.Column(db.String(80), nullable=True)
    creativity = db.Column(db.Float, nullable=True)
    ict_index_rank = db.Column(db.Integer, nullable=True)
    saves_per_90 = db.Column(db.Float, nullable=True)
    creativity_rank = db.Column(db.Integer, nullable=True)
    expected_goals = db.Column(db.Float, nullable=True)
    own_goals = db.Column(db.Integer, nullable=True)
    status = db.Column(db.String(20), nullable=True)
    now_cost_rank_type = db.Column(db.Integer, nullable=True)
    saves = db.Column(db.Integer, nullable=True)
    yellow_cards = db.Column(db.Integer, nullable=True)
    goals_conceded = db.Column(db.Integer, nullable=True)
    news = db.Column(db.String(255), nullable=True)
    expected_goal_involvements_per_90 = db.Column(db.Float, nullable=True)
    assists = db.Column(db.Integer, nullable=True)
    form_rank_type = db.Column(db.Integer, nullable=True)
    ict_index_rank_type = db.Column(db.Integer, nullable=True)
    chance_of_playing_next_round = db.Column(db.Integer, nullable=True)
    influence_rank = db.Column(db.Integer, nullable=True)
    penalties_order = db.Column(db.Integer, nullable=True)
    ict_index = db.Column(db.Float, nullable=True)
    form = db.Column(db.Float, nullable=True)
    dreamteam_count = db.Column(db.Integer, nullable=True)
    expected_goal_involvements = db.Column(db.Float, nullable=True)
    chance_of_playing_this_round = db.Column(db.Integer, nullable=True)
    starts = db.Column(db.Integer, nullable=True)
    points_per_game = db.Column(db.Float, nullable=True)
    minutes = db.Column(db.Integer, nullable=True)
    total_points = db.Column(db.Integer, nullable=True)
    in_dreamteam = db.Column(db.Boolean, nullable=True)
    form_rank = db.Column(db.Integer, nullable=True)
    selected_rank = db.Column(db.Integer, nullable=True)
    expected_goals_per_90 = db.Column(db.Float, nullable=True)
    threat_rank = db.Column(db.Integer, nullable=True)
    ep_this = db.Column(db.Float, nullable=True)
    transfers_in = db.Column(db.Integer, nullable=True)
    bps = db.Column(db.Integer, nullable=True)
    goals_conceded_per_90 = db.Column(db.Float, nullable=True)
    selected_by_percent = db.Column(db.Float, nullable=True)
    influence_rank_type = db.Column(db.Integer, nullable=True)
    points_per_game_rank_type = db.Column(db.Integer, nullable=True)
    clean_sheets = db.Column(db.Integer, nullable=True)
    now_cost_rank = db.Column(db.Integer, nullable=True)

# Function to populate the database
def populate_database(csv_file_path):
    
    # Load the CSV file
    players_df = pd.read_csv(csv_file_path)

    # Iterate through the DataFrame and add each player to the database
    for index, row in players_df.iterrows():
        player = Player(
            name=row['name'],
            team=row['team'] if 'team' in row and pd.notnull(row['team']) else None,
            position=row['position'] if 'position' in row and pd.notnull(row['position']) else None
        )
        db.session.add(player)

    # Commit the changes
    db.session.commit()

# Function to initialize the Flask app with SQL Alchemy
def init_app(app):
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL').replace("postgres://", "postgresql://", 1)
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)

    with app.app_context():
        db.create_all()

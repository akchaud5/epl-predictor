import requests
import os

key1 = os.getenv('SPORTRADAR_API_KEY')
key2 = os.getenv('SPORTRADAR_IMAGE_API_KEY')

# Function to get the manifest for the player images
def get_manifest_json():

    # Parameters for the search
    sport = "soccer"
    access_level = "t"
    version = "3"
    provider = "reuters"
    league = "epl"
    image_type = "headshots"
    year = "2024"
    format = "json"
    your_api_key = key1
    manifest_search_url = f"https://api.sportradar.us/{sport}-images-{access_level}{version}/{provider}/{league}/{image_type}/players/{year}/manifest.{format}?api_key={your_api_key}"

    try:
        # Make a request to the image search API
        response = requests.get(manifest_search_url)
        response.raise_for_status()  # Raise an exception for HTTP errors
        image_results = response.json()

        # Extract image URLs from the API response
        image_urls = [result["url"] for result in image_results["results"]]
        print(image_urls)
        return image_urls

    except requests.RequestException as e:
        print(f"Error fetching image URLs: {e}")
        return []

# Unfinished function to get the image urls given the player names

def get_image_urls(top_players):
    
    image_urls = []
    sport = "soccer"
    access_level = ""
    version = "3"
    provider = "reuters"
    league = "epl"
    image_type = "headshots"
    format = "json"
    asset_id = ""
    file_name = ""
    your_api_key = key2
    imagesearchurl = f"https://api.sportradar.us/{sport}-images-{access_level}{version}/{provider}/{league}/{image_type}/players/{asset_id}/{file_name}.{format}?api_key={your_api_key}"

    for i in range(len(top_players)):

        # Utilize the player name to generate the necessary information

        # Update the image search url based on that information

        image_urls.append(imagesearchurl.format(asset_id=""))

    return image_urls
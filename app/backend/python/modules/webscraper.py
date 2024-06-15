import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin
import wikipediaapi
from IPython.display import display, Image
from PIL import Image as PILImage
from io import BytesIO

"""
This code is intended to only be used in a safe, appropriate, ethical, and legal manner.
This code is not intended to violate Wikipedia's Terms of Service or any laws.
This code is not intended to cause any harm.

By using this code, you agree to use this code appropriately, responsibly, and in accordance with the law.
"""

# Function to webscrape the player images from Wikipedia
def scrape_images(player_name):

    # Construct Wikipedia URL
    player_name_formatted = player_name.replace(" ", "_")
    url = f"https://en.wikipedia.org/wiki/{player_name_formatted}"

    # Send a GET request
    response = requests.get(url)
    if response.status_code != 200:
        print("Failed to retrieve the webpage")
        return

    soup = BeautifulSoup(response.text, 'html.parser')
    images = soup.find_all('img')

    save_dir = f"./static/wikipedia_images/{player_name_formatted}"
    if not os.path.exists(save_dir):
        os.makedirs(save_dir)

    # Initialize a hashtable for the player's images
    player_images = {}

    for img in images:
        img_url = urljoin(url, img['src'])
        img_name = img_url.split("/")[-1]
        save_path = os.path.join(save_dir, img_name)

        # Download and save the image
        img_data = requests.get(img_url).content
        with open(save_path, 'wb') as file:
            file.write(img_data)

        print(f"Downloaded {img_name}")

        # Add the save path to the hashtable
        if player_name not in player_images.keys():
            player_images[player_name] = [save_path]
        else:
            player_images[player_name].append(save_path)


    return player_images



# Set up Wikipedia API
wiki_lang = "en"
wiki = wikipediaapi.Wikipedia(wiki_lang)

# Function to parse a Wikipedia page
def page_parser(response):

    # Parse the HTML content
    soup = BeautifulSoup(response.text, 'html.parser')
        
    # Extract the article title
    title = soup.find('h1', {'id': 'firstHeading'}).text
        
    # Extract the table of contents
    tableofcontents = soup.find('div', {'id': 'toc'})
        
    # Extract the article content
    content_div = soup.find('div', {'id': 'mw-content-text'})
    content_paragraphs = content_div.find_all('p')
    content = '\n'.join(p.text for p in content_paragraphs)
        
    # Extract the tables 
    tables = soup.find_all('table', {'class': 'wikitable'})
        
    # Extra the graphs
    graphs = soup.find_all('div', {'class': 'chart-container'})

    # Extract the last modified date
    last_modified = soup.find('li', {'id': 'footer-info-lastmod'}).text
        
    # Extract the authors (contributors) - this information is not directly available on the page,
    # but you can provide a link to the contributors' list.
    contributors = url.replace('/wiki/', '/w/index.php?title=') + '&action=history'
    
    # Find all the image tags
    image_tags = soup.find_all('img')
        
    return {
        'title': title,
        'content': content,
        'last_modified': last_modified,
        'contributors': contributors,
        'toc': tableofcontents,
        'tables': tables,
        'graphs': graphs,
        'image_tags': image_tags,
    }

# Function to collect images
def image_collector(article_data):
    counter = 0
    # Download and display the images
    for img_tag in article_data['image_tags']:
        if counter == 3:
            break
        img_url = 'https:' + img_tag['src']
        try:
            response = requests.get(img_url)
            img = PILImage.open(BytesIO(response.content))
            img.verify()  # Verify that the image is valid
            if counter < 3:
                display(Image(url=img_url))
                counter += 1
        except Exception as e:
            pass

# Function to format tables
def table_format(table):
    
    if table:
        rows = table.find_all('tr')
    
        # Initialize the column widths using the first row
        header_cells = rows[0].find_all(['th', 'td'])
        num_columns = len(header_cells)
        column_widths = [len(cell.get_text(strip=True)) for cell in header_cells]
            # Iterate over the rows to find the maximum width for each column
        for row in rows[1:]:
            cells = row.find_all(['th', 'td'])
            for i, cell in enumerate(cells):
                cell_value = cell.get_text(strip=True)
                if i < len(column_widths):
                    column_widths[i] = max(len(cell.get_text(strip=True)), column_widths[i])

        # Add some padding to each column width
        column_widths = [width + 1 for width in column_widths]

        # Create a format string based on the column widths
        format_string = ' '.join([f'{{:<{width}}}' for width in column_widths])

        # Iterate over the rows and display the formatted output
        for row in rows:
            cells = row.find_all(['th', 'td'])
            cell_values = [cell.get_text(strip=True) for cell in cells]

            # Extend the cell_values list to the required number of columns with empty strings
            cell_values.extend([''] * (num_columns - len(cell_values)))

            formatted_row = format_string.format(*cell_values)
            print(formatted_row)
    else:
        print("No table found")

# Function to webscrape Wikipedia
def wikipedia_scraper(url):
    if wiki.page(url).exists():
        return page_parser(wiki.page(url))
    
    # Send a GET request to the URL
    response = requests.get(url)
    
    # Check if the request was successful
    if response.status_code == 200:
        return page_parser(response)
    else:
        print(f"Error: Request to {url} returned status code {response.status_code}")
        return None

# Function to gather a Wikipedia URL and webscrape the page
def prompt():
    # Example usage:
    print("Enter a valid Wikipedia URL\n")
    url = input()

    # Calling the Wikipedia Scraper function
    article_data = wikipedia_scraper(url)

    # Check if a valid article is found
    if article_data:
        
        # Calling the Image display function
        image_collector(article_data)
        
    
        print("Title:", article_data['title'])
        
        if article_data['toc']:
            print(article_data['toc'].get_text())
            
        print("Content:", article_data['content'])
        
        print("Last Modified:", article_data['last_modified'])
        
        print("Contributors:", article_data['contributors'])
        
        if article_data['tables']:
            print("Tables:")
            for idx, table in enumerate(article_data['tables']):
                print(f"Table {idx + 1}:")
                table_format(table)
                    
        if article_data['graphs']:
            print("Graphs:")
            for idx, graph in enumerate(article_data['graphs']):
                print(f"Graph {idx + 1}:")
                print(graph.get_text())
        
        
    else:
        print("Valid article not found. Please try a different URL.")
'''Simple script to generate the stat maps displayed on the JSys website
'''

import os
import plotly.express as px
import pandas as pd
import numpy as np

# Load the country database
df = pd.read_csv('country-codes.csv', index_col='Country')

# Load the authors database
author_file = 'Authors da f917d.csv'
columns = [
    'Name',
    'Country',
]
df_authors = pd.read_csv(author_file, usecols=columns)

# Computes the counts per country
df_counts = df_authors.groupby('Country').count()
df_counts.rename(columns={'Name':'Count'}, inplace=True)

# Merge the two
df_final = df.merge(df_counts, right_index=True, left_on='Country', how='inner')
df_final.reset_index(inplace=True)
df_final.rename(columns={'continent':'Continent'}, inplace=True)

# Generate and save the map
fig = px.scatter_geo(df_final, locations="ISO-3", color="Sub-region",
                     hover_name="Country", size="Count",
                     projection="natural earth",
                    size_max=30)
fig.write_html('author_map.html')
# .. move it to the _include folder
os.rename('author_map.html', '../_includes/author_map.html')
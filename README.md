# Recruit Insight: Intelligent Recruitment Data Analysis Platform
## Overview
Recruit Insight harnesses the power of big data from the internet to provide intelligent analytics for recruitment data. By seamlessly integrating state-of-the-art web scraping, data cleansing, big data analytics, and visualization tools, it offers insightful charts and reports to help companies make informed recruitment decisions.

## Key Features
- Web Scraping with Scrapy: Actively collects job postings from top job boards to ensure a broad and updated dataset.
- Data Standardization: Normalizes the acquired recruitment data to ensure consistency across various platforms.
- Data Cleansing: Uses sophisticated algorithms to filter and cleanse the dataset, including:
  - Removing records with empty job titles.
  - Adjusting data that falls outside predefined ranges by assigning a valid random value from a predefined dictionary.
  - Identifying and deleting duplicate entries.
- Big Data Processing with Spark: Executes fast, parallel computations on the cleaned dataset to derive multifaceted insights.
- Database Storage: Efficiently stores the processed insights in a MySQL database, ensuring quick retrieval for detailed data queries.
- Visualization with Echarts: Presents the insights through clear and interactive charts, enabling users to comprehend complex data at a glance.

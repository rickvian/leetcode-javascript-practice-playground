# LeetCode Problem Scraper

A Python project to fetch and parse LeetCode problems using LeetCode's GraphQL API.

## Overview

This project provides tools to:
- **Fetch LeetCode problems** from the LeetCode GraphQL API in bulk
- **Parse and format** problem data into readable formats
- **Organize problems** by category and difficulty

## Files

- **`fetch_problems.py`** - Main script that fetches all LeetCode problems from the GraphQL API. Uses pagination to retrieve complete problem data including titles, difficulty levels, topic tags, and acceptance rates.

- **`parse_questions.py`** - Parses the Blind 75 LeetCode problem list and formats it into a sorted, human-readable text file.

- **`leetcode_problems.json`** - Output file containing all fetched LeetCode problems in JSON format.

- **`blind_75.json`** - Raw data for the Blind 75 problem list.

- **`blind_75_formatted.txt`** - Formatted version of the Blind 75 problems, sorted by problem ID.

- **`structuresample.json`** - Sample structure reference for problem data.

## Usage

### Fetch All Problems

```bash
python fetch_problems.py
```

This will:
1. Query LeetCode's GraphQL API for all problems
2. Handle pagination automatically
3. Save results to `leetcode_problems.json`

**Note:** Requires valid LeetCode session cookies. Update `COOKIES` in the script with your credentials.

### Parse Blind 75

```bash
python parse_questions.py
```

This will:
1. Read `blind_75.json`
2. Format and sort problems by ID
3. Output to `blind_75_formatted.txt`

## Requirements

- Python 3.x
- `requests` library (for API calls)

Install dependencies:
```bash
pip install requests
```

## Data Structure

Problems include:
- Problem ID and title
- Difficulty level
- Topic tags
- Acceptance rate
- Payment status (free/premium)
- Contest points

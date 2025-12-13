import requests
import json
import os

# Configuration
GITHUB_USERNAME = "ujjwalVishwakarma2006"
LEETCODE_USERNAME = "ujjwalVishwakarma2006"
CODEFORCES_HANDLE = "2023ucs0116"
DATA_FILE_PATH = "src/data/portfolioData.json"

def get_github_stats(username):
    try:
        response = requests.get(f"https://api.github.com/users/{username}")
        if response.status_code == 200:
            data = response.json()
            return data['public_repos']
    except Exception as e:
        print(f"Error fetching GitHub stats: {e}")
    return None

def get_leetcode_stats(username):
    try:
        query = """
        query getUserProfile($username: String!) {
            matchedUser(username: $username) {
                submitStats {
                    acSubmissionNum {
                        difficulty
                        count
                    }
                }
            }
        }
        """
        response = requests.post('https://leetcode.com/graphql', 
                                 json={'query': query, 'variables': {'username': username}})
        if response.status_code == 200:
            data = response.json()
            # The first element usually contains 'All' difficulty count
            return data['data']['matchedUser']['submitStats']['acSubmissionNum'][0]['count']
    except Exception as e:
        print(f"Error fetching LeetCode stats: {e}")
    return None

def get_codeforces_stats(handle):
    try:
        response = requests.get(f"https://codeforces.com/api/user.info?handles={handle}")
        if response.status_code == 200:
            data = response.json()
            if data['status'] == 'OK':
                user_info = data['result'][0]
                # Return rank (e.g., "newbie", "pupil") or rating
                return {
                    'rating': user_info.get('rating', 0),
                    'rank': user_info.get('rank', 'unrated').capitalize()
                }
    except Exception as e:
        print(f"Error fetching Codeforces stats: {e}")
    return None

def update_portfolio_data():
    # Read existing data
    try:
        with open(DATA_FILE_PATH, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except FileNotFoundError:
        print(f"Error: {DATA_FILE_PATH} not found.")
        return

    # Fetch new stats
    print("Fetching GitHub stats...")
    github_repos = get_github_stats(GITHUB_USERNAME)
    
    print("Fetching LeetCode stats...")
    leetcode_solved = get_leetcode_stats(LEETCODE_USERNAME)
    
    print("Fetching Codeforces stats...")
    cf_stats = get_codeforces_stats(CODEFORCES_HANDLE)

    # Update Data Structure
    # 1. Update socialProfiles
    if 'socialProfiles' in data:
        for profile in data['socialProfiles']:
            if profile['name'] == 'GitHub' and github_repos is not None:
                profile['stats'] = f"{github_repos}+ repositories"
            elif profile['name'] == 'LeetCode' and leetcode_solved is not None:
                profile['stats'] = f"{leetcode_solved}+ problems solved"
            elif profile['name'] == 'Codeforces' and cf_stats is not None:
                profile['stats'] = f"{cf_stats['rank']} ({cf_stats['rating']})"

    # 2. Update stats array (Quick Stats Section)
    if 'stats' in data:
        for stat in data['stats']:
            if stat['label'] == 'GitHub Repositories' and github_repos is not None:
                stat['value'] = f"{github_repos}+"
            elif stat['label'] == 'LeetCode Problems' and leetcode_solved is not None:
                stat['value'] = f"{leetcode_solved}+"

    # Write back to file
    with open(DATA_FILE_PATH, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)
    
    print("Portfolio data updated successfully!")

if __name__ == "__main__":
    update_portfolio_data()

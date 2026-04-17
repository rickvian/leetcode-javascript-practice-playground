import json
import time
import requests

GRAPHQL_URL = "https://leetcode.com/graphql/"

QUERY = """
    query problemsetQuestionListV2($filters: QuestionFilterInput, $limit: Int, $searchKeyword: String, $skip: Int, $sortBy: QuestionSortByInput, $categorySlug: String) {
  problemsetQuestionListV2(
    filters: $filters
    limit: $limit
    searchKeyword: $searchKeyword
    skip: $skip
    sortBy: $sortBy
    categorySlug: $categorySlug
  ) {
    questions {
      id
      titleSlug
      title
      translatedTitle
      questionFrontendId
      paidOnly
      difficulty
      topicTags {
        name
        slug
        nameTranslated
      }
      status
      isInMyFavorites
      frequency
      acRate
      contestPoint
    }
    totalLength
    finishedLength
    hasMore
  }
}
    """

FILTERS = {
    "filterCombineType": "ALL",
    "statusFilter": {"questionStatuses": [], "operator": "IS"},
    "difficultyFilter": {"difficulties": [], "operator": "IS"},
    "languageFilter": {"languageSlugs": [], "operator": "IS"},
    "topicFilter": {"topicSlugs": [], "operator": "IS"},
    "acceptanceFilter": {},
    "frequencyFilter": {},
    "frontendIdFilter": {},
    "lastSubmittedFilter": {},
    "publishedFilter": {},
    "companyFilter": {"companySlugs": [], "operator": "IS"},
    "positionFilter": {"positionSlugs": [], "operator": "IS"},
    "positionLevelFilter": {"positionLevelSlugs": [], "operator": "IS"},
    "contestPointFilter": {"contestPoints": [], "operator": "IS"},
    "premiumFilter": {"premiumStatus": [], "operator": "IS"},
}

HEADERS = {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/json",
    "origin": "https://leetcode.com",
    "referer": "https://leetcode.com/problemset/",
    "operation-name": "problemsetQuestionListV2",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36",
}

# Paste your cookies here from the browser (update if expired)
COOKIES = {
    "csrftoken": "e7NxGvYmOA8qEjjQbiESoLKz9zuf18y9",
    "LEETCODE_SESSION": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfYXV0aF91c2VyX2lkIjoiMjY5MzA1NiIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImFsbGF1dGguYWNjb3VudC5hdXRoX2JhY2tlbmRzLkF1dGhlbnRpY2F0aW9uQmFja2VuZCIsIl9hdXRoX3VzZXJfaGFzaCI6ImVhMGRkNWZmNzNmMDc5ZGVmZTlhNWMyZGQ5MzE2NTI5YWUwMTBlMjk5ZTQ3YjgyNDczNzI2NWE5ZTFhNmJjMWQiLCJzZXNzaW9uX3V1aWQiOiI1N2MwZDJkNiIsImlkIjoyNjkzMDU2LCJlbWFpbCI6InJpY2t2aWFuYWxkaUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6InJpY2t2aWFuYWxkaSIsInVzZXJfc2x1ZyI6InJpY2t2aWFuYWxkaSIsImF2YXRhciI6Imh0dHBzOi8vYXNzZXRzLmxlZXRjb2RlLmNvbS91c2Vycy9hdmF0YXJzL2F2YXRhcl8xNjkxMjMyMzgzLnBuZyIsInJlZnJlc2hlZF9hdCI6MTc3MzM4NDM5NSwiaXAiOiIyYTA5OmJhYzY6ZDY5ZjoyNWNkOjozYzQ6MTkiLCJpZGVudGl0eSI6ImI2MDcwZjk3ZGQ5OWZkMWExZjcyOTE1NmVmZDYxZTg5IiwiZGV2aWNlX3dpdGhfaXAiOlsiZjY4ODAzZjJiNDA5MWQ4ZGM2ZmQxZWEzYjg5OWJkMjAiLCIyYTA5OmJhYzY6ZDY5ZjoyNWNkOjozYzQ6MTkiXSwiX3Nlc3Npb25fZXhwaXJ5IjoxMjA5NjAwfQ.e1B5DjBPZ4qGRGTvZhhS8KGX_P0lfFVx0vyHTYOaAaA",
    "cf_clearance": "PO0EUWwY07D7gSqnOR58w.pMVqLPzedwQpG6ZkMB8LI-1773209473-1.2.1.1-X5lprvALr6hqbdWoNM_7H2Lh3nDmJI.CDMl9mpNrgAE1xbYydVflsni3FzKdOP.gNA2PLuw3afuCU86a8mA7kO8Ef8lGAofQXduC64jrARciMO6phfP_6wQIzwCze6dvggoSJP55LGi33x9reDev7HnHCYkXuD9RUd2wxpD5nImgmUG0Dup6OvVlIX7zfNLxdPJZRJjLvR5eZNZBTIryteU1H.xZkGuhBt0kYyR68FE",
}

EXTRA_HEADERS = {
    "x-csrftoken": COOKIES["csrftoken"],
}


def build_payload(skip: int, limit: int = 100) -> dict:
    return {
        "query": QUERY,
        "variables": {
            "skip": skip,
            "limit": limit,
            "categorySlug": "all-code-essentials",
            "filters": FILTERS,
            "searchKeyword": "",
            "sortBy": {"sortField": "CUSTOM", "sortOrder": "ASCENDING"},
            "filtersV2": FILTERS,
        },
        "operationName": "problemsetQuestionListV2",
    }


def fetch_all_problems():
    all_questions = []
    skip = 0
    limit = 100
    page = 1

    while True:
        payload = build_payload(skip, limit)
        print(f"Fetching page {page} (skip={skip})...")

        resp = requests.post(
            GRAPHQL_URL,
            headers={**HEADERS, **EXTRA_HEADERS},
            cookies=COOKIES,
            json=payload,
        )

        if resp.status_code != 200:
            print(f"Error: HTTP {resp.status_code}")
            print(resp.text[:500])
            break

        data = resp.json()
        result = data.get("data", {}).get("problemsetQuestionListV2", {})
        questions = result.get("questions", [])
        has_more = result.get("hasMore", False)
        total = result.get("totalLength", "?")

        all_questions.extend(questions)
        print(f"  Got {len(questions)} questions. Total so far: {len(all_questions)}/{total}")

        if not has_more:
            print("No more pages.")
            break

        skip += limit
        page += 1
        time.sleep(1)  # be polite, avoid rate limiting

    return all_questions


def main():
    questions = fetch_all_problems()
    output = {
        "totalQuestions": len(questions),
        "questions": questions,
    }

    output_file = "leetcode_problems.json"
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(output, f, indent=2, ensure_ascii=False)

    print(f"\nDone! Saved {len(questions)} problems to {output_file}")


if __name__ == "__main__":
    main()

import json
import os

def process_leetcode_json(input_file, output_file):
    if not os.path.exists(input_file):
        print(f"Error: {input_file} not found.")
        return

    with open(input_file, 'r') as f:
        data = json.load(f)

    questions = []
    
    # Extract questions from all sub-groups
    plan_sub_groups = data.get('data', {}).get('studyPlanV2Detail', {}).get('planSubGroups', [])
    for group in plan_sub_groups:
        for q in group.get('questions', []):
            qid = q.get('questionFrontendId')
            title = q.get('title')
            if qid and title:
                # Format ID to 4 digits and title to lowercase (matching user example)
                formatted_id = qid.zfill(4)
                formatted_title = title.lower()
                questions.append((int(qid), f"{formatted_id} - {formatted_title}"))

    # Sort by question number
    questions.sort(key=lambda x: x[0])

    # Write to file
    os.makedirs(os.path.dirname(output_file), exist_ok=True)
    with open(output_file, 'w') as f:
        for _, line in questions:
            f.write(line + '\n')

    print(f"Successfully processed {len(questions)} questions into {output_file}")

if __name__ == "__main__":
    input_path = "requests/top_75_leetcode_response.json"
    output_path = "processedList/top_75_formatted.txt"
    process_leetcode_json(input_path, output_path)

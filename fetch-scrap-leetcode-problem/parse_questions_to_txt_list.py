import json

# Read the input JSON file
with open('blind_75.json', 'r') as f:
    data = json.load(f)

# Extract questions
questions = data['data']['favoriteQuestionList']['questions']

# Create formatted list
formatted_lines = []
for question in questions:
    question_id = question['questionFrontendId'].zfill(4)
    title = question['title'].lower()
    formatted_lines.append(f"{question_id} - {title}")

# Sort by ID
formatted_lines.sort()

# Write to output file
with open('blind_75_formatted.txt', 'w') as f:
    f.write('\n'.join(formatted_lines))

print(f"✓ Parsed {len(formatted_lines)} questions")
print(f"✓ Output saved to: blind_75_formatted.txt")
print("\nFirst 5 entries:")
for line in formatted_lines[:5]:
    print(line)

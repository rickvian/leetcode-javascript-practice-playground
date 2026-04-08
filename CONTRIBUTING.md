# Contributing to JS LeetCode Practice Playground

First off, thank you for considering contributing! It's people like you that make this playground a great resource for everyone.

## How Can I Contribute?

### 1. Adding New Problems
If you find a LeetCode problem that isn't here yet:
1. Create a new file in `leetcode-playground/` following the naming convention: `[problem-number]-[problem-name].js`.
2. Add the problem description as a comment at the top.
3. Export your solution function.

### 2. Adding or Improving Test Cases
We love more test cases!
1. Go to `leetcode-playground/tests/`.
2. Find the corresponding `.test.js` file (or create one if it doesn't exist).
3. Add new test scenarios to ensure solutions are robust.
4. We use **Vitest** for testing.

### 3. Reporting Bugs
If you find a bug in an existing solution or test case, please open an issue or submit a pull request with the fix.

## Development Workflow

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run tests**:
   ```bash
   # Run all tests
   npm run test

   # Run tests in watch mode
   npm run test:watch

   # Run a specific test
   npx vitest tests/0001-two-sum.test.js
   ```

## Coding Guidelines
- Be clear and concise with your code.
- Use meaningful variable names.
- Ensure all tests pass before submitting your contribution.

Happy coding!

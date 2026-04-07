# Claude Code Guidelines

## Important Note

This is playground repository, please provide test case only unless prompted to provide solution, solution should not be provided.
leave the solution empty with // implement

## Module Type Configuration

All JavaScript files and tests in this project use **ES Modules (ESM)** as specified in `package.json`:
```json
"type": "module"
```

### Guidelines for the Agent
1. **All imports**: Use ES Module syntax (`import`/`export`) instead of CommonJS (`require`/`module.exports`)
2. **All tests**: Must be written as ES Modules with proper import statements
3. **All JS files**: Must use ES Module syntax
4. **Test files**: Use `.test.js` extension and import the modules being tested as ES Modules
5. test case:
- Adversarial Edge Cases: You must include tests for the following "hidden" scenarios:
- Empty/Minimum: Empty strings "", empty arrays [], or single-element inputs.
- Type Nuance: Handling null, undefined, and unexpected data types.
- Whitespace: Leading, trailing, and internal whitespace (tabs, newlines).
- Repetitive Data: Long sequences of identical characters/values.
- Range Limits: Inputs at the exact threshold of defined constraints (e.g., first and last indices).
- No Happy-Path Bias: Do not just test "clean" inputs; generate cases specifically designed to trigger off-by-one errors or null-pointer exceptions.
6. if the js placeholder files not exist, generate it.

### Examples

✅ Correct (ES Modules):
```javascript
// test file
import { addTwoNumbers } from '../index.js';
import { describe, it, expect } from '@jest/globals';

describe('addTwoNumbers', () => {
  it('should add two numbers', () => {
    expect(addTwoNumbers(2, 3)).toBe(5);
  });
});
```

❌ Incorrect (CommonJS):
```javascript
const { addTwoNumbers } = require('../index.js');
const { describe, it, expect } = require('@jest/globals');
```

### Jest Configuration

Jest is configured to work with ES Modules. When writing tests:
- Always import test utilities from `@jest/globals` if needed
- Do not use `require()` or CommonJS syntax
- Jest will handle the module resolution automatically


## Creating New Problems

### File Structure

```
leetcode-playground/
├── NNNN-problem-name.js          # Problem solution
└── tests/
    └── NNNN-problem-name.test.js  # Jest test file
```

### Problem File Format

**File:** `leetcode-playground/NNNN-problem-name.js`

```javascript
/**
 * Problem description from LeetCode (1-2 sentences)
 *
 * https://leetcode.com/problems/problem-slug/description/
 * 
 * @param {type} paramName - Description
 * @return {type}
 */
var functionName = function(param1, param2) {
    // Solution implementation
};

export { functionName }
```

**Requirements:**
1. **Numbering**: Start filename with 4-digit problem number (e.g., `0001`, `0002`)
2. **Naming**: Use kebab-case for problem name (e.g., `two-sum`, `add-two-numbers`)
3. **JSDoc Header**: Include problem description, **LeetCode URL**, @param and @return tags
4. **Function**: Named function using camelCase
5. **Export**: Use ES Module syntax: `export { functionName }`

### Test File Format

**File:** `leetcode-playground/tests/NNNN-problem-name.test.js`

```javascript
import { functionName } from '../NNNN-problem-name';

describe('NNNN-problem-name', () => {
    it('should handle test case 1', () => {
        expect(functionName(input1)).toEqual(expectedOutput1);
    });

    it('should handle test case 2', () => {
        expect(functionName(input2)).toEqual(expectedOutput2);
    });
});
```

**Requirements:**
1. **Import**: Use ES Module syntax
2. **Describe Block**: Name matches problem filename (e.g., `'0001-two-sum'`)
3. **Test Cases**: Include at least 2-3 meaningful test cases
4. **Clear Descriptions**: Use descriptive test names

### Steps to Create a New Problem

1. Find problem on LeetCode and note: number, name, description, parameter types, return type
2. Create problem file: `leetcode-playground/NNNN-problem-name.js` with JSDoc and LeetCode link
3. Implement the solution using ES Module syntax
4. Create test file: `leetcode-playground/tests/NNNN-problem-name.test.js`
5. Run tests: `npm test` or `npm run test:watch`
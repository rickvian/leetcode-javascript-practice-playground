# Technical Interview Thought Process Template

## I. Phase 1: Before Writing Code (Strategic Planning)
*The goal is to eliminate ambiguity and prevent "logic-locking" mid-way through implementation.*

### 1. Clarify Constraints and Inputs
- **Data Types:** What are the input types? (e.g., Integer, String, Linked List)
- **Bounds:** Can the input be empty, null, or extremely large? Are there negative numbers?
- **Output:** What exactly should be returned? (e.g., Boolean, Index, New Array)
- **Constraints:** Is there a time or space complexity requirement (e.g., O(n log n), O(1) extra space)?

### 2. Discuss Edge Cases
- Empty collections (`[]`, `""`).
- Single element inputs.
- Inputs with all identical values.
- Extreme values (Integer MAX/MIN).

### 3. State the Brute Force
- Briefly describe the "naive" solution. This demonstrates you understand the problem baseline and ensures you have a fallback if the optimal solution is too complex.

### 4. Propose an Optimized Approach
- **Data Structure:** State which one you will use (e.g., "I'll use a Hash Map for O(1) lookup").
- **Algorithm:** Define the technique (e.g., Two Pointers, Sliding Window, DFS).
- **Complexity:** State the Big O for Time and Space *before* typing.

### 5. Dry Run Logic (Mental or Pseudo)
- Walk through a small example manually to ensure the logic holds before committing to syntax.

---

## II. Phase 2: After Coding (Post-Implementation Review)
*Focus on syntax precision and logical flow immediately after finishing.*

- **Variable Consistency:** Are names descriptive? Are you reusing variables incorrectly?
- **Loop Boundaries:** Check `i < length` vs `i <= length`. Did you start at `0` or `1`?
- **Return Statement:** Is the function actually returning the final result, or just a partial state?
- **Language Specifics:** - JavaScript: Did you use `let`/`const` correctly? 
    - Python: Is the indentation correct for nested blocks?

---

## III. Phase 3: Before Submit (The Quality Audit)
*Re-read the code for common "gotchas" and silent killers.*

### 1. The "for..in" vs "for..of" Check
- **`for..in`**: Iterates over **Keys/Properties** (Strings). Best for Objects.
- **`for..of`**: Iterates over **Values**. Best for Arrays, Strings, Sets.
- *Mistake:* Using `for..in` on an array and expecting the element instead of the index.

### 2. Common Mistake Checklist
- **Equality:** Using `==` instead of `===` (Strict equality).
- **Initialization:** Did you initialize your accumulator (e.g., `let sum = 0`)?
- **Mutation:** Are you accidentally modifying the input array when you shouldn't?
- **Null Checks:** Does the code break if the input is `null`?

---

## IV. Phase 4: Debugging (Systematic Resolution)
*If the code fails, do not guess. Use a structured trace.*

1. **Isolate the Failure:** Which specific test case is failing? (e.g., "It fails on negative numbers").
2. **Trace Table:** Pick a simple input and track variable values line-by-line.

| Step | Variable A | Variable B | Condition (T/F) |
| :--- | :--- | :--- | :--- |
| 1 | 10 | 0 | True |
| 2 | 5 | 1 | False |

3. **Check Conditionals:** Are you handling "falsy" values correctly (`0`, `""`, `false`)?
4. **Base Case:** In recursion, is the base case reached, or is it causing a Stack Overflow?
5. **Print Debugging:** If allowed, insert `console.log` or `print` at the start of loops to see how data transforms.
import { scoreOfParentheses } from '../0856-score-of-parentheses.js';

describe('0856-score-of-parentheses', () => {
  it("scoreOfParentheses(\"\")", () => {
    const result = scoreOfParentheses("");
    expect(result).toEqual(0);
  });
});

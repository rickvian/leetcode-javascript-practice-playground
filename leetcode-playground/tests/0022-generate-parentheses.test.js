import { generateParenthesis } from '../0022-generate-parentheses.js';

describe('0022-generate-parentheses', () => {
  it("generateParenthesis(1)", () => {
    const result = generateParenthesis(1);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)));
    expect(sorted).toEqual(["()"]);
  });

  it("generateParenthesis(2)", () => {
    const result = generateParenthesis(2);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)));
    expect(sorted).toEqual(["(())", "()()"]);
  });

  it("generateParenthesis(3)", () => {
    const result = generateParenthesis(3);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)));
    expect(sorted).toEqual(["((()))", "(()())", "(())()", "()(())", "()()()"]);
  });

  it("generateParenthesis(4)", () => {
    const result = generateParenthesis(4);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)));
    expect(sorted).toEqual(["(((())))", "((()()))", "((())())", "((()))()", "(()(()))", "(()()())", "(()())()", "(())(())", "(())()()", "()((()))", "()(()())", "()(())()", "()()(())", "()()()()"]);
  });

  it("generateParenthesis(0)", () => {
    const result = generateParenthesis(0);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)));
    expect(sorted).toEqual([""]);
  });
});

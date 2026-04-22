import { letterCombinations } from '../0017-letter-combinations-of-a-phone-number.js';

describe('0017-letter-combinations-of-a-phone-number', () => {
  it("letterCombinations(\"\")", () => {
    const result = letterCombinations("");
    const sorted = [...result].sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)));
    expect(sorted).toEqual([]);
  });
});

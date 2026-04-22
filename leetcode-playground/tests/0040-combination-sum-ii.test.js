import { combinationSum2 } from '../0040-combination-sum-ii.js';

describe('0040-combination-sum-ii', () => {
  it("combinationSum2([2, 7, 11, 15], 9)", () => {
    const result = combinationSum2([2, 7, 11, 15], 9);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)));
    expect(sorted).toEqual([[2, 7]]);
  });

  it("combinationSum2([2, 3, 4], 6)", () => {
    const result = combinationSum2([2, 3, 4], 6);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)));
    expect(sorted).toEqual([[2, 4]]);
  });

  it("combinationSum2([3, 3], 6)", () => {
    const result = combinationSum2([3, 3], 6);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)));
    expect(sorted).toEqual([[3, 3]]);
  });

  it("combinationSum2([-5, -4, -3, -2, -1], -8)", () => {
    const result = combinationSum2([-5, -4, -3, -2, -1], -8);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)));
    expect(sorted).toEqual([]);
  });

  it("combinationSum2([1, 2], 3)", () => {
    const result = combinationSum2([1, 2], 3);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)));
    expect(sorted).toEqual([[1, 2]]);
  });

  it("combinationSum2([0, 0, 3, 4], 0)", () => {
    const result = combinationSum2([0, 0, 3, 4], 0);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)));
    expect(sorted).toEqual([[]]);
  });
});

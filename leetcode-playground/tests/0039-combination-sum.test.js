import { combinationSum } from '../0039-combination-sum.js';

describe('0039-combination-sum', () => {
  it("combinationSum([2, 7, 11, 15], 9)", () => {
    const result = combinationSum([2, 7, 11, 15], 9);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)));
    expect(sorted).toEqual([[2, 7]]);
  });

  it("combinationSum([3, 2, 4], 6)", () => {
    const result = combinationSum([3, 2, 4], 6);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)));
    expect(sorted).toEqual([[2, 2, 2], [2, 4], [3, 3]]);
  });

  it("combinationSum([3, 3], 6)", () => {
    const result = combinationSum([3, 3], 6);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)));
    expect(sorted).toEqual([[3, 3], [3, 3], [3, 3]]);
  });

  it("combinationSum([-1, -2, -3, -4, -5], -8)", () => {
    const result = combinationSum([-1, -2, -3, -4, -5], -8);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)));
    expect(sorted).toEqual([]);
  });

  it("combinationSum([1, 2], 3)", () => {
    const result = combinationSum([1, 2], 3);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)));
    expect(sorted).toEqual([[1, 1, 1], [1, 2]]);
  });

  it("combinationSum([0, 4, 3, 0], 0)", () => {
    const result = combinationSum([0, 4, 3, 0], 0);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)));
    expect(sorted).toEqual([[]]);
  });
});

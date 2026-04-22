import { combinationSum3 } from '../0216-combination-sum-iii.js';

describe('0216-combination-sum-iii', () => {
  it("combinationSum3(1, 1)", () => {
    const result = combinationSum3(1, 1);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([[1]]);
  });

  it("combinationSum3(0, 0)", () => {
    const result = combinationSum3(0, 0);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([[]]);
  });

  it("combinationSum3(3, 7)", () => {
    const result = combinationSum3(3, 7);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([[1, 2, 4]]);
  });

  it("combinationSum3(100, 1000)", () => {
    const result = combinationSum3(100, 1000);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([]);
  });
});

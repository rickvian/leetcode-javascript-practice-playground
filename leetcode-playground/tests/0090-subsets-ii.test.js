import { subsetsWithDup } from '../0090-subsets-ii.js';

describe('0090-subsets-ii', () => {
  it("subsetsWithDup([1, 2, 3, 4, 5])", () => {
    const result = subsetsWithDup([1, 2, 3, 4, 5]);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([[1, 2, 3, 4, 5], [1, 2, 3, 4], [1, 2, 3, 5], [1, 2, 3], [1, 2, 4, 5], [1, 2, 4], [1, 2, 5], [1, 2], [1, 3, 4, 5], [1, 3, 4], [1, 3, 5], [1, 3], [1, 4, 5], [1, 4], [1, 5], [1], [2, 3, 4, 5], [2, 3, 4], [2, 3, 5], [2, 3], [2, 4, 5], [2, 4], [2, 5], [2], [3, 4, 5], [3, 4], [3, 5], [3], [4, 5], [4], [5], []]);
  });

  it("subsetsWithDup([])", () => {
    const result = subsetsWithDup([]);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([[]]);
  });

  it("subsetsWithDup([1])", () => {
    const result = subsetsWithDup([1]);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([[1], []]);
  });

  it("subsetsWithDup([1, 1])", () => {
    const result = subsetsWithDup([1, 1]);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([[1, 1], [1], []]);
  });

  it("subsetsWithDup([3, 1, 4, 1, 5])", () => {
    const result = subsetsWithDup([3, 1, 4, 1, 5]);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([[1, 1, 3, 4, 5], [1, 1, 3, 4], [1, 1, 3, 5], [1, 1, 3], [1, 1, 4, 5], [1, 1, 4], [1, 1, 5], [1, 1], [1, 3, 4, 5], [1, 3, 4], [1, 3, 5], [1, 3], [1, 4, 5], [1, 4], [1, 5], [1], [3, 4, 5], [3, 4], [3, 5], [3], [4, 5], [4], [5], []]);
  });

  it("subsetsWithDup([-1, 0, 1])", () => {
    const result = subsetsWithDup([-1, 0, 1]);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([[-1, 0, 1], [-1, 0], [-1, 1], [-1], [0, 1], [0], [1], []]);
  });
});

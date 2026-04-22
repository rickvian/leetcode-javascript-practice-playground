import { subsets } from '../0078-subsets.js';

describe('0078-subsets', () => {
  it("subsets([1, 2, 3, 4, 5])", () => {
    const result = subsets([1, 2, 3, 4, 5]);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([[1, 2, 3, 4, 5], [1, 2, 3, 4], [1, 2, 3, 5], [1, 2, 3], [1, 2, 4, 5], [1, 2, 4], [1, 2, 5], [1, 2], [1, 3, 4, 5], [1, 3, 4], [1, 3, 5], [1, 3], [1, 4, 5], [1, 4], [1, 5], [1], [2, 3, 4, 5], [2, 3, 4], [2, 3, 5], [2, 3], [2, 4, 5], [2, 4], [2, 5], [2], [3, 4, 5], [3, 4], [3, 5], [3], [4, 5], [4], [5], []]);
  });

  it("subsets([])", () => {
    const result = subsets([]);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([[]]);
  });

  it("subsets([1])", () => {
    const result = subsets([1]);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([[1], []]);
  });

  it("subsets([1, 1])", () => {
    const result = subsets([1, 1]);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([[1, 1], [1], [1], []]);
  });

  it("subsets([3, 1, 4, 1, 5])", () => {
    const result = subsets([3, 1, 4, 1, 5]);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([[1, 1, 3, 4, 5], [1, 1, 3, 4], [1, 1, 3, 5], [1, 1, 3], [1, 1, 4, 5], [1, 1, 4], [1, 1, 5], [1, 1], [1, 3, 4, 5], [1, 3, 4, 5], [1, 3, 4], [1, 3, 4], [1, 3, 5], [1, 3, 5], [1, 3], [1, 3], [1, 4, 5], [1, 4, 5], [1, 4], [1, 4], [1, 5], [1, 5], [1], [1], [3, 4, 5], [3, 4], [3, 5], [3], [4, 5], [4], [5], []]);
  });

  it("subsets([-1, 0, 1])", () => {
    const result = subsets([-1, 0, 1]);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([[-1, 0, 1], [-1, 0], [-1, 1], [-1], [0, 1], [0], [1], []]);
  });
});

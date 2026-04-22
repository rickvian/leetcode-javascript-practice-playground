import { combine } from '../0077-combinations.js';

describe('0077-combinations', () => {
  it("combine(4, 2)", () => {
    const result = combine(4, 2);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]);
  });

  it("combine(1, 1)", () => {
    const result = combine(1, 1);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([[1]]);
  });

  it("combine(5, 3)", () => {
    const result = combine(5, 3);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([[1, 2, 3], [1, 2, 4], [1, 2, 5], [1, 3, 4], [1, 3, 5], [1, 4, 5], [2, 3, 4], [2, 3, 5], [2, 4, 5], [3, 4, 5]]);
  });

  it("combine(3, 1)", () => {
    const result = combine(3, 1);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([[1], [2], [3]]);
  });

  it("combine(2, 2)", () => {
    const result = combine(2, 2);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([[1, 2]]);
  });

  it("combine(0, 0)", () => {
    const result = combine(0, 0);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([[]]);
  });
});

import { largestDivisibleSubset } from '../0368-largest-divisible-subset.js';

describe('0368-largest-divisible-subset', () => {
  it("largestDivisibleSubset([1, 2, 3, 4, 5])", () => {
    const result = largestDivisibleSubset([1, 2, 3, 4, 5]);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([1, 2, 4]);
  });

  it("largestDivisibleSubset([1])", () => {
    const result = largestDivisibleSubset([1]);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([1]);
  });

  it("largestDivisibleSubset([1, 1])", () => {
    const result = largestDivisibleSubset([1, 1]);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([1, 1]);
  });

  it("largestDivisibleSubset([3, 1, 4, 1, 5])", () => {
    const result = largestDivisibleSubset([3, 1, 4, 1, 5]);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([1, 1, 3]);
  });

  it("largestDivisibleSubset([-1, 0, 1])", () => {
    const result = largestDivisibleSubset([-1, 0, 1]);
    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)
                        .sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([-1, 0]);
  });
});

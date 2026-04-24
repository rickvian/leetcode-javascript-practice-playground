import { processQueries } from '../1409-queries-on-a-permutation-with-key.js';

describe('1409-queries-on-a-permutation-with-key', () => {
  it("processQueries([2, 7, 11, 15], 9)", () => {
    const result = processQueries([2, 7, 11, 15], 9);
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([-1, -1, 1, 6]);
  });

  it("processQueries([3, 2, 4], 6)", () => {
    const result = processQueries([3, 2, 4], 6);
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([2, 2, 3]);
  });

  it("processQueries([3, 3], 6)", () => {
    const result = processQueries([3, 3], 6);
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([0, 2]);
  });

  it("processQueries([-1, -2, -3, -4, -5], -8)", () => {
    const result = processQueries([-1, -2, -3, -4, -5], -8);
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([-1, -1, -1, -1, -1]);
  });

  it("processQueries([1, 2], 3)", () => {
    const result = processQueries([1, 2], 3);
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([0, 1]);
  });

  it("processQueries([0, 4, 3, 0], 0)", () => {
    const result = processQueries([0, 4, 3, 0], 0);
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([-1, -1, -1, -1]);
  });
});

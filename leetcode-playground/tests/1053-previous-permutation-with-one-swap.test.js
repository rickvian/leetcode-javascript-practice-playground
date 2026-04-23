import { prevPermOpt1 } from '../1053-previous-permutation-with-one-swap.js';

describe('1053-previous-permutation-with-one-swap', () => {
  it("prevPermOpt1([1, 2, 3, 4, 5])", () => {
    const result = prevPermOpt1([1, 2, 3, 4, 5]);
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([1, 2, 3, 4, 5]);
  });

  it("prevPermOpt1([])", () => {
    const result = prevPermOpt1([]);
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([]);
  });

  it("prevPermOpt1([1])", () => {
    const result = prevPermOpt1([1]);
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([1]);
  });

  it("prevPermOpt1([1, 1])", () => {
    const result = prevPermOpt1([1, 1]);
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([1, 1]);
  });

  it("prevPermOpt1([3, 1, 4, 1, 5])", () => {
    const result = prevPermOpt1([3, 1, 4, 1, 5]);
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([1, 1, 3, 4, 5]);
  });

  it("prevPermOpt1([-1, 0, 1])", () => {
    const result = prevPermOpt1([-1, 0, 1]);
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([-1, 0, 1]);
  });
});

import { rob } from '../0213-house-robber-ii.js';

describe('0213-house-robber-ii', () => {
  it("rob([1, 2, 3, 4, 5])", () => {
    const result = rob([1, 2, 3, 4, 5]);
    expect(result).toEqual(8);
  });

  it("rob([])", () => {
    const result = rob([]);
    expect(result).toEqual(0);
  });

  it("rob([1])", () => {
    const result = rob([1]);
    expect(result).toEqual(1);
  });

  it("rob([1, 1])", () => {
    const result = rob([1, 1]);
    expect(result).toEqual(1);
  });

  it("rob([3, 1, 4, 1, 5])", () => {
    const result = rob([3, 1, 4, 1, 5]);
    expect(result).toEqual(9);
  });

  it("rob([-1, 0, 1])", () => {
    const result = rob([-1, 0, 1]);
    expect(result).toEqual(1);
  });
});

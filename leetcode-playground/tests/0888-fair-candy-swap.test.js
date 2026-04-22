import { fairCandySwap } from '../0888-fair-candy-swap.js';

describe('0888-fair-candy-swap', () => {
  it("fairCandySwap([1], [1])", () => {
    const result = fairCandySwap([1], [1]);
    expect(result).toEqual([1, 1]);
  });

  it("fairCandySwap([1, 3], [2])", () => {
    const result = fairCandySwap([1, 3], [2]);
    expect(result).toEqual([3, 2]);
  });

  it("fairCandySwap([1, 2], [3, 4])", () => {
    const result = fairCandySwap([1, 2], [3, 4]);
    expect(result).toEqual([1, 3]);
  });
});

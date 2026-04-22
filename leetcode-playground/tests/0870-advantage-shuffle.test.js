import { advantageCount } from '../0870-advantage-shuffle.js';

describe('0870-advantage-shuffle', () => {
  it("advantageCount([1, 2, 3], [4, 5, 6])", () => {
    const result = advantageCount([1, 2, 3], [4, 5, 6]);
    expect(result).toEqual([3, 2, 1]);
  });

  it("advantageCount([1], [1])", () => {
    const result = advantageCount([1], [1]);
    expect(result).toEqual([1]);
  });

  it("advantageCount([1, 2], [3, 4])", () => {
    const result = advantageCount([1, 2], [3, 4]);
    expect(result).toEqual([2, 1]);
  });
});

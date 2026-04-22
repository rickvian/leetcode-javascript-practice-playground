import { insert } from '../0057-insert-interval.js';

describe('0057-insert-interval', () => {
  it("insert([[1, 3], [6, 9]], [2, 5])", () => {
    const result = insert([[1, 3], [6, 9]], [2, 5]);
    expect(result).toEqual([[1, 5], [6, 9]]);
  });

  it("insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])", () => {
    const result = insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]);
    expect(result).toEqual([[1, 2], [3, 10], [12, 16]]);
  });

  it("insert([], [5, 7])", () => {
    const result = insert([], [5, 7]);
    expect(result).toEqual([[5, 7]]);
  });

  it("insert([[1, 5]], [2, 3])", () => {
    const result = insert([[1, 5]], [2, 3]);
    expect(result).toEqual([[1, 5]]);
  });

  it("insert([[1, 5]], [6, 8])", () => {
    const result = insert([[1, 5]], [6, 8]);
    expect(result).toEqual([[1, 5], [6, 8]]);
  });
});

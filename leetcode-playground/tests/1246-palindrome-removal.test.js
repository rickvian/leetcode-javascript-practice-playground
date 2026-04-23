import { minimumMoves } from '../1246-palindrome-removal.js';

describe('1246-palindrome-removal', () => {
  it("minimumMoves([1, 2, 3, 4, 5])", () => {
    const result = minimumMoves([1, 2, 3, 4, 5]);
    expect(result).toEqual(5);
  });

  it("minimumMoves([1])", () => {
    const result = minimumMoves([1]);
    expect(result).toEqual(1);
  });

  it("minimumMoves([1, 1])", () => {
    const result = minimumMoves([1, 1]);
    expect(result).toEqual(1);
  });

  it("minimumMoves([3, 1, 4, 1, 5])", () => {
    const result = minimumMoves([3, 1, 4, 1, 5]);
    expect(result).toEqual(3);
  });

  it("minimumMoves([-1, 0, 1])", () => {
    const result = minimumMoves([-1, 0, 1]);
    expect(result).toEqual(3);
  });
});

import { longestWPI } from '../1124-longest-well-performing-interval.js';

describe('1124-longest-well-performing-interval', () => {
  it("longestWPI([1, 2, 3, 4, 5])", () => {
    const result = longestWPI([1, 2, 3, 4, 5]);
    expect(result).toEqual(0);
  });

  it("longestWPI([])", () => {
    const result = longestWPI([]);
    expect(result).toEqual(0);
  });

  it("longestWPI([1])", () => {
    const result = longestWPI([1]);
    expect(result).toEqual(0);
  });

  it("longestWPI([1, 1])", () => {
    const result = longestWPI([1, 1]);
    expect(result).toEqual(0);
  });

  it("longestWPI([3, 1, 4, 1, 5])", () => {
    const result = longestWPI([3, 1, 4, 1, 5]);
    expect(result).toEqual(0);
  });

  it("longestWPI([-1, 0, 1])", () => {
    const result = longestWPI([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});

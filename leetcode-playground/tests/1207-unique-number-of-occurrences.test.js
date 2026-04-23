import { uniqueOccurrences } from '../1207-unique-number-of-occurrences.js';

describe('1207-unique-number-of-occurrences', () => {
  it("uniqueOccurrences([1, 2, 3, 4, 5])", () => {
    const result = uniqueOccurrences([1, 2, 3, 4, 5]);
    expect(result).toEqual(false);
  });

  it("uniqueOccurrences([])", () => {
    const result = uniqueOccurrences([]);
    expect(result).toEqual(true);
  });

  it("uniqueOccurrences([1])", () => {
    const result = uniqueOccurrences([1]);
    expect(result).toEqual(true);
  });

  it("uniqueOccurrences([1, 1])", () => {
    const result = uniqueOccurrences([1, 1]);
    expect(result).toEqual(true);
  });

  it("uniqueOccurrences([3, 1, 4, 1, 5])", () => {
    const result = uniqueOccurrences([3, 1, 4, 1, 5]);
    expect(result).toEqual(false);
  });

  it("uniqueOccurrences([-1, 0, 1])", () => {
    const result = uniqueOccurrences([-1, 0, 1]);
    expect(result).toEqual(false);
  });
});

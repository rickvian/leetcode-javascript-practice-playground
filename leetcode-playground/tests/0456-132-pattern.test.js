import { find132pattern } from '../0456-132-pattern.js';

describe('0456-132-pattern', () => {
  it("find132pattern([1, 2, 3, 4, 5])", () => {
    const result = find132pattern([1, 2, 3, 4, 5]);
    expect(result).toEqual(false);
  });

  it("find132pattern([])", () => {
    const result = find132pattern([]);
    expect(result).toEqual(false);
  });

  it("find132pattern([1])", () => {
    const result = find132pattern([1]);
    expect(result).toEqual(false);
  });

  it("find132pattern([1, 1])", () => {
    const result = find132pattern([1, 1]);
    expect(result).toEqual(false);
  });

  it("find132pattern([3, 1, 4, 1, 5])", () => {
    const result = find132pattern([3, 1, 4, 1, 5]);
    expect(result).toEqual(false);
  });

  it("find132pattern([-1, 0, 1])", () => {
    const result = find132pattern([-1, 0, 1]);
    expect(result).toEqual(false);
  });
});

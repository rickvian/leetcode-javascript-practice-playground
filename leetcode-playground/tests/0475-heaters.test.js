import { findRadius } from '../0475-heaters.js';

describe('0475-heaters', () => {
  it("findRadius([1, 2, 3], [4, 5, 6])", () => {
    const result = findRadius([1, 2, 3], [4, 5, 6]);
    expect(result).toEqual(3);
  });

  it("findRadius([1], [1])", () => {
    const result = findRadius([1], [1]);
    expect(result).toEqual(0);
  });

  it("findRadius([1, 3], [2])", () => {
    const result = findRadius([1, 3], [2]);
    expect(result).toEqual(1);
  });

  it("findRadius([1, 2], [3, 4])", () => {
    const result = findRadius([1, 2], [3, 4]);
    expect(result).toEqual(2);
  });
});

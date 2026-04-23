import { powerfulIntegers } from '../0970-powerful-integers.js';

describe('0970-powerful-integers', () => {
  it("powerfulIntegers([1, 2, 3])", () => {
    const result = powerfulIntegers([1, 2, 3]);
    expect(result).toEqual([]);
  });

  it("powerfulIntegers([])", () => {
    const result = powerfulIntegers([]);
    expect(result).toEqual([]);
  });

  it("powerfulIntegers([0])", () => {
    const result = powerfulIntegers([0]);
    expect(result).toEqual([]);
  });

  it("powerfulIntegers([-1, 0, 1])", () => {
    const result = powerfulIntegers([-1, 0, 1]);
    expect(result).toEqual([]);
  });
});

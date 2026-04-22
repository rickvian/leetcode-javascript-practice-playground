import { pourWater } from '../0755-pour-water.js';

describe('0755-pour-water', () => {
  it("pourWater([1, 2, 3])", () => {
    const result = pourWater([1, 2, 3]);
    expect(result).toEqual([1, 2, 3]);
  });

  it("pourWater([])", () => {
    const result = pourWater([]);
    expect(result).toEqual([]);
  });

  it("pourWater([0])", () => {
    const result = pourWater([0]);
    expect(result).toEqual([0]);
  });

  it("pourWater([-1, 0, 1])", () => {
    const result = pourWater([-1, 0, 1]);
    expect(result).toEqual([-1, 0, 1]);
  });
});

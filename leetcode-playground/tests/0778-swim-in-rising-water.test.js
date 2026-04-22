import { swimInWater } from '../0778-swim-in-rising-water.js';

describe('0778-swim-in-rising-water', () => {
  it("swimInWater([[1, 2], [3, 4]])", () => {
    const result = swimInWater([[1, 2], [3, 4]]);
    expect(result).toEqual(3);
  });

  it("swimInWater([[1]])", () => {
    const result = swimInWater([[1]]);
    expect(result).toEqual(1);
  });

  it("swimInWater([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = swimInWater([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(8);
  });
});

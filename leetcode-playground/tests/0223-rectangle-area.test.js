import { computeArea } from '../0223-rectangle-area.js';

describe('0223-rectangle-area', () => {
  it("computeArea(-3, 0...)", () => {
    const result = computeArea(-3, 0, 3, 4, 0, -1, 9, 2);
    expect(result).toEqual(45);
  });

  it("computeArea(-2, -2...)", () => {
    const result = computeArea(-2, -2, 2, 2, -2, -2, 2, 2);
    expect(result).toEqual(16);
  });

  it("computeArea(0, 0...)", () => {
    const result = computeArea(0, 0, 0, 0, 0, 0, 0, 0);
    expect(result).toEqual(0);
  });

  it("computeArea(-1000000000, -1000000000...)", () => {
    const result = computeArea(-1000000000, -1000000000, 0, 0, 0, 0, 1000000000, 1000000000);
    expect(result).toEqual(2000000000000000000);
  });
});

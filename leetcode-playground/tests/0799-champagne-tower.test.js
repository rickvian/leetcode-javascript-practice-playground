import { champagneTower } from '../0799-champagne-tower.js';

describe('0799-champagne-tower', () => {
  it("champagneTower(1, 1...)", () => {
    const result = champagneTower(1, 1, 1);
    expect(result).toEqual(0);
  });

  it("champagneTower(2, 1...)", () => {
    const result = champagneTower(2, 1, 1);
    expect(result).toEqual(0.5);
  });

  it("champagneTower(100000009, 33...)", () => {
    const result = champagneTower(100000009, 33, 17);
    expect(result).toEqual(1);
  });

  it("champagneTower(0, 0...)", () => {
    const result = champagneTower(0, 0, 0);
    expect(result).toEqual(0);
  });

  it("champagneTower(25, 6...)", () => {
    const result = champagneTower(25, 6, 1);
    expect(result).toEqual(0.1875);
  });

  it("champagneTower(1, 0...)", () => {
    const result = champagneTower(1, 0, 0);
    expect(result).toEqual(1);
  });
});

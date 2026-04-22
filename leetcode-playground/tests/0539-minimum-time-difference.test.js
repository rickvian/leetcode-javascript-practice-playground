import { findMinDifference } from '../0539-minimum-time-difference.js';

describe('0539-minimum-time-difference', () => {
  it("findMinDifference([\"23:59\", \"00:00\"])", () => {
    const result = findMinDifference(["23:59", "00:00"]);
    expect(result).toEqual(1);
  });

  it("findMinDifference([\"00:00\", \"23:59\", \"00:00\"])", () => {
    const result = findMinDifference(["00:00", "23:59", "00:00"]);
    expect(result).toEqual(0);
  });

  it("findMinDifference([\"12:00\", \"00:00\"])", () => {
    const result = findMinDifference(["12:00", "00:00"]);
    expect(result).toEqual(720);
  });

  it("findMinDifference([\"01:00\", \"00:00\", \"12:00\"])", () => {
    const result = findMinDifference(["01:00", "00:00", "12:00"]);
    expect(result).toEqual(60);
  });

  it("findMinDifference([\"00:00\", \"04:00\", \"22:00\"])", () => {
    const result = findMinDifference(["00:00", "04:00", "22:00"]);
    expect(result).toEqual(120);
  });

  it("findMinDifference([\"00:00\"])", () => {
    const result = findMinDifference(["00:00"]);
    expect(result).toEqual(1440);
  });
});

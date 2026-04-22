import { dailyTemperatures } from '../0739-daily-temperatures.js';

describe('0739-daily-temperatures', () => {
  it("dailyTemperatures([1, 2, 3, 4, 5])", () => {
    const result = dailyTemperatures([1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 1, 1, 1, 0]);
  });

  it("dailyTemperatures([])", () => {
    const result = dailyTemperatures([]);
    expect(result).toEqual([]);
  });

  it("dailyTemperatures([1])", () => {
    const result = dailyTemperatures([1]);
    expect(result).toEqual([0]);
  });

  it("dailyTemperatures([1, 1])", () => {
    const result = dailyTemperatures([1, 1]);
    expect(result).toEqual([0, 0]);
  });

  it("dailyTemperatures([3, 1, 4, 1, 5])", () => {
    const result = dailyTemperatures([3, 1, 4, 1, 5]);
    expect(result).toEqual([2, 1, 2, 1, 0]);
  });

  it("dailyTemperatures([-1, 0, 1])", () => {
    const result = dailyTemperatures([-1, 0, 1]);
    expect(result).toEqual([1, 1, 0]);
  });
});

import { minTaps } from '../1326-minimum-number-of-taps-to-open-to-water-a-garden.js';

describe('1326-minimum-number-of-taps-to-open-to-water-a-garden', () => {
  it("minTaps(2, [3, 2, 6, 5, 0, 3])", () => {
    const result = minTaps(2, [3, 2, 6, 5, 0, 3]);
    expect(result).toEqual(1);
  });

  it("minTaps(2, [2, 1])", () => {
    const result = minTaps(2, [2, 1]);
    expect(result).toEqual(1);
  });

  it("minTaps(0, [3, 2, 6])", () => {
    const result = minTaps(0, [3, 2, 6]);
    expect(result).toEqual(0);
  });

  it("minTaps(1, [1, 2, 3])", () => {
    const result = minTaps(1, [1, 2, 3]);
    expect(result).toEqual(1);
  });

  it("minTaps(3, [1, 2, 3, 4, 5])", () => {
    const result = minTaps(3, [1, 2, 3, 4, 5]);
    expect(result).toEqual(1);
  });

  it("minTaps(1, [7, 6, 4, 3, 1])", () => {
    const result = minTaps(1, [7, 6, 4, 3, 1]);
    expect(result).toEqual(1);
  });
});

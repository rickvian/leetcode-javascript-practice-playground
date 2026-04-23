import { maxWidthRamp } from '../0962-maximum-width-ramp.js';

describe('0962-maximum-width-ramp', () => {
  it("maxWidthRamp([1, 2, 3, 4, 5])", () => {
    const result = maxWidthRamp([1, 2, 3, 4, 5]);
    expect(result).toEqual(4);
  });

  it("maxWidthRamp([])", () => {
    const result = maxWidthRamp([]);
    expect(result).toEqual(0);
  });

  it("maxWidthRamp([1])", () => {
    const result = maxWidthRamp([1]);
    expect(result).toEqual(0);
  });

  it("maxWidthRamp([1, 1])", () => {
    const result = maxWidthRamp([1, 1]);
    expect(result).toEqual(1);
  });

  it("maxWidthRamp([3, 1, 4, 1, 5])", () => {
    const result = maxWidthRamp([3, 1, 4, 1, 5]);
    expect(result).toEqual(4);
  });

  it("maxWidthRamp([-1, 0, 1])", () => {
    const result = maxWidthRamp([-1, 0, 1]);
    expect(result).toEqual(2);
  });
});

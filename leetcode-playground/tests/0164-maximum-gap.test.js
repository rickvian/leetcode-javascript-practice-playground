import { maximumGap } from '../0164-maximum-gap.js';

describe('0164-maximum-gap', () => {
  it("maximumGap([1, 2, 3, 4, 5])", () => {
    const result = maximumGap([1, 2, 3, 4, 5]);
    expect(result).toEqual(1);
  });

  it("maximumGap([])", () => {
    const result = maximumGap([]);
    expect(result).toEqual(0);
  });

  it("maximumGap([1])", () => {
    const result = maximumGap([1]);
    expect(result).toEqual(0);
  });

  it("maximumGap([1, 1])", () => {
    const result = maximumGap([1, 1]);
    expect(result).toEqual(0);
  });

  it("maximumGap([3, 1, 4, 1, 5])", () => {
    const result = maximumGap([3, 1, 4, 1, 5]);
    expect(result).toEqual(2);
  });

  it("maximumGap([-1, 0, 1])", () => {
    const result = maximumGap([-1, 0, 1]);
    expect(result).toEqual(1);
  });
});

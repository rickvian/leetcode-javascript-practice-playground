import { repeatedNTimes } from '../0961-n-repeated-element-in-size-2n-array.js';

describe('0961-n-repeated-element-in-size-2n-array', () => {
  it("repeatedNTimes([1, 1])", () => {
    const result = repeatedNTimes([1, 1]);
    expect(result).toEqual(1);
  });

  it("repeatedNTimes([3, 1, 4, 1, 5])", () => {
    const result = repeatedNTimes([3, 1, 4, 1, 5]);
    expect(result).toEqual(1);
  });
});

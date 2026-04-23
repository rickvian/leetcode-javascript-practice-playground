import { largestComponentSize } from '../0952-largest-component-size-by-common-factor.js';

describe('0952-largest-component-size-by-common-factor', () => {
  it("largestComponentSize([1, 2, 3, 4, 5])", () => {
    const result = largestComponentSize([1, 2, 3, 4, 5]);
    expect(result).toEqual(2);
  });

  it("largestComponentSize([1])", () => {
    const result = largestComponentSize([1]);
    expect(result).toEqual(1);
  });

  it("largestComponentSize([1, 1])", () => {
    const result = largestComponentSize([1, 1]);
    expect(result).toEqual(2);
  });

  it("largestComponentSize([3, 1, 4, 1, 5])", () => {
    const result = largestComponentSize([3, 1, 4, 1, 5]);
    expect(result).toEqual(2);
  });

  it("largestComponentSize([-1, 0, 1])", () => {
    const result = largestComponentSize([-1, 0, 1]);
    expect(result).toEqual(1);
  });
});

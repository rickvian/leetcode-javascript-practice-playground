import { minSetSize } from '../1338-reduce-array-size-to-the-half.js';

describe('1338-reduce-array-size-to-the-half', () => {
  it("minSetSize([1, 2, 3, 4, 5])", () => {
    const result = minSetSize([1, 2, 3, 4, 5]);
    expect(result).toEqual(3);
  });

  it("minSetSize([])", () => {
    const result = minSetSize([]);
    expect(result).toEqual(0);
  });

  it("minSetSize([1])", () => {
    const result = minSetSize([1]);
    expect(result).toEqual(1);
  });

  it("minSetSize([1, 1])", () => {
    const result = minSetSize([1, 1]);
    expect(result).toEqual(1);
  });

  it("minSetSize([3, 1, 4, 1, 5])", () => {
    const result = minSetSize([3, 1, 4, 1, 5]);
    expect(result).toEqual(2);
  });

  it("minSetSize([-1, 0, 1])", () => {
    const result = minSetSize([-1, 0, 1]);
    expect(result).toEqual(2);
  });
});

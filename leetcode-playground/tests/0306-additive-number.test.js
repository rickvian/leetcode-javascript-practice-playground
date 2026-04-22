import { isAdditiveNumber } from '../0306-additive-number.js';

describe('0306-additive-number', () => {
  it("isAdditiveNumber([1, 2, 3])", () => {
    const result = isAdditiveNumber([1, 2, 3]);
    expect(result).toEqual(true);
  });

  it("isAdditiveNumber([])", () => {
    const result = isAdditiveNumber([]);
    expect(result).toEqual(false);
  });

  it("isAdditiveNumber([0])", () => {
    const result = isAdditiveNumber([0]);
    expect(result).toEqual(false);
  });

  it("isAdditiveNumber([-1, 0, 1])", () => {
    const result = isAdditiveNumber([-1, 0, 1]);
    expect(result).toEqual(false);
  });
});

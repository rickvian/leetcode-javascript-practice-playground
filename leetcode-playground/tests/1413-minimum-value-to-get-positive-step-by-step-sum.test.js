import { minStartValue } from '../1413-minimum-value-to-get-positive-step-by-step-sum.js';

describe('1413-minimum-value-to-get-positive-step-by-step-sum', () => {
  it("minStartValue([1, 2, 3, 4, 5])", () => {
    const result = minStartValue([1, 2, 3, 4, 5]);
    expect(result).toEqual(1);
  });

  it("minStartValue([])", () => {
    const result = minStartValue([]);
    expect(result).toEqual(1);
  });

  it("minStartValue([1])", () => {
    const result = minStartValue([1]);
    expect(result).toEqual(1);
  });

  it("minStartValue([1, 1])", () => {
    const result = minStartValue([1, 1]);
    expect(result).toEqual(1);
  });

  it("minStartValue([3, 1, 4, 1, 5])", () => {
    const result = minStartValue([3, 1, 4, 1, 5]);
    expect(result).toEqual(1);
  });

  it("minStartValue([-1, 0, 1])", () => {
    const result = minStartValue([-1, 0, 1]);
    expect(result).toEqual(2);
  });
});

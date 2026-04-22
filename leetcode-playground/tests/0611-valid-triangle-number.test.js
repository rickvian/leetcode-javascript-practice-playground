import { triangleNumber } from '../0611-valid-triangle-number.js';

describe('0611-valid-triangle-number', () => {
  it("triangleNumber([1, 2, 3, 4, 5])", () => {
    const result = triangleNumber([1, 2, 3, 4, 5]);
    expect(result).toEqual(3);
  });

  it("triangleNumber([])", () => {
    const result = triangleNumber([]);
    expect(result).toEqual(0);
  });

  it("triangleNumber([1])", () => {
    const result = triangleNumber([1]);
    expect(result).toEqual(0);
  });

  it("triangleNumber([1, 1])", () => {
    const result = triangleNumber([1, 1]);
    expect(result).toEqual(0);
  });

  it("triangleNumber([3, 1, 4, 1, 5])", () => {
    const result = triangleNumber([3, 1, 4, 1, 5]);
    expect(result).toEqual(1);
  });

  it("triangleNumber([-1, 0, 1])", () => {
    const result = triangleNumber([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});

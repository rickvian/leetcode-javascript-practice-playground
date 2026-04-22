import { optimalDivision } from '../0553-optimal-division.js';

describe('0553-optimal-division', () => {
  it("optimalDivision([1, 2, 3, 4, 5])", () => {
    const result = optimalDivision([1, 2, 3, 4, 5]);
    expect(result).toEqual("1/(2/3/4/5)");
  });

  it("optimalDivision([])", () => {
    const result = optimalDivision([]);
    expect(result).toEqual("undefined/()");
  });

  it("optimalDivision([1])", () => {
    const result = optimalDivision([1]);
    expect(result).toEqual("1");
  });

  it("optimalDivision([1, 1])", () => {
    const result = optimalDivision([1, 1]);
    expect(result).toEqual("1/1");
  });

  it("optimalDivision([3, 1, 4, 1, 5])", () => {
    const result = optimalDivision([3, 1, 4, 1, 5]);
    expect(result).toEqual("3/(1/4/1/5)");
  });

  it("optimalDivision([-1, 0, 1])", () => {
    const result = optimalDivision([-1, 0, 1]);
    expect(result).toEqual("-1/(0/1)");
  });
});

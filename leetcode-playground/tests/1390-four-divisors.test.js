import { sumFourDivisors } from '../1390-four-divisors.js';

describe('1390-four-divisors', () => {
  it("sumFourDivisors([1, 2, 3, 4, 5])", () => {
    const result = sumFourDivisors([1, 2, 3, 4, 5]);
    expect(result).toEqual(0);
  });

  it("sumFourDivisors([])", () => {
    const result = sumFourDivisors([]);
    expect(result).toEqual(0);
  });

  it("sumFourDivisors([1])", () => {
    const result = sumFourDivisors([1]);
    expect(result).toEqual(0);
  });

  it("sumFourDivisors([1, 1])", () => {
    const result = sumFourDivisors([1, 1]);
    expect(result).toEqual(0);
  });

  it("sumFourDivisors([3, 1, 4, 1, 5])", () => {
    const result = sumFourDivisors([3, 1, 4, 1, 5]);
    expect(result).toEqual(0);
  });

  it("sumFourDivisors([-1, 0, 1])", () => {
    const result = sumFourDivisors([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});

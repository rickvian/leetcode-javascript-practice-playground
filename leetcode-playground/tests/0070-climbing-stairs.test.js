import { climbStairs } from '../0070-climbing-stairs.js';

describe('0070-climbing-stairs', () => {
  it("climbStairs(121)", () => {
    const result = climbStairs(121);
    expect(result).toEqual(1.402836665349892e+25);
  });

  it("climbStairs(-121)", () => {
    const result = climbStairs(-121);
    expect(result).toEqual(-121);
  });

  it("climbStairs(10)", () => {
    const result = climbStairs(10);
    expect(result).toEqual(89);
  });

  it("climbStairs(0)", () => {
    const result = climbStairs(0);
    expect(result).toEqual(0);
  });

  it("climbStairs(-1)", () => {
    const result = climbStairs(-1);
    expect(result).toEqual(-1);
  });
});

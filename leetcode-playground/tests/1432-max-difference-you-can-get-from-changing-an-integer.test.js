import { maxDiff } from '../1432-max-difference-you-can-get-from-changing-an-integer.js';

describe('1432-max-difference-you-can-get-from-changing-an-integer', () => {
  it("maxDiff(121)", () => {
    const result = maxDiff(121);
    expect(result).toEqual(828);
  });

  it("maxDiff(-121)", () => {
    const result = maxDiff(-121);
    expect(result).toEqual(8000);
  });

  it("maxDiff(10)", () => {
    const result = maxDiff(10);
    expect(result).toEqual(80);
  });

  it("maxDiff(0)", () => {
    const result = maxDiff(0);
    expect(result).toEqual(8);
  });

  it("maxDiff(-1)", () => {
    const result = maxDiff(-1);
    expect(result).toEqual(80);
  });

  it("maxDiff(1534236469)", () => {
    const result = maxDiff(1534236469);
    expect(result).toEqual(8500000000);
  });
});

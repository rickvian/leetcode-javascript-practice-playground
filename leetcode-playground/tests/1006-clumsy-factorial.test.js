import { clumsy } from '../1006-clumsy-factorial.js';

describe('1006-clumsy-factorial', () => {
  it("clumsy(121)", () => {
    const result = clumsy(121);
    expect(result).toEqual(123);
  });

  it("clumsy(-121)", () => {
    const result = clumsy(-121);
    expect(result).toEqual(-121);
  });

  it("clumsy(10)", () => {
    const result = clumsy(10);
    expect(result).toEqual(12);
  });

  it("clumsy(0)", () => {
    const result = clumsy(0);
    expect(result).toEqual(0);
  });

  it("clumsy(-1)", () => {
    const result = clumsy(-1);
    expect(result).toEqual(-1);
  });

  it("clumsy(1534236469)", () => {
    const result = clumsy(1534236469);
    expect(result).toEqual(1540832608);
  });
});

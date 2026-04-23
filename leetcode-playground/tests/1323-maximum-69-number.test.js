import { maximum69Number } from '../1323-maximum-69-number.js';

describe('1323-maximum-69-number', () => {
  it("maximum69Number(121)", () => {
    const result = maximum69Number(121);
    expect(result).toEqual(121);
  });

  it("maximum69Number(-121)", () => {
    const result = maximum69Number(-121);
    expect(result).toEqual(-121);
  });

  it("maximum69Number(10)", () => {
    const result = maximum69Number(10);
    expect(result).toEqual(10);
  });

  it("maximum69Number(0)", () => {
    const result = maximum69Number(0);
    expect(result).toEqual(0);
  });

  it("maximum69Number(-1)", () => {
    const result = maximum69Number(-1);
    expect(result).toEqual(-1);
  });

  it("maximum69Number(1534236469)", () => {
    const result = maximum69Number(1534236469);
    expect(result).toEqual(1534239469);
  });
});

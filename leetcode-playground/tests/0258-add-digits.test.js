import { addDigits } from '../0258-add-digits.js';

describe('0258-add-digits', () => {
  it("addDigits(121)", () => {
    const result = addDigits(121);
    expect(result).toEqual(4);
  });

  it("addDigits(-121)", () => {
    const result = addDigits(-121);
    expect(result).toEqual(-121);
  });

  it("addDigits(10)", () => {
    const result = addDigits(10);
    expect(result).toEqual(1);
  });

  it("addDigits(0)", () => {
    const result = addDigits(0);
    expect(result).toEqual(0);
  });

  it("addDigits(-1)", () => {
    const result = addDigits(-1);
    expect(result).toEqual(-1);
  });

  it("addDigits(1534236469)", () => {
    const result = addDigits(1534236469);
    expect(result).toEqual(7);
  });
});

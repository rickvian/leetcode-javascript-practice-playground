import { isArmstrong } from '../1134-armstrong-number.js';

describe('1134-armstrong-number', () => {
  it("isArmstrong(121)", () => {
    const result = isArmstrong(121);
    expect(result).toEqual(false);
  });

  it("isArmstrong(-121)", () => {
    const result = isArmstrong(-121);
    expect(result).toEqual(false);
  });

  it("isArmstrong(10)", () => {
    const result = isArmstrong(10);
    expect(result).toEqual(false);
  });

  it("isArmstrong(0)", () => {
    const result = isArmstrong(0);
    expect(result).toEqual(true);
  });

  it("isArmstrong(-1)", () => {
    const result = isArmstrong(-1);
    expect(result).toEqual(false);
  });

  it("isArmstrong(1534236469)", () => {
    const result = isArmstrong(1534236469);
    expect(result).toEqual(false);
  });
});

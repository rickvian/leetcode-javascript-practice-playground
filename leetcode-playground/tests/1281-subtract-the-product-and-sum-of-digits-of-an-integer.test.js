import { subtractProductAndSum } from '../1281-subtract-the-product-and-sum-of-digits-of-an-integer.js';

describe('1281-subtract-the-product-and-sum-of-digits-of-an-integer', () => {
  it("subtractProductAndSum(121)", () => {
    const result = subtractProductAndSum(121);
    expect(result).toEqual(-2);
  });

  it("subtractProductAndSum(-121)", () => {
    const result = subtractProductAndSum(-121);
    expect(result).toEqual(1);
  });

  it("subtractProductAndSum(10)", () => {
    const result = subtractProductAndSum(10);
    expect(result).toEqual(-1);
  });

  it("subtractProductAndSum(0)", () => {
    const result = subtractProductAndSum(0);
    expect(result).toEqual(1);
  });

  it("subtractProductAndSum(-1)", () => {
    const result = subtractProductAndSum(-1);
    expect(result).toEqual(1);
  });

  it("subtractProductAndSum(1534236469)", () => {
    const result = subtractProductAndSum(1534236469);
    expect(result).toEqual(466517);
  });
});

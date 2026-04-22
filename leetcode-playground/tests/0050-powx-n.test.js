import { myPow } from '../0050-powx-n.js';

describe('0050-powx-n', () => {
  it("myPow(1, 1)", () => {
    const result = myPow(1, 1);
    expect(result).toEqual(1);
  });

  it("myPow(0, 0)", () => {
    const result = myPow(0, 0);
    expect(result).toEqual(1);
  });

  it("myPow(3, 7)", () => {
    const result = myPow(3, 7);
    expect(result).toEqual(2187);
  });
});

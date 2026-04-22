import { getMoneyAmount } from '../0375-guess-number-higher-or-lower-ii.js';

describe('0375-guess-number-higher-or-lower-ii', () => {
  it("getMoneyAmount(1)", () => {
    const result = getMoneyAmount(1);
    expect(result).toEqual(0);
  });

  it("getMoneyAmount(2)", () => {
    const result = getMoneyAmount(2);
    expect(result).toEqual(1);
  });

  it("getMoneyAmount(3)", () => {
    const result = getMoneyAmount(3);
    expect(result).toEqual(2);
  });

  it("getMoneyAmount(4)", () => {
    const result = getMoneyAmount(4);
    expect(result).toEqual(4);
  });

  it("getMoneyAmount(5)", () => {
    const result = getMoneyAmount(5);
    expect(result).toEqual(6);
  });

  it("getMoneyAmount(10)", () => {
    const result = getMoneyAmount(10);
    expect(result).toEqual(16);
  });
});

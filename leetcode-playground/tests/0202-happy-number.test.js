import { isHappy } from '../0202-happy-number.js';

describe('0202-happy-number', () => {
  it("isHappy(1)", () => {
    const result = isHappy(1);
    expect(result).toEqual(true);
  });

  it("isHappy(2)", () => {
    const result = isHappy(2);
    expect(result).toEqual(false);
  });

  it("isHappy(7)", () => {
    const result = isHappy(7);
    expect(result).toEqual(true);
  });

  it("isHappy(19)", () => {
    const result = isHappy(19);
    expect(result).toEqual(true);
  });

  it("isHappy(20)", () => {
    const result = isHappy(20);
    expect(result).toEqual(false);
  });

  it("isHappy(11)", () => {
    const result = isHappy(11);
    expect(result).toEqual(false);
  });

  it("isHappy(4)", () => {
    const result = isHappy(4);
    expect(result).toEqual(false);
  });
});

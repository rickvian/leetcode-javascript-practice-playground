import { lemonadeChange } from '../0860-lemonade-change.js';

describe('0860-lemonade-change', () => {
  it("lemonadeChange([1, 2, 3, 4, 5])", () => {
    const result = lemonadeChange([1, 2, 3, 4, 5]);
    expect(result).toEqual(false);
  });

  it("lemonadeChange([])", () => {
    const result = lemonadeChange([]);
    expect(result).toEqual(true);
  });

  it("lemonadeChange([1])", () => {
    const result = lemonadeChange([1]);
    expect(result).toEqual(false);
  });

  it("lemonadeChange([1, 1])", () => {
    const result = lemonadeChange([1, 1]);
    expect(result).toEqual(false);
  });

  it("lemonadeChange([3, 1, 4, 1, 5])", () => {
    const result = lemonadeChange([3, 1, 4, 1, 5]);
    expect(result).toEqual(false);
  });

  it("lemonadeChange([-1, 0, 1])", () => {
    const result = lemonadeChange([-1, 0, 1]);
    expect(result).toEqual(false);
  });
});

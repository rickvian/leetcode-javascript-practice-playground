import { numberOfDays } from '../1118-number-of-days-in-a-month.js';

describe('1118-number-of-days-in-a-month', () => {
  it("numberOfDays(1, 1)", () => {
    const result = numberOfDays(1, 1);
    expect(result).toEqual(31);
  });

  it("numberOfDays(0, 0)", () => {
    const result = numberOfDays(0, 0);
    expect(result).toEqual(31);
  });

  it("numberOfDays(3, 7)", () => {
    const result = numberOfDays(3, 7);
    expect(result).toEqual(31);
  });

  it("numberOfDays(100, 1000)", () => {
    const result = numberOfDays(100, 1000);
    expect(result).toEqual(30);
  });
});

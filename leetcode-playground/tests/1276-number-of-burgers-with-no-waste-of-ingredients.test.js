import { numOfBurgers } from '../1276-number-of-burgers-with-no-waste-of-ingredients.js';

describe('1276-number-of-burgers-with-no-waste-of-ingredients', () => {
  it("numOfBurgers(1, 1)", () => {
    const result = numOfBurgers(1, 1);
    expect(result).toEqual([]);
  });

  it("numOfBurgers(0, 0)", () => {
    const result = numOfBurgers(0, 0);
    expect(result).toEqual([0, 0]);
  });

  it("numOfBurgers(3, 7)", () => {
    const result = numOfBurgers(3, 7);
    expect(result).toEqual([]);
  });

  it("numOfBurgers(100, 1000)", () => {
    const result = numOfBurgers(100, 1000);
    expect(result).toEqual([]);
  });
});

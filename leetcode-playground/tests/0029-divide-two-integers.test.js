import { divide } from '../0029-divide-two-integers.js';

describe('0029-divide-two-integers', () => {
  it("divide(1, 1)", () => {
    const result = divide(1, 1);
    expect(result).toEqual(1);
  });

  it("divide(0, 0)", () => {
    const result = divide(0, 0);
    expect(result).toEqual(1);
  });

  it("divide(3, 7)", () => {
    const result = divide(3, 7);
    expect(result).toEqual(0);
  });

  it("divide(100, 1000)", () => {
    const result = divide(100, 1000);
    expect(result).toEqual(0);
  });
});

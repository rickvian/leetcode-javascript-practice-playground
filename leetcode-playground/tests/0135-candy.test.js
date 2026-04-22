import { candy } from '../0135-candy.js';

describe('0135-candy', () => {
  it("candy([1, 2, 3, 4, 5])", () => {
    const result = candy([1, 2, 3, 4, 5]);
    expect(result).toEqual(15);
  });

  it("candy([])", () => {
    const result = candy([]);
    expect(result).toEqual(0);
  });

  it("candy([1])", () => {
    const result = candy([1]);
    expect(result).toEqual(1);
  });

  it("candy([1, 1])", () => {
    const result = candy([1, 1]);
    expect(result).toEqual(2);
  });

  it("candy([3, 1, 4, 1, 5])", () => {
    const result = candy([3, 1, 4, 1, 5]);
    expect(result).toEqual(8);
  });

  it("candy([-1, 0, 1])", () => {
    const result = candy([-1, 0, 1]);
    expect(result).toEqual(6);
  });
});

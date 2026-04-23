import { maxNumberOfApples } from '../1196-how-many-apples-can-you-put-into-the-basket.js';

describe('1196-how-many-apples-can-you-put-into-the-basket', () => {
  it("maxNumberOfApples([1, 2, 3, 4, 5])", () => {
    const result = maxNumberOfApples([1, 2, 3, 4, 5]);
    expect(result).toEqual(5);
  });

  it("maxNumberOfApples([])", () => {
    const result = maxNumberOfApples([]);
    expect(result).toEqual(0);
  });

  it("maxNumberOfApples([1])", () => {
    const result = maxNumberOfApples([1]);
    expect(result).toEqual(1);
  });

  it("maxNumberOfApples([1, 1])", () => {
    const result = maxNumberOfApples([1, 1]);
    expect(result).toEqual(2);
  });

  it("maxNumberOfApples([3, 1, 4, 1, 5])", () => {
    const result = maxNumberOfApples([3, 1, 4, 1, 5]);
    expect(result).toEqual(5);
  });

  it("maxNumberOfApples([-1, 0, 1])", () => {
    const result = maxNumberOfApples([-1, 0, 1]);
    expect(result).toEqual(3);
  });
});

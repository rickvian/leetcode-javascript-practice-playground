import { carPooling } from '../1094-car-pooling.js';

describe('1094-car-pooling', () => {
  it("carPooling([[1, 2, 3], [4, 5, 6]], 2)", () => {
    const result = carPooling([[1, 2, 3], [4, 5, 6]], 2);
    expect(result).toEqual(false);
  });

  it("carPooling([[1, 2], [3, 4]], 5)", () => {
    const result = carPooling([[1, 2], [3, 4]], 5);
    expect(result).toEqual(true);
  });

  it("carPooling([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 15)", () => {
    const result = carPooling([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 15);
    expect(result).toEqual(true);
  });
});

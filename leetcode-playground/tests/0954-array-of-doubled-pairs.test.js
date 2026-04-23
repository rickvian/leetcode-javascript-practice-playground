import { canReorderDoubled } from '../0954-array-of-doubled-pairs.js';

describe('0954-array-of-doubled-pairs', () => {
  it("canReorderDoubled([1, 2, 3, 4, 5])", () => {
    const result = canReorderDoubled([1, 2, 3, 4, 5]);
    expect(result).toEqual(false);
  });

  it("canReorderDoubled([])", () => {
    const result = canReorderDoubled([]);
    expect(result).toEqual(true);
  });

  it("canReorderDoubled([1])", () => {
    const result = canReorderDoubled([1]);
    expect(result).toEqual(false);
  });

  it("canReorderDoubled([1, 1])", () => {
    const result = canReorderDoubled([1, 1]);
    expect(result).toEqual(false);
  });

  it("canReorderDoubled([3, 1, 4, 1, 5])", () => {
    const result = canReorderDoubled([3, 1, 4, 1, 5]);
    expect(result).toEqual(false);
  });

  it("canReorderDoubled([-1, 0, 1])", () => {
    const result = canReorderDoubled([-1, 0, 1]);
    expect(result).toEqual(false);
  });
});

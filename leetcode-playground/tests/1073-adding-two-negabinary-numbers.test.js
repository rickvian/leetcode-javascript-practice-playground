import { addNegabinary } from '../1073-adding-two-negabinary-numbers.js';

describe('1073-adding-two-negabinary-numbers', () => {
  it("addNegabinary([1, 2, 3], [4, 5, 6])", () => {
    const result = addNegabinary([1, 2, 3], [4, 5, 6]);
    expect(result).toEqual([1, 1, 0, 0, 1]);
  });

  it("addNegabinary([1], [1])", () => {
    const result = addNegabinary([1], [1]);
    expect(result).toEqual([1, 1, 0]);
  });

  it("addNegabinary([1, 3], [2])", () => {
    const result = addNegabinary([1, 3], [2]);
    expect(result).toEqual([1]);
  });

  it("addNegabinary([1, 2], [3, 4])", () => {
    const result = addNegabinary([1, 2], [3, 4]);
    expect(result).toEqual([1, 1, 1, 0]);
  });
});

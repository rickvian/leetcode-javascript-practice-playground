import { numEnclaves } from '../1020-number-of-enclaves.js';

describe('1020-number-of-enclaves', () => {
  it("numEnclaves([[1, 2], [3, 4]])", () => {
    const result = numEnclaves([[1, 2], [3, 4]]);
    expect(result).toEqual(9);
  });

  it("numEnclaves([[1]])", () => {
    const result = numEnclaves([[1]]);
    expect(result).toEqual(0);
  });

  it("numEnclaves([[]])", () => {
    const result = numEnclaves([[]]);
    expect(result).toEqual(0);
  });

  it("numEnclaves([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = numEnclaves([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(44);
  });
});

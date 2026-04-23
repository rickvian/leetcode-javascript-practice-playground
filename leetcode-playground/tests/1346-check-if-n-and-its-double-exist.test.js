import { checkIfExist } from '../1346-check-if-n-and-its-double-exist.js';

describe('1346-check-if-n-and-its-double-exist', () => {
  it("checkIfExist([1, 2, 3, 4, 5])", () => {
    const result = checkIfExist([1, 2, 3, 4, 5]);
    expect(result).toEqual(true);
  });

  it("checkIfExist([])", () => {
    const result = checkIfExist([]);
    expect(result).toEqual(false);
  });

  it("checkIfExist([1])", () => {
    const result = checkIfExist([1]);
    expect(result).toEqual(false);
  });

  it("checkIfExist([1, 1])", () => {
    const result = checkIfExist([1, 1]);
    expect(result).toEqual(false);
  });

  it("checkIfExist([3, 1, 4, 1, 5])", () => {
    const result = checkIfExist([3, 1, 4, 1, 5]);
    expect(result).toEqual(false);
  });

  it("checkIfExist([-1, 0, 1])", () => {
    const result = checkIfExist([-1, 0, 1]);
    expect(result).toEqual(false);
  });
});

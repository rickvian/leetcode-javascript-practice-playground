import { validUtf8 } from '../0393-utf-8-validation.js';

describe('0393-utf-8-validation', () => {
  it("validUtf8([1, 2, 3, 4, 5])", () => {
    const result = validUtf8([1, 2, 3, 4, 5]);
    expect(result).toEqual(true);
  });

  it("validUtf8([])", () => {
    const result = validUtf8([]);
    expect(result).toEqual(true);
  });

  it("validUtf8([1])", () => {
    const result = validUtf8([1]);
    expect(result).toEqual(true);
  });

  it("validUtf8([1, 1])", () => {
    const result = validUtf8([1, 1]);
    expect(result).toEqual(true);
  });

  it("validUtf8([3, 1, 4, 1, 5])", () => {
    const result = validUtf8([3, 1, 4, 1, 5]);
    expect(result).toEqual(true);
  });

  it("validUtf8([-1, 0, 1])", () => {
    const result = validUtf8([-1, 0, 1]);
    expect(result).toEqual(false);
  });
});

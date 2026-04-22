import { maxA } from '../0651-4-keys-keyboard.js';

describe('0651-4-keys-keyboard', () => {
  it("maxA(1)", () => {
    const result = maxA(1);
    expect(result).toEqual(1);
  });

  it("maxA(2)", () => {
    const result = maxA(2);
    expect(result).toEqual(2);
  });

  it("maxA(3)", () => {
    const result = maxA(3);
    expect(result).toEqual(3);
  });

  it("maxA(6)", () => {
    const result = maxA(6);
    expect(result).toEqual(6);
  });

  it("maxA(7)", () => {
    const result = maxA(7);
    expect(result).toEqual(9);
  });

  it("maxA(10)", () => {
    const result = maxA(10);
    expect(result).toEqual(20);
  });
});

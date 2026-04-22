import { magicalString } from '../0481-magical-string.js';

describe('0481-magical-string', () => {
  it("magicalString(1)", () => {
    const result = magicalString(1);
    expect(result).toEqual(1);
  });

  it("magicalString(3)", () => {
    const result = magicalString(3);
    expect(result).toEqual(1);
  });

  it("magicalString(5)", () => {
    const result = magicalString(5);
    expect(result).toEqual(3);
  });

  it("magicalString(6)", () => {
    const result = magicalString(6);
    expect(result).toEqual(3);
  });

  it("magicalString(8)", () => {
    const result = magicalString(8);
    expect(result).toEqual(4);
  });

  it("magicalString(10)", () => {
    const result = magicalString(10);
    expect(result).toEqual(5);
  });

  it("magicalString(20)", () => {
    const result = magicalString(20);
    expect(result).toEqual(10);
  });
});

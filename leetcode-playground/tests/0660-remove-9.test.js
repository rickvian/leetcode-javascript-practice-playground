import { newInteger } from '../0660-remove-9.js';

describe('0660-remove-9', () => {
  it("newInteger(121)", () => {
    const result = newInteger(121);
    expect(result).toEqual(144);
  });

  it("newInteger(-121)", () => {
    const result = newInteger(-121);
    expect(result).toEqual(0);
  });

  it("newInteger(10)", () => {
    const result = newInteger(10);
    expect(result).toEqual(11);
  });

  it("newInteger(0)", () => {
    const result = newInteger(0);
    expect(result).toEqual(0);
  });

  it("newInteger(-1)", () => {
    const result = newInteger(-1);
    expect(result).toEqual(0);
  });

  it("newInteger(1534236469)", () => {
    const result = newInteger(1534236469);
    expect(result).toEqual(3856837687);
  });
});

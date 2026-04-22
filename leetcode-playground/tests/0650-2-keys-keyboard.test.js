import { minSteps } from '../0650-2-keys-keyboard.js';

describe('0650-2-keys-keyboard', () => {
  it("minSteps(121)", () => {
    const result = minSteps(121);
    expect(result).toEqual(22);
  });

  it("minSteps(-121)", () => {
    const result = minSteps(-121);
    expect(result).toEqual(0);
  });

  it("minSteps(10)", () => {
    const result = minSteps(10);
    expect(result).toEqual(7);
  });

  it("minSteps(0)", () => {
    const result = minSteps(0);
    expect(result).toEqual(0);
  });

  it("minSteps(-1)", () => {
    const result = minSteps(-1);
    expect(result).toEqual(0);
  });

  it("minSteps(1534236469)", () => {
    const result = minSteps(1534236469);
    expect(result).toEqual(248931);
  });
});

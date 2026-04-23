import { numberOfSteps } from '../1342-number-of-steps-to-reduce-a-number-to-zero.js';

describe('1342-number-of-steps-to-reduce-a-number-to-zero', () => {
  it("numberOfSteps(121)", () => {
    const result = numberOfSteps(121);
    expect(result).toEqual(11);
  });

  it("numberOfSteps(-121)", () => {
    const result = numberOfSteps(-121);
    expect(result).toEqual(0);
  });

  it("numberOfSteps(10)", () => {
    const result = numberOfSteps(10);
    expect(result).toEqual(5);
  });

  it("numberOfSteps(0)", () => {
    const result = numberOfSteps(0);
    expect(result).toEqual(0);
  });

  it("numberOfSteps(-1)", () => {
    const result = numberOfSteps(-1);
    expect(result).toEqual(0);
  });

  it("numberOfSteps(1534236469)", () => {
    const result = numberOfSteps(1534236469);
    expect(result).toEqual(48);
  });
});

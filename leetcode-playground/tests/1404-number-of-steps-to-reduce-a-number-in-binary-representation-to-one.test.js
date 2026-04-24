import { numSteps } from '../1404-number-of-steps-to-reduce-a-number-in-binary-representation-to-one.js';

describe('1404-number-of-steps-to-reduce-a-number-in-binary-representation-to-one', () => {
  it("numSteps(\"1101\")", () => {
    const result = numSteps("1101");
    expect(result).toEqual(6);
  });

  it("numSteps(\"10\")", () => {
    const result = numSteps("10");
    expect(result).toEqual(1);
  });

  it("numSteps(\"1\")", () => {
    const result = numSteps("1");
    expect(result).toEqual(0);
  });

  it("numSteps(\"1111\")", () => {
    const result = numSteps("1111");
    expect(result).toEqual(5);
  });

  it("numSteps(\"10000\")", () => {
    const result = numSteps("10000");
    expect(result).toEqual(4);
  });

  it("numSteps(\"1010101\")", () => {
    const result = numSteps("1010101");
    expect(result).toEqual(11);
  });
});

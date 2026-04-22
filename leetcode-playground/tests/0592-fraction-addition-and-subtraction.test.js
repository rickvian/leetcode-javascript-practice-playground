import { fractionAddition } from '../0592-fraction-addition-and-subtraction.js';

describe('0592-fraction-addition-and-subtraction', () => {
  it("fractionAddition(\"-1/2+1/2\")", () => {
    const result = fractionAddition("-1/2+1/2");
    expect(result).toEqual("0/1");
  });

  it("fractionAddition(\"-1/2+1/2+(-1/3)\")", () => {
    const result = fractionAddition("-1/2+1/2+(-1/3)");
    expect(result).toEqual("-1/3");
  });

  it("fractionAddition(\"1/3-1/2\")", () => {
    const result = fractionAddition("1/3-1/2");
    expect(result).toEqual("-1/6");
  });

  it("fractionAddition(\"5/3+1/3\")", () => {
    const result = fractionAddition("5/3+1/3");
    expect(result).toEqual("2/1");
  });

  it("fractionAddition(\"1/4+2/4\")", () => {
    const result = fractionAddition("1/4+2/4");
    expect(result).toEqual("3/4");
  });

  it("fractionAddition(\"1/2-1/4\")", () => {
    const result = fractionAddition("1/2-1/4");
    expect(result).toEqual("1/4");
  });
});

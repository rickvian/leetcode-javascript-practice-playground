import { convertToBase7 } from '../0504-base-7.js';

describe('0504-base-7', () => {
  it("convertToBase7(121)", () => {
    const result = convertToBase7(121);
    expect(result).toEqual("232");
  });

  it("convertToBase7(-121)", () => {
    const result = convertToBase7(-121);
    expect(result).toEqual("-232");
  });

  it("convertToBase7(10)", () => {
    const result = convertToBase7(10);
    expect(result).toEqual("13");
  });

  it("convertToBase7(0)", () => {
    const result = convertToBase7(0);
    expect(result).toEqual("0");
  });

  it("convertToBase7(-1)", () => {
    const result = convertToBase7(-1);
    expect(result).toEqual("-1");
  });

  it("convertToBase7(1534236469)", () => {
    const result = convertToBase7(1534236469);
    expect(result).toEqual("53006536423");
  });
});

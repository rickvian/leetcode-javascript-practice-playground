import { convertToTitle } from '../0168-excel-sheet-column-title.js';

describe('0168-excel-sheet-column-title', () => {
  it("convertToTitle(121)", () => {
    const result = convertToTitle(121);
    expect(result).toEqual("DQ");
  });

  it("convertToTitle(10)", () => {
    const result = convertToTitle(10);
    expect(result).toEqual("J");
  });

  it("convertToTitle(1534236469)", () => {
    const result = convertToTitle(1534236469);
    expect(result).toEqual("DYCINNY");
  });
});

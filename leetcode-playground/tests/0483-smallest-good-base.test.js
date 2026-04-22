import { smallestGoodBase } from '../0483-smallest-good-base.js';

describe('0483-smallest-good-base', () => {
  it("smallestGoodBase(\"\")", () => {
    const result = smallestGoodBase("");
    expect(result).toEqual("-1");
  });

  it("smallestGoodBase(\" \")", () => {
    const result = smallestGoodBase(" ");
    expect(result).toEqual("-1");
  });
});

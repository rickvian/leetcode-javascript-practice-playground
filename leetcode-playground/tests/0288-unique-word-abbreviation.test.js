import { ValidWordAbbr } from '../0288-unique-word-abbreviation.js';

describe('0288-unique-word-abbreviation', () => {
  it("sequence 1", () => {
    const obj = new ValidWordAbbr(["deer", "door", "cake", "card"]);
    expect(obj.isUnique("dear")).toEqual(false);
    expect(obj.isUnique("cart")).toEqual(true);
    expect(obj.isUnique("cane")).toEqual(false);
    expect(obj.isUnique("make")).toEqual(true);
  });

  it("sequence 2", () => {
    const obj = new ValidWordAbbr([]);
    expect(obj.isUnique("a")).toEqual(true);
    expect(obj.isUnique("ab")).toEqual(true);
  });
});

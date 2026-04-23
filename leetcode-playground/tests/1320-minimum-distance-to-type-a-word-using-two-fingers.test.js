import { minimumDistance } from '../1320-minimum-distance-to-type-a-word-using-two-fingers.js';

describe('1320-minimum-distance-to-type-a-word-using-two-fingers', () => {
  it("minimumDistance(\"abcabcbb\")", () => {
    const result = minimumDistance("abcabcbb");
    expect(result).toEqual(2);
  });

  it("minimumDistance(\"bbbbb\")", () => {
    const result = minimumDistance("bbbbb");
    expect(result).toEqual(0);
  });

  it("minimumDistance(\"pwwkew\")", () => {
    const result = minimumDistance("pwwkew");
    expect(result).toEqual(6);
  });

  it("minimumDistance(\"\")", () => {
    const result = minimumDistance("");
    expect(result).toEqual(0);
  });

  it("minimumDistance(\" \")", () => {
    const result = minimumDistance(" ");
    expect(result).toEqual(0);
  });

  it("minimumDistance(\"a\")", () => {
    const result = minimumDistance("a");
    expect(result).toEqual(0);
  });

  it("minimumDistance(\"aaaaaa\")", () => {
    const result = minimumDistance("aaaaaa");
    expect(result).toEqual(0);
  });
});

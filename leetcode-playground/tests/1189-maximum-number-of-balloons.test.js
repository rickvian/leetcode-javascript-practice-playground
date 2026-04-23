import { maxNumberOfBalloons } from '../1189-maximum-number-of-balloons.js';

describe('1189-maximum-number-of-balloons', () => {
  it("maxNumberOfBalloons(\"abcabcbb\")", () => {
    const result = maxNumberOfBalloons("abcabcbb");
    expect(result).toEqual(0);
  });

  it("maxNumberOfBalloons(\"bbbbb\")", () => {
    const result = maxNumberOfBalloons("bbbbb");
    expect(result).toEqual(0);
  });

  it("maxNumberOfBalloons(\"pwwkew\")", () => {
    const result = maxNumberOfBalloons("pwwkew");
    expect(result).toEqual(0);
  });

  it("maxNumberOfBalloons(\"\")", () => {
    const result = maxNumberOfBalloons("");
    expect(result).toEqual(0);
  });

  it("maxNumberOfBalloons(\" \")", () => {
    const result = maxNumberOfBalloons(" ");
    expect(result).toEqual(0);
  });

  it("maxNumberOfBalloons(\"a\")", () => {
    const result = maxNumberOfBalloons("a");
    expect(result).toEqual(0);
  });

  it("maxNumberOfBalloons(\"aaaaaa\")", () => {
    const result = maxNumberOfBalloons("aaaaaa");
    expect(result).toEqual(0);
  });
});

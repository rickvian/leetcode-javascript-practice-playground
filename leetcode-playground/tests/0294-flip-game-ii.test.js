import { canWin } from '../0294-flip-game-ii.js';

describe('0294-flip-game-ii', () => {
  it("canWin(\"abcabcbb\")", () => {
    const result = canWin("abcabcbb");
    expect(result).toEqual(false);
  });

  it("canWin(\"bbbbb\")", () => {
    const result = canWin("bbbbb");
    expect(result).toEqual(false);
  });

  it("canWin(\"pwwkew\")", () => {
    const result = canWin("pwwkew");
    expect(result).toEqual(false);
  });

  it("canWin(\"\")", () => {
    const result = canWin("");
    expect(result).toEqual(false);
  });

  it("canWin(\" \")", () => {
    const result = canWin(" ");
    expect(result).toEqual(false);
  });

  it("canWin(\"a\")", () => {
    const result = canWin("a");
    expect(result).toEqual(false);
  });

  it("canWin(\"aaaaaa\")", () => {
    const result = canWin("aaaaaa");
    expect(result).toEqual(false);
  });
});

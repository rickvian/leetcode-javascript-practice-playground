import { alphabetBoardPath } from '../1138-alphabet-board-path.js';

describe('1138-alphabet-board-path', () => {
  it("alphabetBoardPath(\"abcabcbb\")", () => {
    const result = alphabetBoardPath("abcabcbb");
    expect(result).toEqual("!R!R!LL!R!R!L!!");
  });

  it("alphabetBoardPath(\"bbbbb\")", () => {
    const result = alphabetBoardPath("bbbbb");
    expect(result).toEqual("R!!!!!");
  });

  it("alphabetBoardPath(\"pwwkew\")", () => {
    const result = alphabetBoardPath("pwwkew");
    expect(result).toEqual("DDD!DRR!!UULL!UURRRR!LLDDDD!");
  });

  it("alphabetBoardPath(\"\")", () => {
    const result = alphabetBoardPath("");
    expect(result).toEqual("");
  });

  it("alphabetBoardPath(\" \")", () => {
    const result = alphabetBoardPath(" ");
    expect(result).toEqual("UUUUUUUUUUUUU!");
  });

  it("alphabetBoardPath(\"a\")", () => {
    const result = alphabetBoardPath("a");
    expect(result).toEqual("!");
  });

  it("alphabetBoardPath(\"aaaaaa\")", () => {
    const result = alphabetBoardPath("aaaaaa");
    expect(result).toEqual("!!!!!!");
  });
});

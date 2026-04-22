import { nextClosestTime } from '../0681-next-closest-time.js';

describe('0681-next-closest-time', () => {
  it("nextClosestTime(\"abcabcbb\")", () => {
    const result = nextClosestTime("abcabcbb");
    expect(result).toEqual("aa:aa");
  });

  it("nextClosestTime(\"bbbbb\")", () => {
    const result = nextClosestTime("bbbbb");
    expect(result).toEqual("bb:bb");
  });

  it("nextClosestTime(\"pwwkew\")", () => {
    const result = nextClosestTime("pwwkew");
    expect(result).toEqual("ee:ee");
  });

  it("nextClosestTime(\" \")", () => {
    const result = nextClosestTime(" ");
    expect(result).toEqual("  :  ");
  });

  it("nextClosestTime(\"a\")", () => {
    const result = nextClosestTime("a");
    expect(result).toEqual("aa:aa");
  });

  it("nextClosestTime(\"aaaaaa\")", () => {
    const result = nextClosestTime("aaaaaa");
    expect(result).toEqual("aa:aa");
  });
});

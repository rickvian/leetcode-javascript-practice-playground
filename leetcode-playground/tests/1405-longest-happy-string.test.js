import { longestDiverseString } from '../1405-longest-happy-string.js';

describe('1405-longest-happy-string', () => {
  it("longestDiverseString(1, 1...)", () => {
    const result = longestDiverseString(1, 1, 7);
    expect(result).toEqual("ccaccbcc");
  });

  it("longestDiverseString(7, 1...)", () => {
    const result = longestDiverseString(7, 1, 0);
    expect(result).toEqual("aabaa");
  });

  it("longestDiverseString(0, 0...)", () => {
    const result = longestDiverseString(0, 0, 1);
    expect(result).toEqual("c");
  });

  it("longestDiverseString(2, 2...)", () => {
    const result = longestDiverseString(2, 2, 2);
    expect(result).toEqual("abccba");
  });

  it("longestDiverseString(1, 0...)", () => {
    const result = longestDiverseString(1, 0, 0);
    expect(result).toEqual("a");
  });

  it("longestDiverseString(0, 1...)", () => {
    const result = longestDiverseString(0, 1, 0);
    expect(result).toEqual("b");
  });
});

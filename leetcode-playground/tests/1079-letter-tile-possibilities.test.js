import { numTilePossibilities } from '../1079-letter-tile-possibilities.js';

describe('1079-letter-tile-possibilities', () => {
  it("numTilePossibilities(\"abcabcbb\")", () => {
    const result = numTilePossibilities("abcabcbb");
    expect(result).toEqual(1350);
  });

  it("numTilePossibilities(\"bbbbb\")", () => {
    const result = numTilePossibilities("bbbbb");
    expect(result).toEqual(5);
  });

  it("numTilePossibilities(\"pwwkew\")", () => {
    const result = numTilePossibilities("pwwkew");
    expect(result).toEqual(363);
  });

  it("numTilePossibilities(\"\")", () => {
    const result = numTilePossibilities("");
    expect(result).toEqual(0);
  });

  it("numTilePossibilities(\" \")", () => {
    const result = numTilePossibilities(" ");
    expect(result).toEqual(1);
  });

  it("numTilePossibilities(\"a\")", () => {
    const result = numTilePossibilities("a");
    expect(result).toEqual(1);
  });

  it("numTilePossibilities(\"aaaaaa\")", () => {
    const result = numTilePossibilities("aaaaaa");
    expect(result).toEqual(6);
  });
});

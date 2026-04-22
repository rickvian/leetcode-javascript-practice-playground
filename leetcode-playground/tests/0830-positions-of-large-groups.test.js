import { largeGroupPositions } from '../0830-positions-of-large-groups.js';

describe('0830-positions-of-large-groups', () => {
  it("largeGroupPositions(\"abcabcbb\")", () => {
    const result = largeGroupPositions("abcabcbb");
    expect(result).toEqual([]);
  });

  it("largeGroupPositions(\"bbbbb\")", () => {
    const result = largeGroupPositions("bbbbb");
    expect(result).toEqual([[0, 4]]);
  });

  it("largeGroupPositions(\"pwwkew\")", () => {
    const result = largeGroupPositions("pwwkew");
    expect(result).toEqual([]);
  });

  it("largeGroupPositions(\"\")", () => {
    const result = largeGroupPositions("");
    expect(result).toEqual([]);
  });

  it("largeGroupPositions(\" \")", () => {
    const result = largeGroupPositions(" ");
    expect(result).toEqual([]);
  });

  it("largeGroupPositions(\"a\")", () => {
    const result = largeGroupPositions("a");
    expect(result).toEqual([]);
  });

  it("largeGroupPositions(\"aaaaaa\")", () => {
    const result = largeGroupPositions("aaaaaa");
    expect(result).toEqual([[0, 5]]);
  });
});

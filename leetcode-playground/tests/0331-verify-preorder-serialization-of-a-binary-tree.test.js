import { isValidSerialization } from '../0331-verify-preorder-serialization-of-a-binary-tree.js';

describe('0331-verify-preorder-serialization-of-a-binary-tree', () => {
  it("isValidSerialization(\"abcabcbb\")", () => {
    const result = isValidSerialization("abcabcbb");
    expect(result).toEqual(false);
  });

  it("isValidSerialization(\"bbbbb\")", () => {
    const result = isValidSerialization("bbbbb");
    expect(result).toEqual(false);
  });

  it("isValidSerialization(\"pwwkew\")", () => {
    const result = isValidSerialization("pwwkew");
    expect(result).toEqual(false);
  });

  it("isValidSerialization(\"\")", () => {
    const result = isValidSerialization("");
    expect(result).toEqual(false);
  });

  it("isValidSerialization(\" \")", () => {
    const result = isValidSerialization(" ");
    expect(result).toEqual(false);
  });

  it("isValidSerialization(\"a\")", () => {
    const result = isValidSerialization("a");
    expect(result).toEqual(false);
  });

  it("isValidSerialization(\"aaaaaa\")", () => {
    const result = isValidSerialization("aaaaaa");
    expect(result).toEqual(false);
  });
});

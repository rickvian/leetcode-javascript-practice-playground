import { str2tree } from '../0536-construct-binary-tree-from-string.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0536-construct-binary-tree-from-string', () => {
  it("str2tree(\"abcabcbb\")", () => {
    const result = str2tree("abcabcbb");
    expect(treeToArray(result)).toEqual([0]);
  });

  it("str2tree(\"bbbbb\")", () => {
    const result = str2tree("bbbbb");
    expect(treeToArray(result)).toEqual([0]);
  });

  it("str2tree(\"pwwkew\")", () => {
    const result = str2tree("pwwkew");
    expect(treeToArray(result)).toEqual([0]);
  });

  it("str2tree(\"\")", () => {
    const result = str2tree("");
    expect(treeToArray(result)).toEqual([]);
  });

  it("str2tree(\" \")", () => {
    const result = str2tree(" ");
    expect(treeToArray(result)).toEqual([0]);
  });

  it("str2tree(\"a\")", () => {
    const result = str2tree("a");
    expect(treeToArray(result)).toEqual([0]);
  });

  it("str2tree(\"aaaaaa\")", () => {
    const result = str2tree("aaaaaa");
    expect(treeToArray(result)).toEqual([0]);
  });
});

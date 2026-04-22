import { areSentencesSimilar } from '../0734-sentence-similarity.js';

describe('0734-sentence-similarity', () => {
  it("areSentencesSimilar([\"great\", \"acting\", \"skill\"], [\"fine\", \"drama\", \"talent\"]...)", () => {
    const result = areSentencesSimilar(["great", "acting", "skill"], ["fine", "drama", "talent"], [["great", "fine"], ["drama", "acting"], ["skill", "talent"]]);
    expect(result).toEqual(true);
  });

  it("areSentencesSimilar([\"I\", \"love\", \"leetcode\"], [\"I\", \"love\", \"leetcode\"]...)", () => {
    const result = areSentencesSimilar(["I", "love", "leetcode"], ["I", "love", "leetcode"], []);
    expect(result).toEqual(true);
  });

  it("areSentencesSimilar([\"a\"], [\"b\"]...)", () => {
    const result = areSentencesSimilar(["a"], ["b"], [["a", "b"]]);
    expect(result).toEqual(true);
  });

  it("areSentencesSimilar([], []...)", () => {
    const result = areSentencesSimilar([], [], []);
    expect(result).toEqual(true);
  });

  it("areSentencesSimilar([\"hello\"], [\"world\"]...)", () => {
    const result = areSentencesSimilar(["hello"], ["world"], []);
    expect(result).toEqual(false);
  });

  it("areSentencesSimilar([\"x\", \"y\"], [\"x\", \"z\"]...)", () => {
    const result = areSentencesSimilar(["x", "y"], ["x", "z"], [["y", "z"]]);
    expect(result).toEqual(true);
  });
});

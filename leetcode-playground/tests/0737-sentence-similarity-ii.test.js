import { areSentencesSimilarTwo } from '../0737-sentence-similarity-ii.js';

describe('0737-sentence-similarity-ii', () => {
  it("areSentencesSimilarTwo([\"great\", \"acting\", \"skill\"], [\"fine\", \"drama\", \"talent\"]...)", () => {
    const result = areSentencesSimilarTwo(["great", "acting", "skill"], ["fine", "drama", "talent"], [["great", "fine"], ["drama", "acting"], ["skill", "talent"]]);
    expect(result).toEqual(true);
  });

  it("areSentencesSimilarTwo([\"I\", \"love\", \"leetcode\"], [\"I\", \"love\", \"leetcode\"]...)", () => {
    const result = areSentencesSimilarTwo(["I", "love", "leetcode"], ["I", "love", "leetcode"], []);
    expect(result).toEqual(true);
  });

  it("areSentencesSimilarTwo([\"a\"], [\"b\"]...)", () => {
    const result = areSentencesSimilarTwo(["a"], ["b"], [["a", "b"]]);
    expect(result).toEqual(true);
  });

  it("areSentencesSimilarTwo([], []...)", () => {
    const result = areSentencesSimilarTwo([], [], []);
    expect(result).toEqual(true);
  });

  it("areSentencesSimilarTwo([\"hello\"], [\"world\"]...)", () => {
    const result = areSentencesSimilarTwo(["hello"], ["world"], []);
    expect(result).toEqual(false);
  });

  it("areSentencesSimilarTwo([\"x\", \"y\"], [\"x\", \"z\"]...)", () => {
    const result = areSentencesSimilarTwo(["x", "y"], ["x", "z"], [["y", "z"]]);
    expect(result).toEqual(true);
  });
});

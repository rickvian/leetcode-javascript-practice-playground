import { WordDistance } from '../0244-shortest-word-distance-ii.js';

describe('0244-shortest-word-distance-ii', () => {
  it("sequence 1", () => {
    const obj = new WordDistance(["practice", "makes", "perfect", "coding", "makes"]);
    expect(obj.shortest("coding", "practice")).toEqual(3);
    expect(obj.shortest("makes", "coding")).toEqual(1);
  });

  it("sequence 2", () => {
    const obj = new WordDistance(["a", "b", "c", "a"]);
    expect(obj.shortest("a", "b")).toEqual(1);
    expect(obj.shortest("a", "c")).toEqual(1);
  });
});

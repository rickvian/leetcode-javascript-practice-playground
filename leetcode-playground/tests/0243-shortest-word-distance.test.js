import { shortestDistance } from '../0243-shortest-word-distance.js';

describe('0243-shortest-word-distance', () => {
  it("shortestDistance([\"practice\", \"makes\", \"perfect\", \"coding\", \"makes\"], \"coding\"...)", () => {
    const result = shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice");
    expect(result).toEqual(3);
  });

  it("shortestDistance([\"practice\", \"makes\", \"perfect\", \"coding\", \"makes\"], \"makes\"...)", () => {
    const result = shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "makes", "coding");
    expect(result).toEqual(1);
  });

  it("shortestDistance([\"a\", \"b\"], \"a\"...)", () => {
    const result = shortestDistance(["a", "b"], "a", "b");
    expect(result).toEqual(1);
  });
});

import { shortestWordDistance } from '../0245-shortest-word-distance-iii.js';

describe('0245-shortest-word-distance-iii', () => {
  it("shortestWordDistance([\"practice\", \"makes\", \"perfect\", \"coding\", \"makes\"], \"makes\"...)", () => {
    const result = shortestWordDistance(["practice", "makes", "perfect", "coding", "makes"], "makes", "makes");
    expect(result).toEqual(3);
  });

  it("shortestWordDistance([\"practice\", \"makes\", \"perfect\", \"coding\", \"makes\"], \"coding\"...)", () => {
    const result = shortestWordDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice");
    expect(result).toEqual(3);
  });
});

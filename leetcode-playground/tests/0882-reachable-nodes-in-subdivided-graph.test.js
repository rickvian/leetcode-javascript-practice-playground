import { reachableNodes } from '../0882-reachable-nodes-in-subdivided-graph.js';

describe('0882-reachable-nodes-in-subdivided-graph', () => {
  it("reachableNodes([[0, 1, 10], [0, 2, 1], [1, 2, 2]], 6...)", () => {
    const result = reachableNodes([[0, 1, 10], [0, 2, 1], [1, 2, 2]], 6, 3);
    expect(result).toEqual(13);
  });

  it("reachableNodes([[0, 1, 4], [1, 2, 6], [0, 2, 8], [1, 3, 1]], 10...)", () => {
    const result = reachableNodes([[0, 1, 4], [1, 2, 6], [0, 2, 8], [1, 3, 1]], 10, 4);
    expect(result).toEqual(23);
  });

  it("reachableNodes([], 0...)", () => {
    const result = reachableNodes([], 0, 1);
    expect(result).toEqual(1);
  });

  it("reachableNodes([[0, 1, 0]], 1...)", () => {
    const result = reachableNodes([[0, 1, 0]], 1, 2);
    expect(result).toEqual(2);
  });

  it("reachableNodes([[0, 1, 5], [1, 2, 5]], 5...)", () => {
    const result = reachableNodes([[0, 1, 5], [1, 2, 5]], 5, 3);
    expect(result).toEqual(6);
  });

  it("reachableNodes([[0, 1, 2], [0, 2, 3]], 4...)", () => {
    const result = reachableNodes([[0, 1, 2], [0, 2, 3]], 4, 3);
    expect(result).toEqual(8);
  });
});

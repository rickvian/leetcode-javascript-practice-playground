import { cloneGraph } from '../0133-clone-graph.js';
import { arrayToGraphNode, graphToAdjList } from './__helpers__/test_helpers.js';

describe('0133-clone-graph', () => {
  it("cloneGraph([[2, 4], [1, 3], [2, 4], [1, 3]])", () => {
    const result = cloneGraph(arrayToGraphNode([[2, 4], [1, 3], [2, 4], [1, 3]]));
    expect(graphToAdjList(result)).toEqual([[2, 4], [1, 3], [2, 4], [1, 3]]);
  });

  it("cloneGraph([[]])", () => {
    const result = cloneGraph(arrayToGraphNode([[]]));
    expect(graphToAdjList(result)).toEqual([[]]);
  });

  it("cloneGraph([[2], [1]])", () => {
    const result = cloneGraph(arrayToGraphNode([[2], [1]]));
    expect(graphToAdjList(result)).toEqual([[2], [1]]);
  });

  it("cloneGraph([[2, 3], [1, 3], [1, 2]])", () => {
    const result = cloneGraph(arrayToGraphNode([[2, 3], [1, 3], [1, 2]]));
    expect(graphToAdjList(result)).toEqual([[2, 3], [1, 3], [1, 2]]);
  });
});

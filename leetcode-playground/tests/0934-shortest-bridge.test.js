import { shortestBridge } from '../0934-shortest-bridge.js';

describe('0934-shortest-bridge', () => {
  it("shortestBridge([[1, 2], [3, 4]])", () => {
    const result = shortestBridge([[1, 2], [3, 4]]);
    expect(result).toEqual(3);
  });

  it("shortestBridge([[1]])", () => {
    const result = shortestBridge([[1]]);
    expect(result).toEqual(1);
  });

  it("shortestBridge([[]])", () => {
    const result = shortestBridge([[]]);
    expect(result).toEqual(0);
  });

  it("shortestBridge([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = shortestBridge([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(5);
  });
});

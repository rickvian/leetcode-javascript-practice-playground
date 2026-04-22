import { networkDelayTime } from '../0743-network-delay-time.js';

describe('0743-network-delay-time', () => {
  it("networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4...)", () => {
    const result = networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2);
    expect(result).toEqual(2);
  });

  it("networkDelayTime([[1, 2, 1]], 2...)", () => {
    const result = networkDelayTime([[1, 2, 1]], 2, 1);
    expect(result).toEqual(1);
  });

  it("networkDelayTime([[1, 2, 1], [2, 3, 2], [1, 3, 4]], 3...)", () => {
    const result = networkDelayTime([[1, 2, 1], [2, 3, 2], [1, 3, 4]], 3, 1);
    expect(result).toEqual(3);
  });

  it("networkDelayTime([[1, 2, 1]], 2...)", () => {
    const result = networkDelayTime([[1, 2, 1]], 2, 2);
    expect(result).toEqual(-1);
  });

  it("networkDelayTime([[1, 2, 1], [2, 3, 1], [3, 1, 1]], 3...)", () => {
    const result = networkDelayTime([[1, 2, 1], [2, 3, 1], [3, 1, 1]], 3, 1);
    expect(result).toEqual(2);
  });
});

import { reconstructQueue } from '../0406-queue-reconstruction-by-height.js';

describe('0406-queue-reconstruction-by-height', () => {
  it("reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]])", () => {
    const result = reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]);
    expect(result).toEqual([[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]]);
  });

  it("reconstructQueue([[6, 0], [5, 0], [4, 0], [3, 2], [2, 2], [1, 4]])", () => {
    const result = reconstructQueue([[6, 0], [5, 0], [4, 0], [3, 2], [2, 2], [1, 4]]);
    expect(result).toEqual([[4, 0], [5, 0], [2, 2], [3, 2], [1, 4], [6, 0]]);
  });

  it("reconstructQueue([[2, 4], [3, 4], [9, 0], [0, 6], [7, 1], [6, 0], [7, 3], [2, 5], [1, 1], [3, 0]])", () => {
    const result = reconstructQueue([[2, 4], [3, 4], [9, 0], [0, 6], [7, 1], [6, 0], [7, 3], [2, 5], [1, 1], [3, 0]]);
    expect(result).toEqual([[3, 0], [1, 1], [6, 0], [9, 0], [7, 1], [2, 4], [0, 6], [2, 5], [3, 4], [7, 3]]);
  });

  it("reconstructQueue([[1, 0]])", () => {
    const result = reconstructQueue([[1, 0]]);
    expect(result).toEqual([[1, 0]]);
  });

  it("reconstructQueue([[1, 0], [1, 1]])", () => {
    const result = reconstructQueue([[1, 0], [1, 1]]);
    expect(result).toEqual([[1, 0], [1, 1]]);
  });
});

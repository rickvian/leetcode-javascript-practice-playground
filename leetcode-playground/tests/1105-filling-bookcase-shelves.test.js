import { minHeightShelves } from '../1105-filling-bookcase-shelves.js';

describe('1105-filling-bookcase-shelves', () => {
  it("minHeightShelves([[1, 2, 3], [4, 5, 6]], 2)", () => {
    const result = minHeightShelves([[1, 2, 3], [4, 5, 6]], 2);
    expect(result).toEqual(7);
  });

  it("minHeightShelves([[1, 2], [3, 4]], 5)", () => {
    const result = minHeightShelves([[1, 2], [3, 4]], 5);
    expect(result).toEqual(4);
  });

  it("minHeightShelves([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 15)", () => {
    const result = minHeightShelves([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 15);
    expect(result).toEqual(8);
  });
});

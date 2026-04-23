import { probabilityOfHeads } from '../1230-toss-strange-coins.js';

describe('1230-toss-strange-coins', () => {
  it("probabilityOfHeads([2, 7, 11, 15], 9)", () => {
    const result = probabilityOfHeads([2, 7, 11, 15], 9);
    expect(result).toEqual(0);
  });

  it("probabilityOfHeads([3, 2, 4], 6)", () => {
    const result = probabilityOfHeads([3, 2, 4], 6);
    expect(result).toEqual(0);
  });

  it("probabilityOfHeads([3, 3], 6)", () => {
    const result = probabilityOfHeads([3, 3], 6);
    expect(result).toEqual(0);
  });

  it("probabilityOfHeads([1, 2], 3)", () => {
    const result = probabilityOfHeads([1, 2], 3);
    expect(result).toEqual(0);
  });

  it("probabilityOfHeads([0, 4, 3, 0], 0)", () => {
    const result = probabilityOfHeads([0, 4, 3, 0], 0);
    expect(result).toEqual(6);
  });
});

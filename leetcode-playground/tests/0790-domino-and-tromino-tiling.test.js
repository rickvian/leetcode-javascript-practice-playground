import { numTilings } from '../0790-domino-and-tromino-tiling.js';

describe('0790-domino-and-tromino-tiling', () => {
  it("numTilings(1)", () => {
    const result = numTilings(1);
    expect(result).toEqual(1);
  });

  it("numTilings(2)", () => {
    const result = numTilings(2);
    expect(result).toEqual(2);
  });

  it("numTilings(3)", () => {
    const result = numTilings(3);
    expect(result).toEqual(5);
  });

  it("numTilings(4)", () => {
    const result = numTilings(4);
    expect(result).toEqual(11);
  });

  it("numTilings(5)", () => {
    const result = numTilings(5);
    expect(result).toEqual(24);
  });

  it("numTilings(10)", () => {
    const result = numTilings(10);
    expect(result).toEqual(1255);
  });
});

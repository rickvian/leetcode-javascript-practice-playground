import { rearrangeBarcodes } from '../1054-distant-barcodes.js';

describe('1054-distant-barcodes', () => {
  it("rearrangeBarcodes([1, 2, 3, 4, 5])", () => {
    const result = rearrangeBarcodes([1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 4, 2, 5, 3]);
  });

  it("rearrangeBarcodes([])", () => {
    const result = rearrangeBarcodes([]);
    expect(result).toEqual([]);
  });

  it("rearrangeBarcodes([1])", () => {
    const result = rearrangeBarcodes([1]);
    expect(result).toEqual([1]);
  });

  it("rearrangeBarcodes([1, 1])", () => {
    const result = rearrangeBarcodes([1, 1]);
    expect(result).toEqual([1, 1]);
  });

  it("rearrangeBarcodes([3, 1, 4, 1, 5])", () => {
    const result = rearrangeBarcodes([3, 1, 4, 1, 5]);
    expect(result).toEqual([1, 4, 1, 5, 3]);
  });

  it("rearrangeBarcodes([-1, 0, 1])", () => {
    const result = rearrangeBarcodes([-1, 0, 1]);
    expect(result).toEqual([-1, 1, 0]);
  });
});

import { allCellsDistOrder } from '../1030-matrix-cells-in-distance-order.js';

describe('1030-matrix-cells-in-distance-order', () => {
  it("allCellsDistOrder([1, 2, 3])", () => {
    const result = allCellsDistOrder([1, 2, 3]);
    expect(result).toEqual([]);
  });

  it("allCellsDistOrder([])", () => {
    const result = allCellsDistOrder([]);
    expect(result).toEqual([]);
  });

  it("allCellsDistOrder([0])", () => {
    const result = allCellsDistOrder([0]);
    expect(result).toEqual([]);
  });

  it("allCellsDistOrder([-1, 0, 1])", () => {
    const result = allCellsDistOrder([-1, 0, 1]);
    expect(result).toEqual([]);
  });
});

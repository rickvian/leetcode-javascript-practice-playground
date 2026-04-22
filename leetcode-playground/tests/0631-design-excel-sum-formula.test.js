import { Excel } from '../0631-design-excel-sum-formula.js';

describe('0631-design-excel-sum-formula', () => {
  it("sequence 1", () => {
    const obj = new Excel(3, "C");
    obj.set(1, "A", 2);
    obj.set(2, "B", 2);
    expect(obj.get(1, "A")).toEqual(2);
    expect(obj.sum(3, "C", ["A1", "A1:B2"])).toEqual(6);
    obj.set(2, "B", 3);
    expect(obj.get(3, "C")).toEqual(7);
  });

  it("sequence 2", () => {
    const obj = new Excel(5, "E");
    obj.set(1, "A", 5);
    obj.set(1, "B", 4);
    expect(obj.get(1, "A")).toEqual(5);
    expect(obj.sum(2, "A", ["A1"])).toEqual(5);
    expect(obj.get(2, "A")).toEqual(5);
  });
});

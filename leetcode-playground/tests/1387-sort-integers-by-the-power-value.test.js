import { getKth } from '../1387-sort-integers-by-the-power-value.js';

describe('1387-sort-integers-by-the-power-value', () => {
  it("getKth(12, 15...)", () => {
    const result = getKth(12, 15, 2);
    expect(result).toEqual(13);
  });

  it("getKth(7, 11...)", () => {
    const result = getKth(7, 11, 4);
    expect(result).toEqual(7);
  });

  it("getKth(1, 1...)", () => {
    const result = getKth(1, 1, 1);
    expect(result).toEqual(1);
  });

  it("getKth(10, 20...)", () => {
    const result = getKth(10, 20, 5);
    expect(result).toEqual(13);
  });

  it("getKth(1, 1000...)", () => {
    const result = getKth(1, 1000, 777);
    expect(result).toEqual(570);
  });

  it("getKth(1, 10...)", () => {
    const result = getKth(1, 10, 1);
    expect(result).toEqual(1);
  });
});

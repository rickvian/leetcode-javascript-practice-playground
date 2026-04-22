import { constructRectangle } from '../0492-construct-the-rectangle.js';

describe('0492-construct-the-rectangle', () => {
  it("constructRectangle(4)", () => {
    const result = constructRectangle(4);
    expect(result).toEqual([2, 2]);
  });

  it("constructRectangle(6)", () => {
    const result = constructRectangle(6);
    expect(result).toEqual([3, 2]);
  });

  it("constructRectangle(12)", () => {
    const result = constructRectangle(12);
    expect(result).toEqual([4, 3]);
  });

  it("constructRectangle(24)", () => {
    const result = constructRectangle(24);
    expect(result).toEqual([6, 4]);
  });

  it("constructRectangle(25)", () => {
    const result = constructRectangle(25);
    expect(result).toEqual([5, 5]);
  });

  it("constructRectangle(100)", () => {
    const result = constructRectangle(100);
    expect(result).toEqual([10, 10]);
  });
});

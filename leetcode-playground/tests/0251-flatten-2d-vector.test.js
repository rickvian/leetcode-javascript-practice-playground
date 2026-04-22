import { Vector2D } from '../0251-flatten-2d-vector.js';

describe('0251-flatten-2d-vector', () => {
  it("sequence 1", () => {
    const obj = new Vector2D([4, 2, 7, 1, 3]);
    expect(obj.hasNext()).toEqual(true);
    obj.next();
    expect(obj.hasNext()).toEqual(true);
    obj.next();
    expect(obj.hasNext()).toEqual(true);
    obj.next();
  });

  it("sequence 2", () => {
    const obj = new Vector2D([3, 1, 2]);
    expect(obj.hasNext()).toEqual(true);
    obj.next();
    obj.next();
    expect(obj.hasNext()).toEqual(true);
  });

  it("sequence 3", () => {
    const obj = new Vector2D([7]);
    expect(obj.hasNext()).toEqual(true);
    obj.next();
    expect(obj.hasNext()).toEqual(true);
  });
});

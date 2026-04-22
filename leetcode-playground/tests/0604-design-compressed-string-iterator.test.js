import { StringIterator } from '../0604-design-compressed-string-iterator.js';

describe('0604-design-compressed-string-iterator', () => {
  it("sequence 1", () => {
    const obj = new StringIterator([4, 2, 7, 1, 3]);
    expect(obj.hasNext()).toEqual(true);
    expect(obj.next()).toEqual(4);
    expect(obj.hasNext()).toEqual(true);
    expect(obj.next()).toEqual(4);
    expect(obj.hasNext()).toEqual(true);
    expect(obj.next()).toEqual(4);
  });

  it("sequence 2", () => {
    const obj = new StringIterator([3, 1, 2]);
    expect(obj.hasNext()).toEqual(true);
    expect(obj.next()).toEqual(3);
    expect(obj.next()).toEqual(3);
    expect(obj.hasNext()).toEqual(true);
  });

  it("sequence 3", () => {
    const obj = new StringIterator([7]);
    expect(obj.hasNext()).toEqual(true);
    expect(obj.next()).toEqual(7);
    expect(obj.hasNext()).toEqual(true);
  });
});

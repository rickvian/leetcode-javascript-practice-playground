import { CombinationIterator } from '../1286-iterator-for-combination.js';

describe('1286-iterator-for-combination', () => {
  it("sequence 1", () => {
    const obj = new CombinationIterator([4, 2, 7, 1, 3]);
    expect(obj.hasNext()).toEqual(true);
    expect(obj.next()).toEqual("4");
    expect(obj.hasNext()).toEqual(false);
    expect(obj.next()).toEqual("4");
    expect(obj.hasNext()).toEqual(false);
    expect(obj.next()).toEqual("4");
  });

  it("sequence 2", () => {
    const obj = new CombinationIterator([3, 1, 2]);
    expect(obj.hasNext()).toEqual(true);
    expect(obj.next()).toEqual("3");
    expect(obj.next()).toEqual("3");
    expect(obj.hasNext()).toEqual(false);
  });

  it("sequence 3", () => {
    const obj = new CombinationIterator([7]);
    expect(obj.hasNext()).toEqual(true);
    expect(obj.next()).toEqual("7");
    expect(obj.hasNext()).toEqual(false);
  });
});

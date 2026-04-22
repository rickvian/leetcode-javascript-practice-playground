import { MapSum } from '../0677-map-sum-pairs.js';

describe('0677-map-sum-pairs', () => {
  it("sequence 1", () => {
    const obj = new MapSum();
    obj.insert("apple", 3);
    expect(obj.sum("ap")).toEqual(3);
    obj.insert("app", 2);
    expect(obj.sum("ap")).toEqual(5);
  });

  it("sequence 2", () => {
    const obj = new MapSum();
    obj.insert("aa", 3);
    obj.insert("aa", 2);
    expect(obj.sum("a")).toEqual(2);
  });

  it("sequence 3", () => {
    const obj = new MapSum();
    obj.insert("abc", 1);
    obj.insert("abd", 2);
    obj.insert("bc", 5);
    expect(obj.sum("ab")).toEqual(3);
    expect(obj.sum("b")).toEqual(5);
    expect(obj.sum("z")).toEqual(0);
  });
});

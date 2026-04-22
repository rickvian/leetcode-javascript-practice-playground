import { MyHashSet } from '../0705-design-hashset.js';

describe('0705-design-hashset', () => {
  it("sequence 1", () => {
    const obj = new MyHashSet();
    obj.add(1);
    obj.remove(1);
    expect(obj.contains(1)).toEqual(false);
  });
});

import { RandomizedSet } from '../0380-insert-delete-getrandom-o1.js';

describe('0380-insert-delete-getrandom-o1', () => {
  it("sequence 1", () => {
    const obj = new RandomizedSet();
    expect(obj.insert(1)).toEqual(true);
    expect(obj.remove(1)).toEqual(true);
    obj.getRandom();
  });
});

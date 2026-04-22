import { RandomizedCollection } from '../0381-insert-delete-getrandom-o1-duplicates-allowed.js';

describe('0381-insert-delete-getrandom-o1-duplicates-allowed', () => {
  it("sequence 1", () => {
    const obj = new RandomizedCollection();
    expect(obj.insert(1)).toEqual(true);
    expect(obj.remove(1)).toEqual(true);
    obj.getRandom();
  });
});

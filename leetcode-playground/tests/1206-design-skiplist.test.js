import { Skiplist } from '../1206-design-skiplist.js';

describe('1206-design-skiplist', () => {
  it("sequence 1", () => {
    const obj = new Skiplist();
    expect(obj.search(1)).toEqual(false);
    obj.add(1);
    expect(obj.erase(1)).toEqual(true);
  });
});

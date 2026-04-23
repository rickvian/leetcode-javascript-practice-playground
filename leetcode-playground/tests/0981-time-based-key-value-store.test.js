import { TimeMap } from '../0981-time-based-key-value-store.js';

describe('0981-time-based-key-value-store', () => {
  it("sequence 1", () => {
    const obj = new TimeMap();
    obj.set(1, 1, 1);
    expect(obj.get(1, 1)).toEqual(1);
  });
});

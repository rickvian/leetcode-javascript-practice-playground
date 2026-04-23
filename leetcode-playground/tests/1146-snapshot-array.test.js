import { SnapshotArray } from '../1146-snapshot-array.js';

describe('1146-snapshot-array', () => {
  it("sequence 1", () => {
    const obj = new SnapshotArray();
    obj.set(1, 1);
    expect(obj.snap()).toEqual(0);
    expect(obj.get(1, 1)).toEqual(1);
  });
});

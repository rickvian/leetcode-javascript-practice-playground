import { MajorityChecker } from '../1157-online-majority-element-in-subarray.js';

describe('1157-online-majority-element-in-subarray', () => {
  it("sequence 1", () => {
    const obj = new MajorityChecker([1, 1, 2, 2, 1, 1]);
    expect(obj.query(0, 5, 4)).toEqual(1);
  });

  it("sequence 2", () => {
    const obj = new MajorityChecker([1, 2, 3, 2, 1, 2]);
    expect(obj.query(0, 5, 3)).toEqual(2);
    expect(obj.query(1, 3, 2)).toEqual(2);
  });

  it("sequence 3", () => {
    const obj = new MajorityChecker([1, 1, 1, 1, 1]);
    expect(obj.query(0, 4, 3)).toEqual(1);
  });

  it("sequence 4", () => {
    const obj = new MajorityChecker([3, 3, 3, 3, 3]);
    expect(obj.query(0, 4, 5)).toEqual(3);
  });
});

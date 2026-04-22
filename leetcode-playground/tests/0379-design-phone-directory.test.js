import { PhoneDirectory } from '../0379-design-phone-directory.js';

describe('0379-design-phone-directory', () => {
  it("sequence 1", () => {
    const obj = new PhoneDirectory(3);
    expect(obj.get()).toEqual(0);
    expect(obj.get()).toEqual(1);
    expect(obj.check(2)).toEqual(true);
    expect(obj.get()).toEqual(2);
    obj.release(2);
    expect(obj.check(2)).toEqual(true);
    expect(obj.get()).toEqual(2);
  });
});

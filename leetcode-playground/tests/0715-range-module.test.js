import { RangeModule } from '../0715-range-module.js';

describe('0715-range-module', () => {
  it("sequence 1", () => {
    const obj = new RangeModule();
    obj.addRange(1, 1);
    expect(obj.queryRange(1, 1)).toEqual(true);
    obj.removeRange(1, 1);
  });
});

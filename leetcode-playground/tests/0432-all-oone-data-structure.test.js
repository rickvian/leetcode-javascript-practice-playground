import { AllOne } from '../0432-all-oone-data-structure.js';

describe('0432-all-oone-data-structure', () => {
  it("sequence 1", () => {
    const obj = new AllOne();
    obj.inc(1);
    obj.dec(1);
    expect(obj.getMaxKey()).toEqual("");
    expect(obj.getMinKey()).toEqual("");
  });
});

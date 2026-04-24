import { UndergroundSystem } from '../1396-design-underground-system.js';

describe('1396-design-underground-system', () => {
  it("sequence 1", () => {
    const obj = new UndergroundSystem();
    obj.checkIn(1, 1, 1);
    obj.checkOut(1, 1, 1);
    expect(obj.getAverageTime(1, 1)).toEqual(0);
  });
});

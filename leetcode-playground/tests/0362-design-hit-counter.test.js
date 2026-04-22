import { HitCounter } from '../0362-design-hit-counter.js';

describe('0362-design-hit-counter', () => {
  it("sequence 1", () => {
    const obj = new HitCounter();
    obj.hit(1);
    expect(obj.getHits(1)).toEqual(1);
  });
});

import { MovingAverage } from '../0346-moving-average-from-data-stream.js';

describe('0346-moving-average-from-data-stream', () => {
  it("sequence 1", () => {
    const obj = new MovingAverage();
    expect(obj.next(1)).toEqual(1);
  });
});

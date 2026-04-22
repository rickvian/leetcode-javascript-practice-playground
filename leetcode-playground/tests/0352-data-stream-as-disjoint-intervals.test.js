import { SummaryRanges } from '../0352-data-stream-as-disjoint-intervals.js';

describe('0352-data-stream-as-disjoint-intervals', () => {
  it("sequence 1", () => {
    const obj = new SummaryRanges();
    obj.addNum(1);
    expect(obj.getIntervals()).toEqual([[1, 1]]);
  });
});

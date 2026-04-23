import { RecentCounter } from '../0933-number-of-recent-calls.js';

describe('0933-number-of-recent-calls', () => {
  it("sequence 1", () => {
    const obj = new RecentCounter();
    expect(obj.ping(1)).toEqual(1);
  });
});

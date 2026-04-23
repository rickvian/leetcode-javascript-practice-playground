import { TweetCounts } from '../1348-tweet-counts-per-frequency.js';

describe('1348-tweet-counts-per-frequency', () => {
  it("sequence 1", () => {
    const obj = new TweetCounts();
    obj.recordTweet(1, 1);
    expect(obj.getTweetCountsPerFrequency(1, 1, 1, 1)).toEqual([1]);
  });
});

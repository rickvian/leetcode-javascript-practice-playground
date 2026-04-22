import { Twitter } from '../0355-design-twitter.js';

describe('0355-design-twitter', () => {
  it("sequence 1", () => {
    const obj = new Twitter();
    obj.postTweet(1, 1);
    expect(obj.getNewsFeed(1)).toEqual([1]);
    obj.follow(1, 1);
    obj.unfollow(1, 1);
  });
});

import { numFriendRequests } from '../0825-friends-of-appropriate-ages.js';

describe('0825-friends-of-appropriate-ages', () => {
  it("numFriendRequests([1, 2, 3, 4, 5])", () => {
    const result = numFriendRequests([1, 2, 3, 4, 5]);
    expect(result).toEqual(0);
  });

  it("numFriendRequests([])", () => {
    const result = numFriendRequests([]);
    expect(result).toEqual(0);
  });

  it("numFriendRequests([1])", () => {
    const result = numFriendRequests([1]);
    expect(result).toEqual(0);
  });

  it("numFriendRequests([1, 1])", () => {
    const result = numFriendRequests([1, 1]);
    expect(result).toEqual(0);
  });

  it("numFriendRequests([3, 1, 4, 1, 5])", () => {
    const result = numFriendRequests([3, 1, 4, 1, 5]);
    expect(result).toEqual(0);
  });

  it("numFriendRequests([-1, 0, 1])", () => {
    const result = numFriendRequests([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});

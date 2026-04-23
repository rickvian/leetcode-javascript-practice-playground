import { earliestAcq } from '../1101-the-earliest-moment-when-everyone-become-friends.js';

describe('1101-the-earliest-moment-when-everyone-become-friends', () => {
  it("earliestAcq([[1, 2, 3], [4, 5, 6]], 2)", () => {
    const result = earliestAcq([[1, 2, 3], [4, 5, 6]], 2);
    expect(result).toEqual(-1);
  });

  it("earliestAcq([[1, 2], [3, 4]], 5)", () => {
    const result = earliestAcq([[1, 2], [3, 4]], 5);
    expect(result).toEqual(-1);
  });

  it("earliestAcq([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 15)", () => {
    const result = earliestAcq([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 15);
    expect(result).toEqual(-1);
  });
});

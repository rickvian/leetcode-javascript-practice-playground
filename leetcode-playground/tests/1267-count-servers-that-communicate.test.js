import { countServers } from '../1267-count-servers-that-communicate.js';

describe('1267-count-servers-that-communicate', () => {
  it("countServers([[1, 2], [3, 4]])", () => {
    const result = countServers([[1, 2], [3, 4]]);
    expect(result).toEqual(4);
  });

  it("countServers([[1]])", () => {
    const result = countServers([[1]]);
    expect(result).toEqual(0);
  });

  it("countServers([[]])", () => {
    const result = countServers([[]]);
    expect(result).toEqual(0);
  });

  it("countServers([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = countServers([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(9);
  });
});

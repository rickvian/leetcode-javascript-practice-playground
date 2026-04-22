import { leastBricks } from '../0554-brick-wall.js';

describe('0554-brick-wall', () => {
  it("leastBricks([[1, 2], [3, 4]])", () => {
    const result = leastBricks([[1, 2], [3, 4]]);
    expect(result).toEqual(1);
  });

  it("leastBricks([[1]])", () => {
    const result = leastBricks([[1]]);
    expect(result).toEqual(1);
  });

  it("leastBricks([[]])", () => {
    const result = leastBricks([[]]);
    expect(result).toEqual(1);
  });

  it("leastBricks([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = leastBricks([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(2);
  });
});

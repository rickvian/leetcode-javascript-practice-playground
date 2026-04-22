import { intersectionSizeTwo } from '../0757-set-intersection-size-at-least-two.js';

describe('0757-set-intersection-size-at-least-two', () => {
  it("intersectionSizeTwo([[1, 2], [3, 4]])", () => {
    const result = intersectionSizeTwo([[1, 2], [3, 4]]);
    expect(result).toEqual(4);
  });

  it("intersectionSizeTwo([[1]])", () => {
    const result = intersectionSizeTwo([[1]]);
    expect(result).toEqual(2);
  });

  it("intersectionSizeTwo([[]])", () => {
    const result = intersectionSizeTwo([[]]);
    expect(result).toEqual(2);
  });

  it("intersectionSizeTwo([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = intersectionSizeTwo([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(6);
  });
});

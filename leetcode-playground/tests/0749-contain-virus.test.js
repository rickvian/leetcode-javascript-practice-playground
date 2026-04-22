import { containVirus } from '../0749-contain-virus.js';

describe('0749-contain-virus', () => {
  it("containVirus([[1, 2], [3, 4]])", () => {
    const result = containVirus([[1, 2], [3, 4]]);
    expect(result).toEqual(0);
  });

  it("containVirus([[1]])", () => {
    const result = containVirus([[1]]);
    expect(result).toEqual(0);
  });

  it("containVirus([[]])", () => {
    const result = containVirus([[]]);
    expect(result).toEqual(0);
  });

  it("containVirus([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = containVirus([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(0);
  });
});

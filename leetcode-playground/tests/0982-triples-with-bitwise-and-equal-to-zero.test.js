import { countTriplets } from '../0982-triples-with-bitwise-and-equal-to-zero.js';

describe('0982-triples-with-bitwise-and-equal-to-zero', () => {
  it("countTriplets([1, 2, 3, 4, 5])", () => {
    const result = countTriplets([1, 2, 3, 4, 5]);
    expect(result).toEqual(84);
  });

  it("countTriplets([])", () => {
    const result = countTriplets([]);
    expect(result).toEqual(0);
  });

  it("countTriplets([1])", () => {
    const result = countTriplets([1]);
    expect(result).toEqual(0);
  });

  it("countTriplets([1, 1])", () => {
    const result = countTriplets([1, 1]);
    expect(result).toEqual(0);
  });

  it("countTriplets([3, 1, 4, 1, 5])", () => {
    const result = countTriplets([3, 1, 4, 1, 5]);
    expect(result).toEqual(54);
  });

  it("countTriplets([-1, 0, 1])", () => {
    const result = countTriplets([-1, 0, 1]);
    expect(result).toEqual(19);
  });
});

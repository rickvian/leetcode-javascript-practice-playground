import { findItinerary } from '../0332-reconstruct-itinerary.js';

describe('0332-reconstruct-itinerary', () => {
  it("findItinerary([])", () => {
    const result = findItinerary([]);
    expect(result).toEqual(["JFK"]);
  });
});

import { distanceBetweenBusStops } from '../1184-distance-between-bus-stops.js';

describe('1184-distance-between-bus-stops', () => {
  it("distanceBetweenBusStops([1, 2, 3])", () => {
    const result = distanceBetweenBusStops([1, 2, 3]);
    expect(result).toEqual(0);
  });

  it("distanceBetweenBusStops([])", () => {
    const result = distanceBetweenBusStops([]);
    expect(result).toEqual(0);
  });

  it("distanceBetweenBusStops([0])", () => {
    const result = distanceBetweenBusStops([0]);
    expect(result).toEqual(0);
  });

  it("distanceBetweenBusStops([-1, 0, 1])", () => {
    const result = distanceBetweenBusStops([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});

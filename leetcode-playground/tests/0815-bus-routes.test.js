import { numBusesToDestination } from '../0815-bus-routes.js';

describe('0815-bus-routes', () => {
  it("numBusesToDestination([1, 2, 3])", () => {
    const result = numBusesToDestination([1, 2, 3]);
    expect(result).toEqual(0);
  });

  it("numBusesToDestination([])", () => {
    const result = numBusesToDestination([]);
    expect(result).toEqual(0);
  });

  it("numBusesToDestination([0])", () => {
    const result = numBusesToDestination([0]);
    expect(result).toEqual(0);
  });

  it("numBusesToDestination([-1, 0, 1])", () => {
    const result = numBusesToDestination([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});

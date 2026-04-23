import { nthPersonGetsNthSeat } from '../1227-airplane-seat-assignment-probability.js';

describe('1227-airplane-seat-assignment-probability', () => {
  it("nthPersonGetsNthSeat(121)", () => {
    const result = nthPersonGetsNthSeat(121);
    expect(result).toEqual(0.5);
  });

  it("nthPersonGetsNthSeat(-121)", () => {
    const result = nthPersonGetsNthSeat(-121);
    expect(result).toEqual(0.5);
  });

  it("nthPersonGetsNthSeat(10)", () => {
    const result = nthPersonGetsNthSeat(10);
    expect(result).toEqual(0.5);
  });

  it("nthPersonGetsNthSeat(0)", () => {
    const result = nthPersonGetsNthSeat(0);
    expect(result).toEqual(0.5);
  });

  it("nthPersonGetsNthSeat(-1)", () => {
    const result = nthPersonGetsNthSeat(-1);
    expect(result).toEqual(0.5);
  });

  it("nthPersonGetsNthSeat(1534236469)", () => {
    const result = nthPersonGetsNthSeat(1534236469);
    expect(result).toEqual(0.5);
  });
});

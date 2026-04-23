import { knightDialer } from '../0935-knight-dialer.js';

describe('0935-knight-dialer', () => {
  it("knightDialer(1)", () => {
    const result = knightDialer(1);
    expect(result).toEqual(10);
  });

  it("knightDialer(2)", () => {
    const result = knightDialer(2);
    expect(result).toEqual(20);
  });

  it("knightDialer(3)", () => {
    const result = knightDialer(3);
    expect(result).toEqual(46);
  });

  it("knightDialer(4)", () => {
    const result = knightDialer(4);
    expect(result).toEqual(104);
  });

  it("knightDialer(5)", () => {
    const result = knightDialer(5);
    expect(result).toEqual(240);
  });

  it("knightDialer(6)", () => {
    const result = knightDialer(6);
    expect(result).toEqual(544);
  });
});

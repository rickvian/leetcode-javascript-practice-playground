import { readBinaryWatch } from '../0401-binary-watch.js';

describe('0401-binary-watch', () => {
  it("readBinaryWatch(121)", () => {
    const result = readBinaryWatch(121);
    expect(result).toEqual([]);
  });

  it("readBinaryWatch(-121)", () => {
    const result = readBinaryWatch(-121);
    expect(result).toEqual([]);
  });

  it("readBinaryWatch(10)", () => {
    const result = readBinaryWatch(10);
    expect(result).toEqual([]);
  });

  it("readBinaryWatch(0)", () => {
    const result = readBinaryWatch(0);
    expect(result).toEqual(["0:00"]);
  });

  it("readBinaryWatch(-1)", () => {
    const result = readBinaryWatch(-1);
    expect(result).toEqual([]);
  });

  it("readBinaryWatch(1534236469)", () => {
    const result = readBinaryWatch(1534236469);
    expect(result).toEqual([]);
  });
});

import { minArea } from '../0302-smallest-rectangle-enclosing-black-pixels.js';

describe('0302-smallest-rectangle-enclosing-black-pixels', () => {
  it("minArea([[\"0\", \"0\", \"1\", \"0\"], [\"0\", \"1\", \"1\", \"0\"], [\"0\", \"1\", \"0\", \"0\"]], 0...)", () => {
    const result = minArea([["0", "0", "1", "0"], ["0", "1", "1", "0"], ["0", "1", "0", "0"]], 0, 2);
    expect(result).toEqual(6);
  });

  it("minArea([[\"1\"]], 0...)", () => {
    const result = minArea([["1"]], 0, 0);
    expect(result).toEqual(1);
  });
});

import { exclusiveTime } from '../0636-exclusive-time-of-functions.js';

describe('0636-exclusive-time-of-functions', () => {
  it("exclusiveTime(2, [\"0:start:0\", \"1:start:2\", \"1:end:5\", \"0:end:6\"])", () => {
    const result = exclusiveTime(2, ["0:start:0", "1:start:2", "1:end:5", "0:end:6"]);
    expect(result).toEqual([3, 4]);
  });

  it("exclusiveTime(1, [\"0:start:0\", \"0:start:2\", \"0:end:5\", \"0:end:7\"])", () => {
    const result = exclusiveTime(1, ["0:start:0", "0:start:2", "0:end:5", "0:end:7"]);
    expect(result).toEqual([8]);
  });

  it("exclusiveTime(2, [\"0:start:0\", \"0:end:0\", \"1:start:1\", \"1:end:1\"])", () => {
    const result = exclusiveTime(2, ["0:start:0", "0:end:0", "1:start:1", "1:end:1"]);
    expect(result).toEqual([1, 1]);
  });

  it("exclusiveTime(1, [\"0:start:0\", \"0:end:0\"])", () => {
    const result = exclusiveTime(1, ["0:start:0", "0:end:0"]);
    expect(result).toEqual([1]);
  });

  it("exclusiveTime(2, [\"0:start:0\", \"1:start:2\", \"1:end:3\", \"0:end:4\"])", () => {
    const result = exclusiveTime(2, ["0:start:0", "1:start:2", "1:end:3", "0:end:4"]);
    expect(result).toEqual([3, 2]);
  });
});

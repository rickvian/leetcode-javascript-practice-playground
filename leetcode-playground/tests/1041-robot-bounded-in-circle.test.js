import { isRobotBounded } from '../1041-robot-bounded-in-circle.js';

describe('1041-robot-bounded-in-circle', () => {
  it("isRobotBounded(\"abcabcbb\")", () => {
    const result = isRobotBounded("abcabcbb");
    expect(result).toEqual(true);
  });

  it("isRobotBounded(\"bbbbb\")", () => {
    const result = isRobotBounded("bbbbb");
    expect(result).toEqual(true);
  });

  it("isRobotBounded(\"pwwkew\")", () => {
    const result = isRobotBounded("pwwkew");
    expect(result).toEqual(true);
  });

  it("isRobotBounded(\"\")", () => {
    const result = isRobotBounded("");
    expect(result).toEqual(true);
  });

  it("isRobotBounded(\" \")", () => {
    const result = isRobotBounded(" ");
    expect(result).toEqual(true);
  });

  it("isRobotBounded(\"a\")", () => {
    const result = isRobotBounded("a");
    expect(result).toEqual(true);
  });

  it("isRobotBounded(\"aaaaaa\")", () => {
    const result = isRobotBounded("aaaaaa");
    expect(result).toEqual(true);
  });
});

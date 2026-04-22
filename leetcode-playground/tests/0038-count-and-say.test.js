import { countAndSay } from '../0038-count-and-say.js';

describe('0038-count-and-say', () => {
  it("countAndSay(1)", () => {
    const result = countAndSay(1);
    expect(result).toEqual("1");
  });

  it("countAndSay(2)", () => {
    const result = countAndSay(2);
    expect(result).toEqual("11");
  });

  it("countAndSay(3)", () => {
    const result = countAndSay(3);
    expect(result).toEqual("21");
  });

  it("countAndSay(4)", () => {
    const result = countAndSay(4);
    expect(result).toEqual("1211");
  });

  it("countAndSay(5)", () => {
    const result = countAndSay(5);
    expect(result).toEqual("111221");
  });

  it("countAndSay(6)", () => {
    const result = countAndSay(6);
    expect(result).toEqual("312211");
  });
});

import { orderlyQueue } from '../0899-orderly-queue.js';

describe('0899-orderly-queue', () => {
  it("orderlyQueue(\"abcdef\", 2)", () => {
    const result = orderlyQueue("abcdef", 2);
    expect(result).toEqual("abcdef");
  });

  it("orderlyQueue(\"\", 1)", () => {
    const result = orderlyQueue("", 1);
    expect(result).toEqual("");
  });

  it("orderlyQueue(\"a\", 1)", () => {
    const result = orderlyQueue("a", 1);
    expect(result).toEqual("a");
  });

  it("orderlyQueue(\"abba\", 3)", () => {
    const result = orderlyQueue("abba", 3);
    expect(result).toEqual("aabb");
  });

  it("orderlyQueue(\"  hello  \", 2)", () => {
    const result = orderlyQueue("  hello  ", 2);
    expect(result).toEqual("    ehllo");
  });
});

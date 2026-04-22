import { ipToCIDR } from '../0751-ip-to-cidr.js';

describe('0751-ip-to-cidr', () => {
  it("ipToCIDR(\"abcdef\", 2)", () => {
    const result = ipToCIDR("abcdef", 2);
    expect(result).toEqual(["0.0.0.0/31"]);
  });

  it("ipToCIDR(\"\", 1)", () => {
    const result = ipToCIDR("", 1);
    expect(result).toEqual(["0.0.0.0/32"]);
  });

  it("ipToCIDR(\"a\", 1)", () => {
    const result = ipToCIDR("a", 1);
    expect(result).toEqual(["0.0.0.0/32"]);
  });

  it("ipToCIDR(\"abba\", 3)", () => {
    const result = ipToCIDR("abba", 3);
    expect(result).toEqual(["0.0.0.0/31", "0.0.0.0/32"]);
  });

  it("ipToCIDR(\"  hello  \", 2)", () => {
    const result = ipToCIDR("  hello  ", 2);
    expect(result).toEqual(["0.0.0.0/31"]);
  });
});

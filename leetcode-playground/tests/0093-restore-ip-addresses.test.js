import { restoreIpAddresses } from '../0093-restore-ip-addresses.js';

describe('0093-restore-ip-addresses', () => {
  it("restoreIpAddresses(\"abcabcbb\")", () => {
    const result = restoreIpAddresses("abcabcbb");
    expect(result).toEqual([]);
  });

  it("restoreIpAddresses(\"bbbbb\")", () => {
    const result = restoreIpAddresses("bbbbb");
    expect(result).toEqual([]);
  });

  it("restoreIpAddresses(\"pwwkew\")", () => {
    const result = restoreIpAddresses("pwwkew");
    expect(result).toEqual([]);
  });

  it("restoreIpAddresses(\"\")", () => {
    const result = restoreIpAddresses("");
    expect(result).toEqual([]);
  });

  it("restoreIpAddresses(\" \")", () => {
    const result = restoreIpAddresses(" ");
    expect(result).toEqual([]);
  });

  it("restoreIpAddresses(\"a\")", () => {
    const result = restoreIpAddresses("a");
    expect(result).toEqual([]);
  });

  it("restoreIpAddresses(\"aaaaaa\")", () => {
    const result = restoreIpAddresses("aaaaaa");
    expect(result).toEqual([]);
  });
});

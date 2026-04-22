import { validIPAddress } from '../0468-validate-ip-address.js';

describe('0468-validate-ip-address', () => {
  it("validIPAddress(\"abcabcbb\")", () => {
    const result = validIPAddress("abcabcbb");
    expect(result).toEqual("Neither");
  });

  it("validIPAddress(\"bbbbb\")", () => {
    const result = validIPAddress("bbbbb");
    expect(result).toEqual("Neither");
  });

  it("validIPAddress(\"pwwkew\")", () => {
    const result = validIPAddress("pwwkew");
    expect(result).toEqual("Neither");
  });

  it("validIPAddress(\"\")", () => {
    const result = validIPAddress("");
    expect(result).toEqual("Neither");
  });

  it("validIPAddress(\" \")", () => {
    const result = validIPAddress(" ");
    expect(result).toEqual("Neither");
  });

  it("validIPAddress(\"a\")", () => {
    const result = validIPAddress("a");
    expect(result).toEqual("Neither");
  });

  it("validIPAddress(\"aaaaaa\")", () => {
    const result = validIPAddress("aaaaaa");
    expect(result).toEqual("Neither");
  });
});

import { defangIPaddr } from '../1108-defanging-an-ip-address.js';

describe('1108-defanging-an-ip-address', () => {
  it("defangIPaddr(\"abcabcbb\")", () => {
    const result = defangIPaddr("abcabcbb");
    expect(result).toEqual("abcabcbb");
  });

  it("defangIPaddr(\"bbbbb\")", () => {
    const result = defangIPaddr("bbbbb");
    expect(result).toEqual("bbbbb");
  });

  it("defangIPaddr(\"pwwkew\")", () => {
    const result = defangIPaddr("pwwkew");
    expect(result).toEqual("pwwkew");
  });

  it("defangIPaddr(\"\")", () => {
    const result = defangIPaddr("");
    expect(result).toEqual("");
  });

  it("defangIPaddr(\" \")", () => {
    const result = defangIPaddr(" ");
    expect(result).toEqual(" ");
  });

  it("defangIPaddr(\"a\")", () => {
    const result = defangIPaddr("a");
    expect(result).toEqual("a");
  });

  it("defangIPaddr(\"aaaaaa\")", () => {
    const result = defangIPaddr("aaaaaa");
    expect(result).toEqual("aaaaaa");
  });
});

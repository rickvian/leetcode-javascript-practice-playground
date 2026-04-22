import { maskPII } from '../0831-masking-personal-information.js';

describe('0831-masking-personal-information', () => {
  it("maskPII(\"abcabcbb\")", () => {
    const result = maskPII("abcabcbb");
    expect(result).toEqual("");
  });

  it("maskPII(\"bbbbb\")", () => {
    const result = maskPII("bbbbb");
    expect(result).toEqual("");
  });

  it("maskPII(\"pwwkew\")", () => {
    const result = maskPII("pwwkew");
    expect(result).toEqual("");
  });

  it("maskPII(\"\")", () => {
    const result = maskPII("");
    expect(result).toEqual("");
  });

  it("maskPII(\" \")", () => {
    const result = maskPII(" ");
    expect(result).toEqual("");
  });

  it("maskPII(\"a\")", () => {
    const result = maskPII("a");
    expect(result).toEqual("");
  });

  it("maskPII(\"aaaaaa\")", () => {
    const result = maskPII("aaaaaa");
    expect(result).toEqual("");
  });
});

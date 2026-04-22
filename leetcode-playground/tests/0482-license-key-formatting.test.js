import { licenseKeyFormatting } from '../0482-license-key-formatting.js';

describe('0482-license-key-formatting', () => {
  it("licenseKeyFormatting(\"abcdef\", 2)", () => {
    const result = licenseKeyFormatting("abcdef", 2);
    expect(result).toEqual("AB-CD-EF");
  });

  it("licenseKeyFormatting(\"\", 1)", () => {
    const result = licenseKeyFormatting("", 1);
    expect(result).toEqual("");
  });

  it("licenseKeyFormatting(\"a\", 1)", () => {
    const result = licenseKeyFormatting("a", 1);
    expect(result).toEqual("A");
  });

  it("licenseKeyFormatting(\"abba\", 3)", () => {
    const result = licenseKeyFormatting("abba", 3);
    expect(result).toEqual("A-BBA");
  });

  it("licenseKeyFormatting(\"  hello  \", 2)", () => {
    const result = licenseKeyFormatting("  hello  ", 2);
    expect(result).toEqual(" - H-EL-LO-  ");
  });
});

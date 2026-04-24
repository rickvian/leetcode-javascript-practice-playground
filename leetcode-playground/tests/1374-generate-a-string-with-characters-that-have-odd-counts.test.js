import { generateTheString } from '../1374-generate-a-string-with-characters-that-have-odd-counts.js';

describe('1374-generate-a-string-with-characters-that-have-odd-counts', () => {
  it("generateTheString(121)", () => {
    const result = generateTheString(121);
    expect(result).toEqual("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  });

  it("generateTheString(10)", () => {
    const result = generateTheString(10);
    expect(result).toEqual("aaaaaaaaaz");
  });
});

import { multiply } from '../0043-multiply-strings.js';

describe('0043-multiply-strings', () => {
  it("multiply(\"2\", \"3\")", () => {
    const result = multiply("2", "3");
    expect(result).toEqual("6");
  });

  it("multiply(\"123\", \"456\")", () => {
    const result = multiply("123", "456");
    expect(result).toEqual("56088");
  });

  it("multiply(\"0\", \"0\")", () => {
    const result = multiply("0", "0");
    expect(result).toEqual("0");
  });

  it("multiply(\"999\", \"999\")", () => {
    const result = multiply("999", "999");
    expect(result).toEqual("998001");
  });

  it("multiply(\"0\", \"1\")", () => {
    const result = multiply("0", "1");
    expect(result).toEqual("0");
  });

  it("multiply(\"1\", \"1\")", () => {
    const result = multiply("1", "1");
    expect(result).toEqual("1");
  });
});

import { addBinary } from '../0067-add-binary.js';

describe('0067-add-binary', () => {
  it("addBinary(\"11\", \"1\")", () => {
    const result = addBinary("11", "1");
    expect(result).toEqual("100");
  });

  it("addBinary(\"1010\", \"1011\")", () => {
    const result = addBinary("1010", "1011");
    expect(result).toEqual("10101");
  });

  it("addBinary(\"0\", \"0\")", () => {
    const result = addBinary("0", "0");
    expect(result).toEqual("0");
  });

  it("addBinary(\"1\", \"1\")", () => {
    const result = addBinary("1", "1");
    expect(result).toEqual("10");
  });

  it("addBinary(\"1111\", \"1111\")", () => {
    const result = addBinary("1111", "1111");
    expect(result).toEqual("11110");
  });

  it("addBinary(\"0\", \"1\")", () => {
    const result = addBinary("0", "1");
    expect(result).toEqual("1");
  });
});

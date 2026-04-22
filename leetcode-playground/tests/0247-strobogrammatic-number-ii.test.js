import { findStrobogrammatic } from '../0247-strobogrammatic-number-ii.js';

describe('0247-strobogrammatic-number-ii', () => {
  it("findStrobogrammatic(1)", () => {
    const result = findStrobogrammatic(1);
    expect(result).toEqual(["0", "1", "8"]);
  });

  it("findStrobogrammatic(2)", () => {
    const result = findStrobogrammatic(2);
    expect(result).toEqual(["11", "69", "88", "96"]);
  });

  it("findStrobogrammatic(3)", () => {
    const result = findStrobogrammatic(3);
    expect(result).toEqual(["101", "111", "181", "609", "619", "689", "808", "818", "888", "906", "916", "986"]);
  });

  it("findStrobogrammatic(4)", () => {
    const result = findStrobogrammatic(4);
    expect(result).toEqual(["1001", "1111", "1691", "1881", "1961", "6009", "6119", "6699", "6889", "6969", "8008", "8118", "8698", "8888", "8968", "9006", "9116", "9696", "9886", "9966"]);
  });
});

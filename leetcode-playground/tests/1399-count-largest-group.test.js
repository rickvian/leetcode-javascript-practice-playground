import { countLargestGroup } from '../1399-count-largest-group.js';

describe('1399-count-largest-group', () => {
  it("countLargestGroup(1)", () => {
    const result = countLargestGroup(1);
    expect(result).toEqual(1);
  });

  it("countLargestGroup(2)", () => {
    const result = countLargestGroup(2);
    expect(result).toEqual(2);
  });

  it("countLargestGroup(13)", () => {
    const result = countLargestGroup(13);
    expect(result).toEqual(4);
  });

  it("countLargestGroup(24)", () => {
    const result = countLargestGroup(24);
    expect(result).toEqual(5);
  });

  it("countLargestGroup(100)", () => {
    const result = countLargestGroup(100);
    expect(result).toEqual(1);
  });

  it("countLargestGroup(10000)", () => {
    const result = countLargestGroup(10000);
    expect(result).toEqual(1);
  });
});

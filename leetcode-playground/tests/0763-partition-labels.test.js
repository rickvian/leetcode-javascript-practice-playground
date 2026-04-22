import { partitionLabels } from '../0763-partition-labels.js';

describe('0763-partition-labels', () => {
  it("partitionLabels(\"abcabcbb\")", () => {
    const result = partitionLabels("abcabcbb");
    expect(result).toEqual([8]);
  });

  it("partitionLabels(\"bbbbb\")", () => {
    const result = partitionLabels("bbbbb");
    expect(result).toEqual([5]);
  });

  it("partitionLabels(\"pwwkew\")", () => {
    const result = partitionLabels("pwwkew");
    expect(result).toEqual([1, 5]);
  });

  it("partitionLabels(\"\")", () => {
    const result = partitionLabels("");
    expect(result).toEqual([]);
  });

  it("partitionLabels(\" \")", () => {
    const result = partitionLabels(" ");
    expect(result).toEqual([1]);
  });

  it("partitionLabels(\"a\")", () => {
    const result = partitionLabels("a");
    expect(result).toEqual([1]);
  });

  it("partitionLabels(\"aaaaaa\")", () => {
    const result = partitionLabels("aaaaaa");
    expect(result).toEqual([6]);
  });
});

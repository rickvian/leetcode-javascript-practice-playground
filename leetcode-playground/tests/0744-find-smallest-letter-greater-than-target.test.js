import { nextGreatestLetter } from '../0744-find-smallest-letter-greater-than-target.js';

describe('0744-find-smallest-letter-greater-than-target', () => {
  it("nextGreatestLetter([1, 2, 3])", () => {
    const result = nextGreatestLetter([1, 2, 3]);
    expect(result).toEqual(1);
  });

  it("nextGreatestLetter([0])", () => {
    const result = nextGreatestLetter([0]);
    expect(result).toEqual(0);
  });

  it("nextGreatestLetter([-1, 0, 1])", () => {
    const result = nextGreatestLetter([-1, 0, 1]);
    expect(result).toEqual(-1);
  });
});

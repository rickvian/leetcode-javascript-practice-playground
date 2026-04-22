import { reverseWords } from '../0186-reverse-words-in-a-string-ii.js';

describe('0186-reverse-words-in-a-string-ii', () => {
  it("reverseWords([\"t\", \"h\", \"e\", \" \", \"s\", \"k\", \"y\"])", () => {
    const _nums0 = ["t", "h", "e", " ", "s", "k", "y"];
    reverseWords(_nums0);
    expect(_nums0).toEqual(["s", "k", "y", " ", "t", "h", "e"]);
  });

  it("reverseWords([\"a\", \" \", \"b\"])", () => {
    const _nums1 = ["a", " ", "b"];
    reverseWords(_nums1);
    expect(_nums1).toEqual(["b", " ", "a"]);
  });

  it("reverseWords([\"a\"])", () => {
    const _nums2 = ["a"];
    reverseWords(_nums2);
    expect(_nums2).toEqual(["a"]);
  });

  it("reverseWords([\"h\", \"e\", \"l\", \"l\", \"o\", \" \", \"w\", \"o\", \"r\", \"l\", \"d\"])", () => {
    const _nums3 = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"];
    reverseWords(_nums3);
    expect(_nums3).toEqual(["w", "o", "r", "l", "d", " ", "h", "e", "l", "l", "o"]);
  });
});

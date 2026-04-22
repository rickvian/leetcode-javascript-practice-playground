import { reverseString } from '../0344-reverse-string.js';

describe('0344-reverse-string', () => {
  it("reverseString([\"h\", \"e\", \"l\", \"l\", \"o\"])", () => {
    const _nums0 = ["h", "e", "l", "l", "o"];
    reverseString(_nums0);
    expect(_nums0).toEqual(["o", "l", "l", "e", "h"]);
  });

  it("reverseString([\"H\", \"a\", \"n\", \"n\", \"a\", \"h\"])", () => {
    const _nums1 = ["H", "a", "n", "n", "a", "h"];
    reverseString(_nums1);
    expect(_nums1).toEqual(["h", "a", "n", "n", "a", "H"]);
  });

  it("reverseString([\"a\"])", () => {
    const _nums2 = ["a"];
    reverseString(_nums2);
    expect(_nums2).toEqual(["a"]);
  });

  it("reverseString([])", () => {
    const _nums3 = [];
    reverseString(_nums3);
    expect(_nums3).toEqual([]);
  });

  it("reverseString([\"a\", \"b\"])", () => {
    const _nums4 = ["a", "b"];
    reverseString(_nums4);
    expect(_nums4).toEqual(["b", "a"]);
  });
});

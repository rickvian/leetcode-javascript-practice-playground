import { findRestaurant } from '../0599-minimum-index-sum-of-two-lists.js';

describe('0599-minimum-index-sum-of-two-lists', () => {
  it("findRestaurant([\"Shogun\", \"Tapioca Express\", \"Burger King\", \"KFC\"], [\"Piatti\", \"The Grill at Torrey Pines\", \"Hungry Hunter Steakhouse\", \"Shogun\"])", () => {
    const result = findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]);
    expect(result).toEqual(["Shogun"]);
  });

  it("findRestaurant([\"Shogun\", \"Tapioca Express\", \"Burger King\", \"KFC\"], [\"KFC\", \"Shogun\", \"Burger King\"])", () => {
    const result = findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Shogun", "Burger King"]);
    expect(result).toEqual(["Shogun"]);
  });

  it("findRestaurant([\"happy\", \"sad\", \"good\"], [\"sad\", \"happy\", \"good\"])", () => {
    const result = findRestaurant(["happy", "sad", "good"], ["sad", "happy", "good"]);
    expect(result).toEqual(["sad", "happy"]);
  });

  it("findRestaurant([\"a\"], [\"a\"])", () => {
    const result = findRestaurant(["a"], ["a"]);
    expect(result).toEqual(["a"]);
  });

  it("findRestaurant([\"a\", \"b\", \"c\"], [\"c\", \"b\", \"a\"])", () => {
    const result = findRestaurant(["a", "b", "c"], ["c", "b", "a"]);
    expect(result).toEqual(["c", "b", "a"]);
  });
});

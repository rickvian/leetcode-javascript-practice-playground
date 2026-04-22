import { catMouseGame } from '../0913-cat-and-mouse.js';

describe('0913-cat-and-mouse', () => {
  it("catMouseGame([[2, 5], [3], [0, 4, 5], [1, 4, 5], [2, 3], [0, 2, 3]])", () => {
    const result = catMouseGame([[2, 5], [3], [0, 4, 5], [1, 4, 5], [2, 3], [0, 2, 3]]);
    expect(result).toEqual(0);
  });

  it("catMouseGame([[1, 3], [0], [3], [0, 2]])", () => {
    const result = catMouseGame([[1, 3], [0], [3], [0, 2]]);
    expect(result).toEqual(1);
  });

  it("catMouseGame([[1, 5], [3], [1, 3], [0, 1, 2], [1, 3, 5], [0, 4]])", () => {
    const result = catMouseGame([[1, 5], [3], [1, 3], [0, 1, 2], [1, 3, 5], [0, 4]]);
    expect(result).toEqual(1);
  });
});

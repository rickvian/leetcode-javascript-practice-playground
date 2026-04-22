import { minStickers } from '../0691-stickers-to-spell-word.js';

describe('0691-stickers-to-spell-word', () => {
  it("minStickers([])", () => {
    const result = minStickers([]);
    expect(result).toEqual(-1);
  });
});

import { isOneBitCharacter } from '../0717-1-bit-and-2-bit-characters.js';

describe('0717-1-bit-and-2-bit-characters', () => {
  it("isOneBitCharacter([1, 2, 3, 4, 5])", () => {
    const result = isOneBitCharacter([1, 2, 3, 4, 5]);
    expect(result).toEqual(true);
  });

  it("isOneBitCharacter([])", () => {
    const result = isOneBitCharacter([]);
    expect(result).toEqual(true);
  });

  it("isOneBitCharacter([1])", () => {
    const result = isOneBitCharacter([1]);
    expect(result).toEqual(true);
  });

  it("isOneBitCharacter([1, 1])", () => {
    const result = isOneBitCharacter([1, 1]);
    expect(result).toEqual(false);
  });

  it("isOneBitCharacter([3, 1, 4, 1, 5])", () => {
    const result = isOneBitCharacter([3, 1, 4, 1, 5]);
    expect(result).toEqual(true);
  });

  it("isOneBitCharacter([-1, 0, 1])", () => {
    const result = isOneBitCharacter([-1, 0, 1]);
    expect(result).toEqual(true);
  });
});

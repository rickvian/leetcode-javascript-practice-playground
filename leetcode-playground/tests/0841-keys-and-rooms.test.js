import { canVisitAllRooms } from '../0841-keys-and-rooms.js';

describe('0841-keys-and-rooms', () => {
  it("canVisitAllRooms([[]])", () => {
    const result = canVisitAllRooms([[]]);
    expect(result).toEqual(true);
  });
});

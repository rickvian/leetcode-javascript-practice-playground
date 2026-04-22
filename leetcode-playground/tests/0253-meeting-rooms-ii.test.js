import { minMeetingRooms } from '../0253-meeting-rooms-ii.js';

describe('0253-meeting-rooms-ii', () => {
  it("minMeetingRooms([[0, 30], [5, 10], [15, 20]])", () => {
    const result = minMeetingRooms([[0, 30], [5, 10], [15, 20]]);
    expect(result).toEqual(2);
  });

  it("minMeetingRooms([[7, 10], [2, 4]])", () => {
    const result = minMeetingRooms([[7, 10], [2, 4]]);
    expect(result).toEqual(1);
  });

  it("minMeetingRooms([[1, 2], [2, 3], [3, 4]])", () => {
    const result = minMeetingRooms([[1, 2], [2, 3], [3, 4]]);
    expect(result).toEqual(1);
  });

  it("minMeetingRooms([])", () => {
    const result = minMeetingRooms([]);
    expect(result).toEqual(0);
  });
});

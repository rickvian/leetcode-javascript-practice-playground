import { canAttendMeetings } from '../0252-meeting-rooms.js';

describe('0252-meeting-rooms', () => {
  it("canAttendMeetings([[1, 2], [3, 4]])", () => {
    const result = canAttendMeetings([[1, 2], [3, 4]]);
    expect(result).toEqual(true);
  });

  it("canAttendMeetings([[1]])", () => {
    const result = canAttendMeetings([[1]]);
    expect(result).toEqual(true);
  });

  it("canAttendMeetings([[]])", () => {
    const result = canAttendMeetings([[]]);
    expect(result).toEqual(true);
  });

  it("canAttendMeetings([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = canAttendMeetings([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(true);
  });
});

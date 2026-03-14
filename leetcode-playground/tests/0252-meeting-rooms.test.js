import { canAttendMeetings } from '../0252-meeting-rooms';

describe('0252-meeting-rooms', () => {
    it('should return false for overlapping meetings [[0,30],[5,10],[15,20]]', () => {
        expect(canAttendMeetings([[0, 30], [5, 10], [15, 20]])).toBe(false);
    });

    it('should return true for non-overlapping meetings [[7,10],[2,4]]', () => {
        expect(canAttendMeetings([[7, 10], [2, 4]])).toBe(true);
    });

    it('should return true for empty intervals', () => {
        expect(canAttendMeetings([])).toBe(true);
    });

    it('should return true for a single meeting', () => {
        expect(canAttendMeetings([[1, 5]])).toBe(true);
    });

    it('should return true for adjacent (non-overlapping) meetings', () => {
        expect(canAttendMeetings([[0, 5], [5, 10]])).toBe(true);
    });

    it('should return false when meetings fully overlap', () => {
        expect(canAttendMeetings([[1, 10], [2, 8]])).toBe(false);
    });

    it('should handle meetings that touch at endpoints', () => {
        expect(canAttendMeetings([[0, 10], [10, 20], [20, 30]])).toBe(true);
    });

    it('should return false for multiple overlapping meetings', () => {
        expect(canAttendMeetings([[1, 5], [3, 7], [6, 10]])).toBe(false);
    });
});

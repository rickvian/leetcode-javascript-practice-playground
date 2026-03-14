import { minMeetingRooms } from '../0253-meeting-rooms-ii';

describe('0253-meeting-rooms-ii', () => {
    it('should return 2 for [[0,30],[5,10],[15,20]]', () => {
        expect(minMeetingRooms([[0, 30], [5, 10], [15, 20]])).toBe(2);
    });

    it('should return 1 for [[7,10],[2,4]]', () => {
        expect(minMeetingRooms([[7, 10], [2, 4]])).toBe(1);
    });

    it('should return 0 for empty intervals', () => {
        expect(minMeetingRooms([])).toBe(0);
    });

    it('should return 1 for single meeting', () => {
        expect(minMeetingRooms([[1, 5]])).toBe(1);
    });

    it('should return 3 when all meetings overlap', () => {
        expect(minMeetingRooms([[1, 10], [2, 9], [3, 8]])).toBe(3);
    });

    it('should return 1 for sequential meetings', () => {
        expect(minMeetingRooms([[0, 5], [5, 10], [10, 15]])).toBe(1);
    });

    it('should handle meetings with same start time', () => {
        expect(minMeetingRooms([[1, 5], [1, 10], [1, 3]])).toBe(3);
    });

    it('should return correct rooms for [[9,10],[4,9],[4,17]]', () => {
        expect(minMeetingRooms([[9, 10], [4, 9], [4, 17]])).toBe(2);
    });
});

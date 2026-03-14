import { canFinish } from '../0207-course-schedule';

describe('0207-course-schedule', () => {
    it('should return true for 2 courses with no cycle', () => {
        expect(canFinish(2, [[1, 0]])).toBe(true);
    });

    it('should return false for 2 courses with cycle', () => {
        expect(canFinish(2, [[1, 0], [0, 1]])).toBe(false);
    });

    it('should return true for single course with no prerequisites', () => {
        expect(canFinish(1, [])).toBe(true);
    });

    it('should return true for courses with no prerequisites', () => {
        expect(canFinish(5, [])).toBe(true);
    });

    it('should return true for chain without cycle', () => {
        expect(canFinish(4, [[1, 0], [2, 1], [3, 2]])).toBe(true);
    });

    it('should return false for cycle in longer chain', () => {
        expect(canFinish(4, [[1, 0], [2, 1], [3, 2], [0, 3]])).toBe(false);
    });

    it('should return true when multiple independent paths exist', () => {
        expect(canFinish(4, [[0, 1], [0, 2], [1, 3], [2, 3]])).toBe(true);
    });

    it('should return false for self-loop', () => {
        expect(canFinish(2, [[0, 0]])).toBe(false);
    });
});

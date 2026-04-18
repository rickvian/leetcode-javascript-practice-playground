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

    it('should return false when cycle exists in one disconnected component', () => {
        expect(canFinish(5, [[0, 1], [2, 3], [3, 2]])).toBe(false);
    });

    it('should return true for disconnected components without cycles', () => {
        expect(canFinish(6, [[0, 1], [2, 3], [4, 5]])).toBe(true);
    });

    it('should return false for diamond DAG with a back-edge', () => {
        expect(canFinish(4, [[0, 1], [0, 2], [1, 3], [2, 3], [3, 0]])).toBe(false);
    });

    it('should return true at upper range limit numCourses = 2000 with linear chain', () => {
        const n = 2000;
        const prerequisites = [];
        for (let i = 1; i < n; i++) prerequisites.push([i, i - 1]);
        expect(canFinish(n, prerequisites)).toBe(true);
    });

    it('should return false at upper range limit with back-edge creating cycle', () => {
        const n = 2000;
        const prerequisites = [];
        for (let i = 1; i < n; i++) prerequisites.push([i, i - 1]);
        prerequisites.push([0, n - 1]);
        expect(canFinish(n, prerequisites)).toBe(false);
    });

    it('should return true for maximum course count with no prerequisites', () => {
        expect(canFinish(2000, [])).toBe(true);
    });

    it('should return false for 3-node cycle among larger course set', () => {
        expect(canFinish(10, [[0, 1], [1, 2], [2, 0]])).toBe(false);
    });

    it('should return true for wide fan-out DAG', () => {
        expect(canFinish(5, [[1, 0], [2, 0], [3, 0], [4, 0]])).toBe(true);
    });

    it('should return true for wide fan-in DAG', () => {
        expect(canFinish(5, [[0, 1], [0, 2], [0, 3], [0, 4]])).toBe(true);
    });
});

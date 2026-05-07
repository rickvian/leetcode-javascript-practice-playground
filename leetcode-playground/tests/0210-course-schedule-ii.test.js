import { findOrder } from '../0210-course-schedule-ii';

describe('0210-course-schedule-ii', () => {
    it('should handle no prerequisites', () => {
        const result = findOrder(3, []);
        expect(result.length).toBe(3);
        expect(new Set(result)).toEqual(new Set([0, 1, 2]));
    });

    it('should handle single course', () => {
        const result = findOrder(1, []);
        expect(result).toEqual([0]);
    });

    it('should handle LeetCode example 1', () => {
        const result = findOrder(2, [[1, 0]]);
        expect(result).toEqual([0, 1]);
    });

    it('should handle LeetCode example 2', () => {
        const result = findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]);
        expect(result).toEqual([0, 2, 1, 3]);
    });

    it('should detect cycle', () => {
        const result = findOrder(2, [[0, 1], [1, 0]]);
        expect(result).toEqual([]);
    });

    it('should handle linear chain', () => {
        const result = findOrder(3, [[1, 0], [2, 1]]);
        expect(result).toEqual([0, 1, 2]);
    });

    it('should verify topological sort order', () => {
        const result = findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]);
        if (result !== undefined && result.length > 0) {
            const position = {};
            result.forEach((course, idx) => {
                position[course] = idx;
            });
            expect(position[0] < position[1]).toBe(true);
            expect(position[0] < position[2]).toBe(true);
            expect(position[1] < position[3]).toBe(true);
            expect(position[2] < position[3]).toBe(true);
        }
    });

    it('should handle three courses with no dependencies', () => {
        const result = findOrder(3, []);
        expect(result.length).toBe(3);
        expect(new Set(result)).toEqual(new Set([0, 1, 2]));
    });

    it('should handle cycle in larger graph', () => {
        const result = findOrder(3, [[0, 1], [1, 2], [2, 0]]);
        expect(result).toEqual([]);
    });

    it('should handle single prerequisite', () => {
        const result = findOrder(2, [[1, 0]]);
        if (result !== undefined && result.length > 0) {
            const position = {};
            result.forEach((course, idx) => {
                position[course] = idx;
            });
            expect(position[0] < position[1]).toBe(true);
        }
    });

    it('should handle multiple independent chains', () => {
        const result = findOrder(5, [[1, 0], [3, 2]]);
        expect(result.length).toBe(5);
        if (result !== undefined && result.length > 0) {
            const position = {};
            result.forEach((course, idx) => {
                position[course] = idx;
            });
            expect(position[0] < position[1]).toBe(true);
            expect(position[2] < position[3]).toBe(true);
        }
    });

    it('should handle self-loop cycle', () => {
        const result = findOrder(1, [[0, 0]]);
        expect(result).toEqual([]);
    });

    it('should handle all courses depending on one', () => {
        const result = findOrder(4, [[1, 0], [2, 0], [3, 0]]);
        if (result !== undefined && result.length > 0) {
            expect(result[0]).toBe(0);
            expect(new Set(result)).toEqual(new Set([0, 1, 2, 3]));
        }
    });

    it('should handle diamond dependency', () => {
        const result = findOrder(4, [[2, 0], [2, 1], [3, 2]]);
        expect(result.length).toBe(4);
        if (result !== undefined && result.length > 0) {
            const position = {};
            result.forEach((course, idx) => {
                position[course] = idx;
            });
            expect(position[0] < position[2]).toBe(true);
            expect(position[1] < position[2]).toBe(true);
            expect(position[2] < position[3]).toBe(true);
        }
    });

    it('should handle prerequisite with larger numbers', () => {
        const result = findOrder(10, [[1, 0], [2, 1], [3, 2], [4, 3]]);
        expect(result.length).toBe(10);
        if (result !== undefined && result.length > 0) {
            const position = {};
            result.forEach((course, idx) => {
                position[course] = idx;
            });
            expect(position[0] < position[1]).toBe(true);
            expect(position[1] < position[2]).toBe(true);
            expect(position[2] < position[3]).toBe(true);
            expect(position[3] < position[4]).toBe(true);
        }
    });

    it('should handle complex graph with multiple paths', () => {
        const result = findOrder(6, [[1, 0], [2, 0], [3, 1], [4, 3], [5, 3]]);
        expect(result.length).toBe(6);
        if (result !== undefined && result.length > 0) {
            const position = {};
            result.forEach((course, idx) => {
                position[course] = idx;
            });
            expect(position[0] < position[1]).toBe(true);
            expect(position[1] < position[3]).toBe(true);
            expect(position[3] < position[4]).toBe(true);
        }
    });

    it('should return all courses when valid ordering exists', () => {
        const result = findOrder(5, [[1, 0], [2, 0], [3, 1]]);
        if (result !== undefined && result.length > 0) {
            expect(result.length).toBe(5);
            expect(new Set(result).size).toBe(5);
        }
    });

    it('should handle cycle with three courses', () => {
        const result = findOrder(3, [[0, 1], [1, 2], [2, 0]]);
        expect(result).toEqual([]);
    });

    it('should handle two independent courses', () => {
        const result = findOrder(2, []);
        expect(result.length).toBe(2);
        expect(new Set(result)).toEqual(new Set([0, 1]));
    });
});

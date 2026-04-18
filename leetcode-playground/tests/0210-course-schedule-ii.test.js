import { findOrder } from '../0210-course-schedule-ii';

function isValidOrder(order, numCourses, prerequisites) {
    if (order.length !== numCourses) return false;
    const pos = new Array(numCourses);
    order.forEach((c, i) => { pos[c] = i; });
    for (const [a, b] of prerequisites) {
        if (pos[b] >= pos[a]) return false;
    }
    return true;
}

describe('0210-course-schedule-ii', () => {
    it('should return valid order for 2 courses with 1 prerequisite', () => {
        const order = findOrder(2, [[1, 0]]);
        expect(isValidOrder(order, 2, [[1, 0]])).toBe(true);
    });

    it('should return empty array when cycle exists', () => {
        expect(findOrder(2, [[1, 0], [0, 1]])).toEqual([]);
    });

    it('should return [0] for single course no prerequisites', () => {
        expect(findOrder(1, [])).toEqual([0]);
    });

    it('should return valid order for 4 courses in a chain', () => {
        const order = findOrder(4, [[1, 0], [2, 1], [3, 2]]);
        expect(isValidOrder(order, 4, [[1, 0], [2, 1], [3, 2]])).toBe(true);
    });

    it('should return empty for cycle in longer chain', () => {
        expect(findOrder(4, [[1, 0], [2, 1], [3, 2], [0, 3]])).toEqual([]);
    });

    it('should handle no prerequisites (any order valid)', () => {
        const order = findOrder(3, []);
        expect(order.sort()).toEqual([0, 1, 2]);
    });

    it('should return valid order for diamond-shaped dependency graph', () => {
        const prereqs = [[1, 0], [2, 0], [3, 1], [3, 2]];
        const order = findOrder(4, prereqs);
        expect(isValidOrder(order, 4, prereqs)).toBe(true);
    });

    it('should return empty array for self-loop', () => {
        expect(findOrder(2, [[0, 0]])).toEqual([]);
    });

    it('should handle disconnected components', () => {
        const order = findOrder(4, [[1, 0]]);
        expect(order).toHaveLength(4);
    });
});

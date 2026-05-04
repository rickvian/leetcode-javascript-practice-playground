import { calcEquation } from '../0399-evaluate-division.js';

describe('0399-evaluate-division', () => {
    it('should handle LeetCode example 1', () => {
        const equations = [["a","b"],["b","c"]];
        const values = [2.0, 3.0];
        const queries = [["a","c"],["b","a"],["a","e"],["a","b"],["b","c"]];
        const result = calcEquation(equations, values, queries);
        expect(result[0]).toBeCloseTo(6.0, 5);
        expect(result[1]).toBeCloseTo(0.5, 5);
        expect(result[2]).toBeCloseTo(-1.0, 5);
        expect(result[3]).toBeCloseTo(2.0, 5);
        expect(result[4]).toBeCloseTo(3.0, 5);
    });

    it('should handle LeetCode example 2', () => {
        const equations = [["a","b"],["b","c"],["bc","cd"]];
        const values = [1.5, 2.5, 5.0];
        const queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]];
        const result = calcEquation(equations, values, queries);
        expect(result[0]).toBeCloseTo(3.75, 5);
        expect(result[1]).toBeCloseTo(0.4, 5);
        expect(result[2]).toBeCloseTo(5.0, 5);
        expect(result[3]).toBeCloseTo(0.2, 5);
    });

    it('should handle LeetCode example 3', () => {
        const equations = [["a","b"]];
        const values = [0.5];
        const queries = [["a","b"],["b","a"],["a","c"],["x","y"]];
        const result = calcEquation(equations, values, queries);
        expect(result[0]).toBeCloseTo(0.5, 5);
        expect(result[1]).toBeCloseTo(2.0, 5);
        expect(result[2]).toBeCloseTo(-1.0, 5);
        expect(result[3]).toBeCloseTo(-1.0, 5);
    });

    it('should handle variable divided by itself', () => {
        const equations = [["a","b"]];
        const values = [2.0];
        const queries = [["a","a"],["b","b"]];
        const result = calcEquation(equations, values, queries);
        expect(result[0]).toBeCloseTo(1.0, 5);
        expect(result[1]).toBeCloseTo(1.0, 5);
    });

    it('should handle unknown variable', () => {
        const equations = [["a","b"]];
        const values = [2.0];
        const queries = [["x","y"],["c","d"]];
        const result = calcEquation(equations, values, queries);
        expect(result[0]).toBeCloseTo(-1.0, 5);
        expect(result[1]).toBeCloseTo(-1.0, 5);
    });

    it('should handle no path between queried variables', () => {
        const equations = [["a","b"],["c","d"]];
        const values = [2.0, 3.0];
        const queries = [["a","c"],["b","d"]];
        const result = calcEquation(equations, values, queries);
        expect(result[0]).toBeCloseTo(-1.0, 5);
        expect(result[1]).toBeCloseTo(-1.0, 5);
    });

    it('should handle chain requiring transitive reasoning', () => {
        const equations = [["a","b"],["b","c"],["c","d"],["d","e"]];
        const values = [2.0, 3.0, 4.0, 5.0];
        const queries = [["a","e"],["e","a"]];
        const result = calcEquation(equations, values, queries);
        expect(result[0]).toBeCloseTo(120.0, 5);
        expect(result[1]).toBeCloseTo(1.0/120.0, 5);
    });
});

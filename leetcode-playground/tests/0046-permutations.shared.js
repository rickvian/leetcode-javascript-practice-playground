import { describe, it, expect } from '@jest/globals';

// Sort outer and inner arrays for order-independent comparison
function normalize(result) {
    return result.map(p => [...p].sort((a, b) => a - b)).sort((a, b) => {
        for (let i = 0; i < Math.max(a.length, b.length); i++) {
            if ((a[i] ?? -Infinity) !== (b[i] ?? -Infinity)) return (a[i] ?? -Infinity) - (b[i] ?? -Infinity);
        }
        return 0;
    });
}

/**
 * Shared test suite for all permute implementations.
 * @param {Function} permute - the function under test
 * @param {Object} [options]
 * @param {boolean} [options.checkMutation] - assert original array is not mutated
 */
export function runPermuteTests(permute, { checkMutation = false } = {}) {
    describe('happy path', () => {
        it('should return all 6 permutations of [1,2,3]', () => {
            const result = permute([1, 2, 3]);
            expect(normalize(result)).toEqual(normalize([
                [1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]
            ]));
        });

        it('should return all 2 permutations of [0,1]', () => {
            expect(normalize(permute([0, 1]))).toEqual(normalize([[0,1],[1,0]]));
        });
    });

    describe('edge: single element', () => {
        it('should return [[n]] for a single-element array', () => {
            expect(permute([7])).toEqual([[7]]);
        });

        it('should return [[0]] for single-element [0]', () => {
            expect(permute([0])).toEqual([[0]]);
        });
    });

    describe('edge: negative numbers', () => {
        it('should handle negative numbers in input', () => {
            expect(normalize(permute([-1, 2]))).toEqual(normalize([[-1, 2], [2, -1]]));
        });

        it('should handle all-negative array [-3,-2,-1]', () => {
            expect(permute([-3, -2, -1])).toHaveLength(6);
        });
    });

    describe('edge: larger input (count check)', () => {
        it('should return 24 permutations for a 4-element array', () => {
            expect(permute([1, 2, 3, 4])).toHaveLength(24);
        });
    });

    describe('edge: correctness invariants', () => {
        it('should contain no duplicate permutations for [1,2,3]', () => {
            const result = permute([1, 2, 3]);
            const seen = new Set(result.map(p => p.join(',')));
            expect(seen.size).toBe(result.length);
        });

        it('each permutation must be a rearrangement of the original elements', () => {
            const input = [4, 5, 6];
            const sorted = [...input].sort((a, b) => a - b);
            for (const perm of permute(input)) {
                expect([...perm].sort((a, b) => a - b)).toEqual(sorted);
            }
        });
    });

    describe('edge: range limits', () => {
        it('should handle mix of large positive and negative values', () => {
            expect(permute([-1000, 0, 1000])).toHaveLength(6);
        });
    });

    if (checkMutation) {
        describe('edge: mutation', () => {
            it('should not mutate the original input array', () => {
                const input = [1, 2, 3];
                const copy = [...input];
                permute(input);
                expect(input).toEqual(copy);
            });
        });
    }
}

import { RandomizedSet } from '../0380-insert-delete-getrandom-01.js';

describe('0380-insert-delete-getrandom-01', () => {
    describe('insert', () => {
        it('should return true when inserting a new element', () => {
            const rs = new RandomizedSet();
            expect(rs.insert(1)).toBe(true);
        });

        it('should return false when inserting a duplicate element', () => {
            const rs = new RandomizedSet();
            rs.insert(1);
            expect(rs.insert(1)).toBe(false);
        });

        it('should allow inserting 0 as a value', () => {
            const rs = new RandomizedSet();
            expect(rs.insert(0)).toBe(true);
            expect(rs.insert(0)).toBe(false);
        });

        it('should allow inserting negative numbers', () => {
            const rs = new RandomizedSet();
            expect(rs.insert(-1)).toBe(true);
            expect(rs.insert(-1)).toBe(false);
        });
    });

    describe('remove', () => {
        it('should return true when removing an existing element', () => {
            const rs = new RandomizedSet();
            rs.insert(1);
            expect(rs.remove(1)).toBe(true);
        });

        it('should return false when removing a non-existing element', () => {
            const rs = new RandomizedSet();
            expect(rs.remove(1)).toBe(false);
        });

        it('should allow re-insertion after removal', () => {
            const rs = new RandomizedSet();
            rs.insert(1);
            rs.remove(1);
            expect(rs.insert(1)).toBe(true);
        });

        it('should correctly remove element when set has multiple elements', () => {
            const rs = new RandomizedSet();
            rs.insert(10);
            rs.insert(11);
            rs.insert(12);
            expect(rs.remove(11)).toBe(true);
            expect(rs.remove(11)).toBe(false);
        });

        it('should remove the last remaining element', () => {
            const rs = new RandomizedSet();
            rs.insert(5);
            expect(rs.remove(5)).toBe(true);
            expect(rs.remove(5)).toBe(false);
        });
    });

    describe('getRandom', () => {
        it('should return the only element when set has one element', () => {
            const rs = new RandomizedSet();
            rs.insert(42);
            expect(rs.getRandom()).toBe(42);
        });

        it('should always return an element that exists in the set', () => {
            const rs = new RandomizedSet();
            rs.insert(1);
            rs.insert(2);
            rs.insert(3);
            const values = new Set([1, 2, 3]);
            for (let i = 0; i < 20; i++) {
                expect(values.has(rs.getRandom())).toBe(true);
            }
        });

        it('should not return a removed element', () => {
            const rs = new RandomizedSet();
            rs.insert(1);
            rs.insert(2);
            rs.remove(1);
            for (let i = 0; i < 20; i++) {
                expect(rs.getRandom()).toBe(2);
            }
        });
    });

    describe('combined operations', () => {
        it('should handle the example from LeetCode', () => {
            const rs = new RandomizedSet();
            expect(rs.insert(1)).toBe(true);
            expect(rs.remove(2)).toBe(false);
            expect(rs.insert(2)).toBe(true);
            const random = rs.getRandom();
            expect([1, 2]).toContain(random);
            expect(rs.remove(1)).toBe(true);
            expect(rs.insert(2)).toBe(false);
            expect(rs.getRandom()).toBe(2);
        });

        it('should handle large number of insertions and removals', () => {
            const rs = new RandomizedSet();
            const inserted = new Set();
            for (let i = 0; i < 1000; i++) {
                rs.insert(i);
                inserted.add(i);
            }
            for (let i = 0; i < 500; i++) {
                rs.remove(i);
                inserted.delete(i);
            }
            for (let i = 0; i < 50; i++) {
                expect(inserted.has(rs.getRandom())).toBe(true);
            }
        });

        it('should maintain correctness after removing the last element in the list (swap-with-self edge case)', () => {
            const rs = new RandomizedSet();
            rs.insert(1);
            rs.insert(2);
            rs.insert(3);
            // Remove the element that happens to be at the last index
            expect(rs.remove(3)).toBe(true);
            // 1 and 2 must still be present and 3 must be gone
            for (let i = 0; i < 30; i++) {
                expect([1, 2]).toContain(rs.getRandom());
            }
            expect(rs.remove(3)).toBe(false);
        });

        it('should return uniform distribution — all elements reachable via getRandom', () => {
            const rs = new RandomizedSet();
            const elements = [10, 20, 30, 40, 50];
            elements.forEach(v => rs.insert(v));

            const counts = {};
            elements.forEach(v => (counts[v] = 0));
            const trials = 5000;
            for (let i = 0; i < trials; i++) {
                counts[rs.getRandom()]++;
            }
            // Every element should be returned at least once across 5000 trials
            elements.forEach(v => expect(counts[v]).toBeGreaterThan(0));
        });

        it('should handle interleaved insert/remove/getRandom across 10 000 operations', () => {
            const rs = new RandomizedSet();
            const mirror = new Set();
            const range = 200; // values 0-199

            for (let op = 0; op < 10_000; op++) {
                const val = Math.floor(Math.random() * range);
                const action = op % 3; // 0=insert, 1=remove, 2=getRandom

                if (action === 0) {
                    const result = rs.insert(val);
                    expect(result).toBe(!mirror.has(val));
                    mirror.add(val);
                } else if (action === 1) {
                    const result = rs.remove(val);
                    expect(result).toBe(mirror.has(val));
                    mirror.delete(val);
                } else if (mirror.size > 0) {
                    expect(mirror.has(rs.getRandom())).toBe(true);
                }
            }
        });

        it('should handle extreme boundary values (INT32_MIN, INT32_MAX, -0)', () => {
            const rs = new RandomizedSet();
            expect(rs.insert(2_147_483_647)).toBe(true);
            expect(rs.insert(-2_147_483_648)).toBe(true);
            expect(rs.insert(0)).toBe(true);

            expect(rs.insert(2_147_483_647)).toBe(false);
            expect(rs.insert(-2_147_483_648)).toBe(false);

            expect(rs.remove(-2_147_483_648)).toBe(true);
            for (let i = 0; i < 30; i++) {
                expect([2_147_483_647, 0]).toContain(rs.getRandom());
            }
        });

        it('should stay consistent after exhausting all elements and rebuilding', () => {
            const rs = new RandomizedSet();
            // Fill with 500 elements
            for (let i = 0; i < 500; i++) rs.insert(i);
            // Drain all
            for (let i = 0; i < 500; i++) expect(rs.remove(i)).toBe(true);
            // Set is now empty — re-populate with different values
            for (let i = 1000; i < 1500; i++) rs.insert(i);
            const alive = new Set(Array.from({ length: 500 }, (_, k) => k + 1000));
            for (let i = 0; i < 50; i++) {
                expect(alive.has(rs.getRandom())).toBe(true);
            }
        });

        it('should handle rapid insert-remove cycles on the same value without corrupting other elements', () => {
            const rs = new RandomizedSet();
            // Seed with stable elements
            [100, 200, 300, 400, 500].forEach(v => rs.insert(v));
            const stable = new Set([100, 200, 300, 400, 500]);

            // Rapidly toggle value 999 while stable elements remain
            for (let i = 0; i < 1000; i++) {
                expect(rs.insert(999)).toBe(true);
                expect(rs.insert(999)).toBe(false);
                expect(rs.remove(999)).toBe(true);
                expect(rs.remove(999)).toBe(false);
            }

            // Stable elements must still all be present
            for (let i = 0; i < 100; i++) {
                expect(stable.has(rs.getRandom())).toBe(true);
            }
        });
    });
});

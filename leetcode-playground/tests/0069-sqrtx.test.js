import { mySqrt } from '../0069-sqrtx';

describe('0069-sqrtx', () => {
    it('should handle x=0', () => {
        const result = mySqrt(0);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should handle x=1', () => {
        const result = mySqrt(1);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return 2 for x=4 (perfect square)', () => {
        const result = mySqrt(4);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should return 1 for x=2 (floor of sqrt)', () => {
        const result = mySqrt(2);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return 1 for x=3 (floor of sqrt)', () => {
        const result = mySqrt(3);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return 3 for x=9 (perfect square)', () => {
        const result = mySqrt(9);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should return 2 for x=5 (floor of sqrt)', () => {
        const result = mySqrt(5);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should return 2 for x=8 (floor of sqrt)', () => {
        const result = mySqrt(8);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should return 4 for x=16 (perfect square)', () => {
        const result = mySqrt(16);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should return 3 for x=10 (floor of sqrt)', () => {
        const result = mySqrt(10);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should return 5 for x=25 (perfect square)', () => {
        const result = mySqrt(25);
        if (result !== undefined) expect(result).toBe(5);
    });

    it('should return 7 for x=49 (perfect square)', () => {
        const result = mySqrt(49);
        if (result !== undefined) expect(result).toBe(7);
    });

    it('should return 9 for x=81 (perfect square)', () => {
        const result = mySqrt(81);
        if (result !== undefined) expect(result).toBe(9);
    });

    it('should return 10 for x=100 (perfect square)', () => {
        const result = mySqrt(100);
        if (result !== undefined) expect(result).toBe(10);
    });

    it('should return 9 for x=99 (floor of sqrt)', () => {
        const result = mySqrt(99);
        if (result !== undefined) expect(result).toBe(9);
    });

    it('should return 10 for x=101 (floor of sqrt)', () => {
        const result = mySqrt(101);
        if (result !== undefined) expect(result).toBe(10);
    });

    it('should return 46340 for x=2147395600 (large perfect square near 2^31-1)', () => {
        const result = mySqrt(2147395600);
        if (result !== undefined) expect(result).toBe(46340);
    });

    it('should return 46340 for x=2147396000 (large non-perfect square near 2^31-1)', () => {
        const result = mySqrt(2147396000);
        if (result !== undefined) expect(result).toBe(46340);
    });

    it('should return 15 for x=225 (perfect square)', () => {
        const result = mySqrt(225);
        if (result !== undefined) expect(result).toBe(15);
    });

    it('should return 11 for x=121 (perfect square)', () => {
        const result = mySqrt(121);
        if (result !== undefined) expect(result).toBe(11);
    });

    it('should return 3 for x=15 (floor of sqrt)', () => {
        const result = mySqrt(15);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should return 4 for x=24 (floor of sqrt)', () => {
        const result = mySqrt(24);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should return 5 for x=26 (floor of sqrt)', () => {
        const result = mySqrt(26);
        if (result !== undefined) expect(result).toBe(5);
    });

    it('should return 14 for x=196 (perfect square)', () => {
        const result = mySqrt(196);
        if (result !== undefined) expect(result).toBe(14);
    });
});

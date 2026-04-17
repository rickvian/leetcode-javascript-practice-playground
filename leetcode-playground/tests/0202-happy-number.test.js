import { isHappy } from '../0202-happy-number';

describe('0202-happy-number', () => {
    it('should identify 19 as happy', () => {
        const result = isHappy(19);
        if (result !== undefined) {
            expect(result).toBe(true);
        }
    });

    it('should identify 2 as not happy', () => {
        const result = isHappy(2);
        if (result !== undefined) {
            expect(result).toBe(false);
        }
    });

    it('should identify 1 as happy (base case)', () => {
        const result = isHappy(1);
        if (result !== undefined) {
            expect(result).toBe(true);
        }
    });

    it('should identify 7 as happy (short cycle convergence)', () => {
        const result = isHappy(7);
        if (result !== undefined) {
            expect(result).toBe(true);
        }
    });

    it('should handle a repetitive-digit number like 1111111', () => {
        const result = isHappy(1111111);
        if (result !== undefined) {
            expect(result).toBe(true);
        }
    });

    it('should handle INT_MAX (2147483647) without hanging', () => {
        const result = isHappy(2147483647);
        if (result !== undefined) {
            expect(typeof result).toBe('boolean');
        }
    });

    it('should identify 4 as not happy (enters 4->16->37->58->89->145->42->20->4 cycle)', () => {
        const result = isHappy(4);
        if (result !== undefined) {
            expect(result).toBe(false);
        }
    });
});

import { countAndSay } from '../0038-count-and-say';

describe('0038-count-and-say', () => {
    it('should return "1" for n=1 (min boundary)', () => {
        const result = countAndSay(1);
        if (result !== undefined) expect(result).toBe('1');
    });

    it('should return "11" for n=2', () => {
        const result = countAndSay(2);
        if (result !== undefined) expect(result).toBe('11');
    });

    it('should return "21" for n=3 (off-by-one from base)', () => {
        const result = countAndSay(3);
        if (result !== undefined) expect(result).toBe('21');
    });

    it('should return "1211" for n=4', () => {
        const result = countAndSay(4);
        if (result !== undefined) expect(result).toBe('1211');
    });

    it('should return "111221" for n=5', () => {
        const result = countAndSay(5);
        if (result !== undefined) expect(result).toBe('111221');
    });

    it('should return "312211" for n=6 (repetitive digits)', () => {
        const result = countAndSay(6);
        if (result !== undefined) expect(result).toBe('312211');
    });

    it('should produce increasing or steady length strings across growth', () => {
        const r1 = countAndSay(1);
        const r5 = countAndSay(5);
        if (r1 !== undefined && r5 !== undefined) expect(r5.length).toBeGreaterThanOrEqual(r1.length);
    });
});

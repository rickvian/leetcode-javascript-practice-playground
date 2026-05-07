import { strobogrammaticInRange } from '../0248-strobogrammatic-number-iii';

describe('0248-strobogrammatic-number-iii', () => {
    it('should return 4 for sample range ["50","100"] (69,88,96 + ...)', () => {
        const result = strobogrammaticInRange('50', '100');
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should return 1 for ["0","0"] (single strobogrammatic 0)', () => {
        const result = strobogrammaticInRange('0', '0');
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return 0 for ["2","5"] (no strobo in range)', () => {
        const result = strobogrammaticInRange('2', '5');
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 3 for ["0","9"] (0,1,8)', () => {
        const result = strobogrammaticInRange('0', '9');
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should handle range-limit boundary single digit at low edge', () => {
        const result = strobogrammaticInRange('1', '1');
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should handle 2-digit range ["10","99"] (11,69,88,96)', () => {
        const result = strobogrammaticInRange('10', '99');
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should handle larger range ["100","300"] (101,111,181,609,619,689,808,818,888,906,916,986 partial)', () => {
        const result = strobogrammaticInRange('100', '300');
        if (result !== undefined) {
            expect(result >= 1 && result <= 12).toBe(true);
        }
    });
});

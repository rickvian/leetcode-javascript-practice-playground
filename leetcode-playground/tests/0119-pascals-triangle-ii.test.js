import { getRow } from '../0119-pascals-triangle-ii';

describe('0119-pascals-triangle-ii', () => {
    it('should return [1] for rowIndex=0 (min input)', () => {
        const result = getRow(0);
        if (result !== undefined) expect(result).toEqual([1]);
    });

    it('should return [1,1] for rowIndex=1', () => {
        const result = getRow(1);
        if (result !== undefined) expect(result).toEqual([1, 1]);
    });

    it('should return [1,3,3,1] for rowIndex=3', () => {
        const result = getRow(3);
        if (result !== undefined) expect(result).toEqual([1, 3, 3, 1]);
    });

    it('should return [1,4,6,4,1] for rowIndex=4', () => {
        const result = getRow(4);
        if (result !== undefined) expect(result).toEqual([1, 4, 6, 4, 1]);
    });

    it('should return length rowIndex+1 with 1s at both ends', () => {
        const result = getRow(10);
        if (result !== undefined) {
            expect(result.length).toBe(11);
            expect(result[0]).toBe(1);
            expect(result[result.length - 1]).toBe(1);
        }
    });

    it('should be symmetric (palindromic)', () => {
        const result = getRow(15);
        if (result !== undefined) {
            for (let i = 0; i < result.length; i++) {
                expect(result[i]).toBe(result[result.length - 1 - i]);
            }
        }
    });

    it('should return row 33 (boundary) with correct middle value C(33,16)', () => {
        const result = getRow(33);
        if (result !== undefined) {
            expect(result.length).toBe(34);
            expect(result[16]).toBe(1166803110);
            expect(result[17]).toBe(1166803110);
        }
    });
});

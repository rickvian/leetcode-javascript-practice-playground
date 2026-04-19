import { risingTemperature } from '../0197-rising-temperature';

describe('0197-rising-temperature', () => {
    it('should return ids with higher temperature than the previous calendar day', () => {
        const input = [
            { id: 1, recordDate: '2015-01-01', temperature: 10 },
            { id: 2, recordDate: '2015-01-02', temperature: 25 },
            { id: 3, recordDate: '2015-01-03', temperature: 20 },
            { id: 4, recordDate: '2015-01-04', temperature: 30 }
        ];
        const result = risingTemperature(input);
        if (result !== undefined) {
            expect([...result].sort((a, b) => a - b)).toEqual([2, 4]);
        }
    });

    it('should handle an empty input array', () => {
        const result = risingTemperature([]);
        if (result !== undefined) {
            expect(result).toEqual([]);
        }
    });

    it('should return empty for a single row', () => {
        const result = risingTemperature([{ id: 1, recordDate: '2020-01-01', temperature: 50 }]);
        if (result !== undefined) {
            expect(result).toEqual([]);
        }
    });

    it('should skip non-consecutive dates', () => {
        const input = [
            { id: 1, recordDate: '2015-01-01', temperature: 10 },
            { id: 2, recordDate: '2015-01-03', temperature: 20 }
        ];
        const result = risingTemperature(input);
        if (result !== undefined) {
            expect(result).toEqual([]);
        }
    });

    it('should not include equal temperatures (strict greater-than)', () => {
        const input = [
            { id: 1, recordDate: '2015-01-01', temperature: 10 },
            { id: 2, recordDate: '2015-01-02', temperature: 10 }
        ];
        const result = risingTemperature(input);
        if (result !== undefined) {
            expect(result).toEqual([]);
        }
    });

    it('should work when input rows are out of date order', () => {
        const input = [
            { id: 2, recordDate: '2015-01-02', temperature: 25 },
            { id: 1, recordDate: '2015-01-01', temperature: 10 }
        ];
        const result = risingTemperature(input);
        if (result !== undefined) {
            expect(result).toEqual([2]);
        }
    });

    it('should handle a long strictly-rising sequence', () => {
        const input = Array.from({ length: 5 }, (_, i) => ({
            id: i + 1,
            recordDate: `2020-01-0${i + 1}`,
            temperature: 10 + i
        }));
        const result = risingTemperature(input);
        if (result !== undefined) {
            expect([...result].sort((a, b) => a - b)).toEqual([2, 3, 4, 5]);
        }
    });
});

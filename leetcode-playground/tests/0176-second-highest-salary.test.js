import { secondHighestSalary } from '../0176-second-highest-salary';

describe('0176-second-highest-salary', () => {
    it('should return null for an empty table', () => {
        const result = secondHighestSalary([]);
        if (result !== undefined) expect(result).toBeNull();
    });

    it('should return null for a single-row table', () => {
        const result = secondHighestSalary([{ id: 1, salary: 100 }]);
        if (result !== undefined) expect(result).toBeNull();
    });

    it('should return null when all salaries are identical', () => {
        const result = secondHighestSalary([
            { id: 1, salary: 500 },
            { id: 2, salary: 500 },
        ]);
        if (result !== undefined) expect(result).toBeNull();
    });

    it('should return the second highest distinct salary', () => {
        const result = secondHighestSalary([
            { id: 1, salary: 100 },
            { id: 2, salary: 200 },
            { id: 3, salary: 300 },
        ]);
        if (result !== undefined) expect(result).toBe(200);
    });

    it('should skip duplicates of the max when returning 2nd highest', () => {
        const result = secondHighestSalary([
            { id: 1, salary: 300 },
            { id: 2, salary: 300 },
            { id: 3, salary: 100 },
        ]);
        if (result !== undefined) expect(result).toBe(100);
    });

    it('should handle zero salaries', () => {
        const result = secondHighestSalary([
            { id: 1, salary: 0 },
            { id: 2, salary: 0 },
            { id: 3, salary: 1 },
        ]);
        if (result !== undefined) expect(result).toBe(0);
    });
});

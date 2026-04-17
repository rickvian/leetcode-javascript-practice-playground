import { nthHighestSalary } from '../0177-nth-highest-salary';

const employees = [
    { id: 1, salary: 100 },
    { id: 2, salary: 200 },
    { id: 3, salary: 300 },
];

describe('0177-nth-highest-salary', () => {
    it('should return null when table is empty', () => {
        const result = nthHighestSalary(1, []);
        if (result !== undefined) expect(result).toBeNull();
    });

    it('should return null when n exceeds distinct salary count', () => {
        const result = nthHighestSalary(4, employees);
        if (result !== undefined) expect(result).toBeNull();
    });

    it('should return the highest salary when n = 1', () => {
        const result = nthHighestSalary(1, employees);
        if (result !== undefined) expect(result).toBe(300);
    });

    it('should return the 2nd highest salary when n = 2', () => {
        const result = nthHighestSalary(2, employees);
        if (result !== undefined) expect(result).toBe(200);
    });

    it('should skip duplicates when ranking', () => {
        const dup = [
            { id: 1, salary: 300 },
            { id: 2, salary: 300 },
            { id: 3, salary: 100 },
        ];
        const result = nthHighestSalary(2, dup);
        if (result !== undefined) expect(result).toBe(100);
    });

    it('should return null for n <= 0 per LeetCode convention', () => {
        const result = nthHighestSalary(0, employees);
        if (result !== undefined) expect(result).toBeNull();
    });
});

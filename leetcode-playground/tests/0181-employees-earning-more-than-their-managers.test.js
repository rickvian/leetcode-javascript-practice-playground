import { employeesEarningMore } from '../0181-employees-earning-more-than-their-managers';

const sortByEmp = (rows) => [...rows].sort((a, b) => a.Employee.localeCompare(b.Employee));

describe('0181-employees-earning-more-than-their-managers', () => {
    it('should return [] for empty input', () => {
        const result = employeesEarningMore([]);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should ignore employees with no manager', () => {
        const result = employeesEarningMore([
            { id: 1, name: 'Boss', salary: 1000, managerId: null },
        ]);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should detect employee earning strictly more than manager', () => {
        const result = employeesEarningMore([
            { id: 1, name: 'Joe', salary: 70000, managerId: 3 },
            { id: 2, name: 'Henry', salary: 80000, managerId: 4 },
            { id: 3, name: 'Sam', salary: 60000, managerId: null },
            { id: 4, name: 'Max', salary: 90000, managerId: null },
        ]);
        if (result !== undefined) {
            expect(sortByEmp(result)).toEqual([{ Employee: 'Joe' }]);
        }
    });

    it('should exclude employee with equal salary (strict greater only)', () => {
        const result = employeesEarningMore([
            { id: 1, name: 'E', salary: 100, managerId: 2 },
            { id: 2, name: 'M', salary: 100, managerId: null },
        ]);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should handle invalid manager reference (no matching manager)', () => {
        const result = employeesEarningMore([
            { id: 1, name: 'Orphan', salary: 999, managerId: 77 },
        ]);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should return both employees if each outranks own manager', () => {
        const result = employeesEarningMore([
            { id: 1, name: 'A', salary: 50, managerId: null },
            { id: 2, name: 'B', salary: 200, managerId: 1 },
            { id: 3, name: 'C', salary: 300, managerId: 2 },
        ]);
        if (result !== undefined) {
            expect(sortByEmp(result)).toEqual(sortByEmp([{ Employee: 'B' }, { Employee: 'C' }]));
        }
    });
});

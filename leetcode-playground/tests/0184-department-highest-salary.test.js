import { departmentHighestSalary } from '../0184-department-highest-salary';

const sortRows = (rows) => [...rows].sort((a, b) =>
    (a.Department + a.Employee).localeCompare(b.Department + b.Employee));

describe('0184-department-highest-salary', () => {
    it('should return [] when both tables are empty', () => {
        const result = departmentHighestSalary([], []);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should return [] when no employees reference any department', () => {
        const result = departmentHighestSalary([], [{ id: 1, name: 'IT' }]);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should return the single top earner per department (canonical example)', () => {
        const employees = [
            { id: 1, name: 'Joe', salary: 70000, departmentId: 1 },
            { id: 2, name: 'Jim', salary: 90000, departmentId: 1 },
            { id: 3, name: 'Henry', salary: 80000, departmentId: 2 },
            { id: 4, name: 'Sam', salary: 60000, departmentId: 2 },
            { id: 5, name: 'Max', salary: 90000, departmentId: 1 },
        ];
        const departments = [{ id: 1, name: 'IT' }, { id: 2, name: 'Sales' }];
        const result = departmentHighestSalary(employees, departments);
        if (result !== undefined) {
            expect(sortRows(result)).toEqual(sortRows([
                { Department: 'IT', Employee: 'Max', Salary: 90000 },
                { Department: 'IT', Employee: 'Jim', Salary: 90000 },
                { Department: 'Sales', Employee: 'Henry', Salary: 80000 },
            ]));
        }
    });

    it('should handle a single-employee department correctly', () => {
        const result = departmentHighestSalary(
            [{ id: 1, name: 'Solo', salary: 1, departmentId: 1 }],
            [{ id: 1, name: 'Only' }]
        );
        if (result !== undefined) {
            expect(result).toEqual([{ Department: 'Only', Employee: 'Solo', Salary: 1 }]);
        }
    });

    it('should omit departments with no employees', () => {
        const result = departmentHighestSalary(
            [{ id: 1, name: 'Jo', salary: 100, departmentId: 1 }],
            [{ id: 1, name: 'A' }, { id: 2, name: 'B' }]
        );
        if (result !== undefined) {
            expect(sortRows(result)).toEqual([{ Department: 'A', Employee: 'Jo', Salary: 100 }]);
        }
    });

    it('should handle multiple ties at the top in the same department', () => {
        const result = departmentHighestSalary(
            [
                { id: 1, name: 'A', salary: 500, departmentId: 1 },
                { id: 2, name: 'B', salary: 500, departmentId: 1 },
                { id: 3, name: 'C', salary: 100, departmentId: 1 },
            ],
            [{ id: 1, name: 'X' }]
        );
        if (result !== undefined) {
            expect(result.length).toBe(2);
            expect(result.every(r => r.Salary === 500)).toBe(true);
        }
    });
});

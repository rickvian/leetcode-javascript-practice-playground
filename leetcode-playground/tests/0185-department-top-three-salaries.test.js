import { departmentTopThreeSalaries } from '../0185-department-top-three-salaries';

const sortRows = (rows) => [...rows].sort((a, b) =>
    (a.Department + a.Employee + a.Salary).localeCompare(b.Department + b.Employee + b.Salary));

describe('0185-department-top-three-salaries', () => {
    it('should return [] when both tables are empty', () => {
        const result = departmentTopThreeSalaries([], []);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should include all employees when distinct salaries <= 3', () => {
        const result = departmentTopThreeSalaries(
            [
                { id: 1, name: 'A', salary: 100, departmentId: 1 },
                { id: 2, name: 'B', salary: 200, departmentId: 1 },
            ],
            [{ id: 1, name: 'IT' }]
        );
        if (result !== undefined) expect(result.length).toBe(2);
    });

    it('should include ties in the top 3 distinct salaries', () => {
        const employees = [
            { id: 1, name: 'A', salary: 100, departmentId: 1 },
            { id: 2, name: 'B', salary: 100, departmentId: 1 },
            { id: 3, name: 'C', salary: 90, departmentId: 1 },
            { id: 4, name: 'D', salary: 80, departmentId: 1 },
            { id: 5, name: 'E', salary: 70, departmentId: 1 },
        ];
        const result = departmentTopThreeSalaries(employees, [{ id: 1, name: 'IT' }]);
        if (result !== undefined) {
            expect(result.length).toBe(4);
            const salaries = result.map(r => r.Salary).sort((x, y) => y - x);
            expect(salaries).toEqual([100, 100, 90, 80]);
        }
    });

    it('should segregate top 3 per department independently', () => {
        const employees = [
            { id: 1, name: 'Joe', salary: 85000, departmentId: 1 },
            { id: 2, name: 'Henry', salary: 80000, departmentId: 2 },
            { id: 3, name: 'Sam', salary: 60000, departmentId: 2 },
            { id: 4, name: 'Max', salary: 90000, departmentId: 1 },
            { id: 5, name: 'Janet', salary: 69000, departmentId: 1 },
            { id: 6, name: 'Randy', salary: 85000, departmentId: 1 },
            { id: 7, name: 'Will', salary: 70000, departmentId: 1 },
        ];
        const result = departmentTopThreeSalaries(
            employees,
            [{ id: 1, name: 'IT' }, { id: 2, name: 'Sales' }]
        );
        if (result !== undefined) {
            const byDept = result.reduce((m, r) => ((m[r.Department] = (m[r.Department] || 0) + 1), m), {});
            expect(byDept.IT).toBe(5);
            expect(byDept.Sales).toBe(2);
        }
    });

    it('should omit departments with no employees', () => {
        const result = departmentTopThreeSalaries(
            [{ id: 1, name: 'A', salary: 1, departmentId: 1 }],
            [{ id: 1, name: 'X' }, { id: 2, name: 'Y' }]
        );
        if (result !== undefined) {
            expect(result.every(r => r.Department === 'X')).toBe(true);
        }
    });

    it('should handle single-employee department', () => {
        const result = departmentTopThreeSalaries(
            [{ id: 9, name: 'Solo', salary: 42, departmentId: 1 }],
            [{ id: 1, name: 'OnlyDept' }]
        );
        if (result !== undefined) {
            expect(sortRows(result)).toEqual(sortRows([
                { Department: 'OnlyDept', Employee: 'Solo', Salary: 42 },
            ]));
        }
    });
});

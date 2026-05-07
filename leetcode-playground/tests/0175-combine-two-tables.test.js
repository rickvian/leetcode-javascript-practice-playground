import { combineTwoTables } from '../0175-combine-two-tables';

const sortResult = (rows) => [...rows].sort((a, b) =>
    (a.firstName + a.lastName).localeCompare(b.firstName + b.lastName));

describe('0175-combine-two-tables', () => {
    it('should return firstName/lastName with null city/state when no address exists', () => {
        const persons = [{ personId: 1, firstName: 'Allen', lastName: 'Wang' }];
        const addresses = [];
        const result = combineTwoTables(persons, addresses);
        if (result !== undefined) {
            expect(result).toEqual([{ firstName: 'Allen', lastName: 'Wang', city: null, state: null }]);
        }
    });

    it('should left-join person to address when available', () => {
        const persons = [{ personId: 2, firstName: 'Bob', lastName: 'Alice' }];
        const addresses = [{ addressId: 1, personId: 2, city: 'NY', state: 'NY' }];
        const result = combineTwoTables(persons, addresses);
        if (result !== undefined) {
            expect(result).toEqual([{ firstName: 'Bob', lastName: 'Alice', city: 'NY', state: 'NY' }]);
        }
    });

    it('should handle empty person table', () => {
        const result = combineTwoTables([], [{ addressId: 1, personId: 9, city: 'LA', state: 'CA' }]);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should keep persons without matching address', () => {
        const persons = [
            { personId: 1, firstName: 'A', lastName: 'X' },
            { personId: 2, firstName: 'B', lastName: 'Y' },
        ];
        const addresses = [{ addressId: 10, personId: 2, city: 'SF', state: 'CA' }];
        const result = combineTwoTables(persons, addresses);
        if (result !== undefined) {
            expect(sortResult(result)).toEqual(sortResult([
                { firstName: 'A', lastName: 'X', city: null, state: null },
                { firstName: 'B', lastName: 'Y', city: 'SF', state: 'CA' },
            ]));
        }
    });

    it('should handle repetitive person rows unchanged', () => {
        const persons = [
            { personId: 1, firstName: 'Same', lastName: 'Same' },
            { personId: 2, firstName: 'Same', lastName: 'Same' },
        ];
        const result = combineTwoTables(persons, []);
        if (result !== undefined) expect(result.length).toBe(2);
    });

    it('should ignore addresses with no matching person', () => {
        const persons = [{ personId: 1, firstName: 'Only', lastName: 'One' }];
        const addresses = [{ addressId: 99, personId: 42, city: 'Nowhere', state: 'NA' }];
        const result = combineTwoTables(persons, addresses);
        if (result !== undefined) {
            expect(result).toEqual([{ firstName: 'Only', lastName: 'One', city: null, state: null }]);
        }
    });
});

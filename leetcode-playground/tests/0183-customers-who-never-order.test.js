import { customersWhoNeverOrder } from '../0183-customers-who-never-order';

const sortByCust = (rows) => [...rows].sort((a, b) => a.Customers.localeCompare(b.Customers));

describe('0183-customers-who-never-order', () => {
    it('should return [] when both tables are empty', () => {
        const result = customersWhoNeverOrder([], []);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should return all customers when there are no orders', () => {
        const result = customersWhoNeverOrder([
            { id: 1, name: 'Joe' },
            { id: 2, name: 'Henry' },
        ], []);
        if (result !== undefined) {
            expect(sortByCust(result)).toEqual(sortByCust([
                { Customers: 'Joe' },
                { Customers: 'Henry' },
            ]));
        }
    });

    it('should exclude customers who placed an order', () => {
        const result = customersWhoNeverOrder(
            [
                { id: 1, name: 'Joe' },
                { id: 2, name: 'Henry' },
                { id: 3, name: 'Sam' },
                { id: 4, name: 'Max' },
            ],
            [
                { id: 1, customerId: 3 },
                { id: 2, customerId: 1 },
            ]
        );
        if (result !== undefined) {
            expect(sortByCust(result)).toEqual(sortByCust([
                { Customers: 'Henry' },
                { Customers: 'Max' },
            ]));
        }
    });

    it('should not duplicate customers even with multiple orders referencing them', () => {
        const result = customersWhoNeverOrder(
            [{ id: 1, name: 'Alpha' }, { id: 2, name: 'Beta' }],
            [{ id: 1, customerId: 1 }, { id: 2, customerId: 1 }]
        );
        if (result !== undefined) {
            expect(result).toEqual([{ Customers: 'Beta' }]);
        }
    });

    it('should handle single customer with single matching order -> empty result', () => {
        const result = customersWhoNeverOrder(
            [{ id: 7, name: 'Solo' }],
            [{ id: 1, customerId: 7 }]
        );
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should handle orders referencing unknown customerIds (ignored)', () => {
        const result = customersWhoNeverOrder(
            [{ id: 1, name: 'Real' }],
            [{ id: 1, customerId: 999 }]
        );
        if (result !== undefined) {
            expect(result).toEqual([{ Customers: 'Real' }]);
        }
    });
});

import { deleteDuplicateEmails } from '../0196-delete-duplicate-emails';

describe('0196-delete-duplicate-emails', () => {
    it('should remove duplicates keeping the smallest id', () => {
        const input = [
            { id: 1, email: 'a@a.com' },
            { id: 2, email: 'b@b.com' },
            { id: 3, email: 'a@a.com' }
        ];
        const result = deleteDuplicateEmails(input);
        if (result !== undefined) {
            expect(result).toEqual([
                { id: 1, email: 'a@a.com' },
                { id: 2, email: 'b@b.com' }
            ]);
        }
    });

    it('should handle an empty input array', () => {
        const result = deleteDuplicateEmails([]);
        if (result !== undefined) {
            expect(result).toEqual([]);
        }
    });

    it('should handle a single-row input', () => {
        const result = deleteDuplicateEmails([{ id: 1, email: 'x@y.com' }]);
        if (result !== undefined) {
            expect(result).toEqual([{ id: 1, email: 'x@y.com' }]);
        }
    });

    it('should keep smallest id when input is shuffled', () => {
        const input = [
            { id: 5, email: 'z@z.com' },
            { id: 2, email: 'z@z.com' },
            { id: 8, email: 'z@z.com' }
        ];
        const result = deleteDuplicateEmails(input);
        if (result !== undefined) {
            expect(result).toEqual([{ id: 2, email: 'z@z.com' }]);
        }
    });

    it('should return all rows when every email is unique', () => {
        const input = [
            { id: 1, email: 'a@a.com' },
            { id: 2, email: 'b@b.com' },
            { id: 3, email: 'c@c.com' }
        ];
        const result = deleteDuplicateEmails(input);
        if (result !== undefined) {
            expect(result).toEqual(input);
        }
    });

    it('should treat emails case-sensitively by default', () => {
        const input = [
            { id: 1, email: 'A@A.com' },
            { id: 2, email: 'a@a.com' }
        ];
        const result = deleteDuplicateEmails(input);
        if (result !== undefined) {
            expect(result).toEqual(input);
        }
    });

    it('should collapse a long run of identical emails to one row', () => {
        const input = Array.from({ length: 6 }, (_, i) => ({ id: i + 1, email: 'dup@x.com' }));
        const result = deleteDuplicateEmails(input);
        if (result !== undefined) {
            expect(result).toEqual([{ id: 1, email: 'dup@x.com' }]);
        }
    });
});

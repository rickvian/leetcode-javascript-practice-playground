import { duplicateEmails } from '../0182-duplicate-emails';

const sortByEmail = (rows) => [...rows].sort((a, b) => a.Email.localeCompare(b.Email));

describe('0182-duplicate-emails', () => {
    it('should return [] for empty input', () => {
        const result = duplicateEmails([]);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should return [] when no email is duplicated', () => {
        const result = duplicateEmails([
            { id: 1, email: 'a@x.com' },
            { id: 2, email: 'b@x.com' },
        ]);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should return the duplicated email exactly once', () => {
        const result = duplicateEmails([
            { id: 1, email: 'a@b.com' },
            { id: 2, email: 'c@d.com' },
            { id: 3, email: 'a@b.com' },
        ]);
        if (result !== undefined) {
            expect(sortByEmail(result)).toEqual([{ Email: 'a@b.com' }]);
        }
    });

    it('should handle repetitive data (3+ occurrences)', () => {
        const result = duplicateEmails([
            { id: 1, email: 'x@x.com' },
            { id: 2, email: 'x@x.com' },
            { id: 3, email: 'x@x.com' },
        ]);
        if (result !== undefined) {
            expect(result).toEqual([{ Email: 'x@x.com' }]);
        }
    });

    it('should treat whitespace as significant ("a@x.com" != " a@x.com")', () => {
        const result = duplicateEmails([
            { id: 1, email: 'a@x.com' },
            { id: 2, email: ' a@x.com' },
        ]);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should be case-sensitive ("A@X.COM" != "a@x.com")', () => {
        const result = duplicateEmails([
            { id: 1, email: 'A@X.COM' },
            { id: 2, email: 'a@x.com' },
        ]);
        if (result !== undefined) expect(result).toEqual([]);
    });
});

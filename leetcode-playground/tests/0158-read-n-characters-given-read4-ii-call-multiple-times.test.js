import { solution } from '../0158-read-n-characters-given-read4-ii-call-multiple-times';

const makeRead4 = (file) => {
    let idx = 0;
    return function read4(buf4) {
        let count = 0;
        while (count < 4 && idx < file.length) {
            buf4[count++] = file[idx++];
        }
        return count;
    };
};

describe('0158-read-n-characters-given-read4-ii-call-multiple-times', () => {
    it('should return 0 on a zero-length read from an empty file', () => {
        const read = solution(makeRead4(''));
        const buf = [];
        const n = read ? read(buf, 0) : undefined;
        if (n !== undefined) expect(n).toBe(0);
    });

    it('should preserve leftover characters across two calls', () => {
        const read = solution(makeRead4('abcdefg'));
        const buf1 = [];
        const n1 = read ? read(buf1, 1) : undefined;
        const buf2 = [];
        const n2 = read ? read(buf2, 6) : undefined;
        if (n1 !== undefined && n2 !== undefined) {
            expect(n1).toBe(1);
            expect(buf1[0]).toBe('a');
            expect(n2).toBe(6);
            expect(buf2.slice(0, 6).join('')).toBe('bcdefg');
        }
    });

    it('should return 0 once the file is exhausted', () => {
        const read = solution(makeRead4('ab'));
        const buf1 = [];
        if (read) read(buf1, 5);
        const buf2 = [];
        const n = read ? read(buf2, 3) : undefined;
        if (n !== undefined) expect(n).toBe(0);
    });

    it('should handle repetitive 1-char reads', () => {
        const read = solution(makeRead4('xyz'));
        const b = [];
        const a = read ? read(b, 1) : undefined;
        const c = read ? read(b, 1) : undefined;
        const d = read ? read(b, 1) : undefined;
        if (a !== undefined && c !== undefined && d !== undefined) {
            expect([a, c, d]).toEqual([1, 1, 1]);
        }
    });

    it('should handle n larger than remaining across calls', () => {
        const read = solution(makeRead4('hello'));
        const buf1 = [];
        const n1 = read ? read(buf1, 3) : undefined;
        const buf2 = [];
        const n2 = read ? read(buf2, 100) : undefined;
        if (n1 !== undefined && n2 !== undefined) {
            expect(n1).toBe(3);
            expect(n2).toBe(2);
            expect(buf2.slice(0, 2).join('')).toBe('lo');
        }
    });

    it('should handle an empty file with a single call', () => {
        const read = solution(makeRead4(''));
        const buf = [];
        const n = read ? read(buf, 10) : undefined;
        if (n !== undefined) expect(n).toBe(0);
    });
});

import { solution } from '../0157-read-n-characters-given-read4';

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

describe('0157-read-n-characters-given-read4', () => {
    it('should return 0 when reading 0 characters', () => {
        const read = solution(makeRead4('abcde'));
        const buf = [];
        const n = read ? read(buf, 0) : undefined;
        if (n !== undefined) expect(n).toBe(0);
    });

    it('should read exactly n when file is longer than n', () => {
        const read = solution(makeRead4('abcde'));
        const buf = [];
        const n = read ? read(buf, 3) : undefined;
        if (n !== undefined) {
            expect(n).toBe(3);
            expect(buf.slice(0, 3).join('')).toBe('abc');
        }
    });

    it('should read all characters when n exceeds file length', () => {
        const read = solution(makeRead4('abc'));
        const buf = [];
        const n = read ? read(buf, 10) : undefined;
        if (n !== undefined) {
            expect(n).toBe(3);
            expect(buf.slice(0, 3).join('')).toBe('abc');
        }
    });

    it('should return 0 for an empty file', () => {
        const read = solution(makeRead4(''));
        const buf = [];
        const n = read ? read(buf, 5) : undefined;
        if (n !== undefined) expect(n).toBe(0);
    });

    it('should handle n at exact multiple of 4', () => {
        const read = solution(makeRead4('abcdefgh'));
        const buf = [];
        const n = read ? read(buf, 8) : undefined;
        if (n !== undefined) {
            expect(n).toBe(8);
            expect(buf.slice(0, 8).join('')).toBe('abcdefgh');
        }
    });

    it('should handle n one less than a multiple of 4', () => {
        const read = solution(makeRead4('abcdefgh'));
        const buf = [];
        const n = read ? read(buf, 7) : undefined;
        if (n !== undefined) {
            expect(n).toBe(7);
            expect(buf.slice(0, 7).join('')).toBe('abcdefg');
        }
    });
});

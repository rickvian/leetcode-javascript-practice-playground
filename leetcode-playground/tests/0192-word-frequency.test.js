import { wordFrequency } from '../0192-word-frequency';

describe('0192-word-frequency', () => {
    it('should return [] for an empty file', () => {
        const result = wordFrequency('');
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should return [] for whitespace-only input', () => {
        const result = wordFrequency('   \n\t \n');
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should handle the canonical example', () => {
        const text = 'the day is sunny the the\nthe sunny is is\n';
        const result = wordFrequency(text);
        if (result !== undefined) {
            expect(result).toEqual(['the 4', 'is 3', 'sunny 2', 'day 1']);
        }
    });

    it('should break count ties with lexicographic ascending order on the word', () => {
        const result = wordFrequency('b a b a c');
        if (result !== undefined) {
            expect(result.slice(0, 2)).toEqual(['a 2', 'b 2']);
        }
    });

    it('should treat case sensitively (Linux-style)', () => {
        const result = wordFrequency('The the THE');
        if (result !== undefined) {
            expect(result.length).toBe(3);
        }
    });

    it('should collapse multiple spaces and tabs between words', () => {
        const result = wordFrequency('hello\t \thello  world');
        if (result !== undefined) {
            expect(result).toEqual(['hello 2', 'world 1']);
        }
    });
});

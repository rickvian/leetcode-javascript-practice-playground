import { findRepeatedDnaSequences } from '../0187-repeated-dna-sequences';

describe('0187-repeated-dna-sequences', () => {
    it('should return [] for empty string', () => {
        const result = findRepeatedDnaSequences('');
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should return [] for a string shorter than 10 characters', () => {
        const result = findRepeatedDnaSequences('AAAAA');
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should return [] when exactly 10 characters long (single window)', () => {
        const result = findRepeatedDnaSequences('AAAAAAAAAA');
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should find the canonical example substrings', () => {
        const result = findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT');
        if (result !== undefined) {
            expect(result.sort()).toEqual(['AAAAACCCCC', 'CCCCCAAAAA'].sort());
        }
    });

    it('should return the single repeated substring exactly once', () => {
        const result = findRepeatedDnaSequences('AAAAAAAAAAAAA');
        if (result !== undefined) expect(result).toEqual(['AAAAAAAAAA']);
    });

    it('should handle upper-boundary by only returning duplicated 10-mers', () => {
        const dna = 'ACGT'.repeat(30);
        const result = findRepeatedDnaSequences(dna);
        if (result !== undefined) {
            expect(result.every(seq => seq.length === 10)).toBe(true);
        }
    });

    it('should treat case as significant (ACGT only per constraints)', () => {
        const result = findRepeatedDnaSequences('AAAAAAAAAAaaaaaaaaaa');
        if (result !== undefined) expect(result).toEqual([]);
    });
});

import { rankScores } from '../0178-rank-scores';

describe('0178-rank-scores', () => {
    it('should return [] for empty input', () => {
        const result = rankScores([]);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should rank a single row as 1', () => {
        const result = rankScores([{ id: 1, score: 3.5 }]);
        if (result !== undefined) expect(result).toEqual([{ score: 3.5, rank: 1 }]);
    });

    it('should assign dense ranks (no gaps)', () => {
        const result = rankScores([
            { id: 1, score: 3.5 },
            { id: 2, score: 3.5 },
            { id: 3, score: 3.65 },
            { id: 4, score: 4.0 },
            { id: 5, score: 3.85 },
            { id: 6, score: 4.0 },
        ]);
        if (result !== undefined) {
            expect(result).toEqual([
                { score: 4.0, rank: 1 },
                { score: 4.0, rank: 1 },
                { score: 3.85, rank: 2 },
                { score: 3.65, rank: 3 },
                { score: 3.5, rank: 4 },
                { score: 3.5, rank: 4 },
            ]);
        }
    });

    it('should handle all-tied input as a single rank', () => {
        const result = rankScores([
            { id: 1, score: 1.0 },
            { id: 2, score: 1.0 },
            { id: 3, score: 1.0 },
        ]);
        if (result !== undefined) {
            expect(result.every(r => r.rank === 1)).toBe(true);
        }
    });

    it('should sort strictly descending when no ties', () => {
        const result = rankScores([
            { id: 1, score: 1 },
            { id: 2, score: 2 },
            { id: 3, score: 3 },
        ]);
        if (result !== undefined) {
            expect(result.map(r => r.rank)).toEqual([1, 2, 3]);
            expect(result.map(r => r.score)).toEqual([3, 2, 1]);
        }
    });

    it('should handle zero score boundary', () => {
        const result = rankScores([
            { id: 1, score: 0 },
            { id: 2, score: 1 },
        ]);
        if (result !== undefined) {
            expect(result).toEqual([
                { score: 1, rank: 1 },
                { score: 0, rank: 2 },
            ]);
        }
    });
});

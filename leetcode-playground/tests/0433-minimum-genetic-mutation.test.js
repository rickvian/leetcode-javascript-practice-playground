import { minMutation } from '../0433-minimum-genetic-mutation';

describe('0433-minimum-genetic-mutation', () => {
    // LeetCode official example 1
    it('should handle example 1 - valid single mutation', () => {
        expect(minMutation('AACCGGTT', 'AACCGGTA', ['AACCGGTA'])).toEqual(1);
    });

    // endGene not in bank - returns -1
    it('should return -1 when endGene is not in bank', () => {
        expect(minMutation('AACCGGTT', 'AAACCCTA', ['AACCGGTA', 'AACCGCTA', 'AAACCCTA'])).toEqual(-1);
    });

    // Empty bank
    it('should return -1 when bank is empty', () => {
        expect(minMutation('AACCGGTT', 'AACCGGTA', [])).toEqual(-1);
    });

    // startGene equals endGene (must still be in bank)
    it('should return 0 when startGene equals endGene', () => {
        expect(minMutation('AACCGGTT', 'AACCGGTT', ['AACCGGTT'])).toEqual(0);
    });

    // endGene not reachable via mutation chain
    it('should return -1 when endGene is not reachable', () => {
        expect(minMutation('AACCGGTT', 'AACCGGTA', ['AACCCCCC', 'TTTTTTTT'])).toEqual(-1);
    });

    // bank does not contain endGene
    it('should return -1 when bank does not contain endGene', () => {
        expect(minMutation('AACCGGTT', 'AACCGGTA', ['AACCGGAA', 'AACCGGCC'])).toEqual(-1);
    });

    // Single mutation step path
    it('should handle single mutation step', () => {
        expect(minMutation('AAAAAAAA', 'AAAAACAA', ['AAAAACAA'])).toEqual(1);
    });

    // Valid path with multiple steps
    it('should return minimum mutations when path exists', () => {
        expect(minMutation('AACCGGTT', 'AACCGGTA', ['AACCGGTA', 'AACCGGAA', 'AACCCCTA'])).toEqual(1);
    });

    // Another reachable path scenario
    it('should handle cases where endGene is reachable', () => {
        expect(minMutation('AAAAAAAA', 'AAAAAACC', ['AAAAACAA', 'AAAACCAA', 'AAAAAACC'])).toEqual(-1);
    });
});

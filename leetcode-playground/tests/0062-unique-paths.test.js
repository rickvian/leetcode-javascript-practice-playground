import { uniquePaths } from '../0062-unique-paths';

describe('0062-unique-paths', () => {
    it('should return correct number of unique paths for 3x7 grid', () => {
        expect(uniquePaths(3, 7)).toBe(28);
    });

    it('should return correct number of unique paths for 3x3 grid', () => {
        expect(uniquePaths(3, 3)).toBe(6);
    });

    it('should return 1 for a 1x1 grid', () => {
        expect(uniquePaths(1, 1)).toBe(1);
    });
});

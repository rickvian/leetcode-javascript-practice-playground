import { numIslands } from '../0200-number-of-islands';

describe('0200-number-of-islands', () => {
    it('should return 1 for single connected island', () => {
        const grid = [
            ['1', '1', '1', '1', '0'],
            ['1', '1', '0', '1', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '0', '0', '0']
        ];
        expect(numIslands(grid)).toBe(1);
    });

    it('should return 3 for three separate islands', () => {
        const grid = [
            ['1', '1', '0', '0', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '1', '0', '0'],
            ['0', '0', '0', '1', '1']
        ];
        expect(numIslands(grid)).toBe(3);
    });

    it('should return 0 for all water', () => {
        const grid = [
            ['0', '0', '0'],
            ['0', '0', '0'],
            ['0', '0', '0']
        ];
        expect(numIslands(grid)).toBe(0);
    });

    it('should return 1 for all land', () => {
        const grid = [
            ['1', '1', '1'],
            ['1', '1', '1'],
            ['1', '1', '1']
        ];
        expect(numIslands(grid)).toBe(1);
    });

    it('should return correct count for diagonal land cells (each separate)', () => {
        const grid = [
            ['1', '0', '1'],
            ['0', '1', '0'],
            ['1', '0', '1']
        ];
        expect(numIslands(grid)).toBe(5);
    });

    it('should handle single cell land', () => {
        expect(numIslands([['1']])).toBe(1);
    });

    it('should handle single cell water', () => {
        expect(numIslands([['0']])).toBe(0);
    });

    it('should handle single row', () => {
        expect(numIslands([['1', '0', '1', '0', '1']])).toBe(3);
    });
});

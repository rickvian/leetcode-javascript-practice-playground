import { findMaximizedCapital } from '../0502-ipo';

describe('0502-ipo', () => {
    it('should handle official example 1', () => {
        expect(findMaximizedCapital(1, 0, [1, 2, 3], [0, 1, 2])).toEqual(1);
    });

    it('should handle official example 2', () => {
        expect(findMaximizedCapital(10, 0, [1, 2, 3], [0, 1, 2])).toEqual(6);
    });

    it('should return capital unchanged when k=0', () => {
        expect(findMaximizedCapital(0, 100, [10, 20, 30], [0, 50, 100])).toEqual(100);
    });

    it('should return capital unchanged when no projects are affordable', () => {
        expect(findMaximizedCapital(2, 10, [100, 200], [50, 100])).toEqual(10);
    });

    it('should handle k greater than number of projects', () => {
        expect(findMaximizedCapital(5, 0, [1, 2], [0, 1])).toEqual(3);
    });

    it('should maximize capital by greedy profit selection', () => {
        expect(findMaximizedCapital(2, 0, [1, 2, 3], [0, 1, 2])).toEqual(3);
    });

    it('should handle single project affordable', () => {
        expect(findMaximizedCapital(1, 50, [100], [30])).toEqual(150);
    });

    it('should handle single project not affordable', () => {
        expect(findMaximizedCapital(1, 10, [100], [50])).toEqual(10);
    });

    it('should handle all projects affordable with k=all', () => {
        expect(findMaximizedCapital(3, 0, [10, 20, 30], [0, 5, 10])).toEqual(60);
    });

    it('should select highest profit from multiple affordable projects', () => {
        expect(findMaximizedCapital(1, 0, [100, 5, 50], [0, 1, 2])).toEqual(100);
    });

    it('should cascade: first profit enables second project', () => {
        expect(findMaximizedCapital(2, 0, [10, 100], [0, 10])).toEqual(110);
    });

    it('should handle all same capital requirements', () => {
        expect(findMaximizedCapital(2, 10, [50, 60, 70], [5, 5, 5])).toEqual(140);
    });

    it('should handle all same profits', () => {
        expect(findMaximizedCapital(2, 0, [50, 50, 50], [0, 10, 20])).toEqual(100);
    });

    it('should handle mixed affordable and unaffordable', () => {
        expect(findMaximizedCapital(2, 5, [10, 5], [10, 0])).toEqual(20);
    });

    it('should handle capital=0 with affordable projects', () => {
        expect(findMaximizedCapital(1, 0, [100, 200], [0, 50])).toEqual(100);
    });
});

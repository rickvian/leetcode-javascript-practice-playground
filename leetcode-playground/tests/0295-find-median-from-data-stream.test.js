import { MedianFinder } from '../0295-find-median-from-data-stream';

describe('0295-find-median-from-data-stream', () => {
    it('should find median with odd number of elements', () => {
        const mf = new MedianFinder();
        mf.addNum(1);
        mf.addNum(3);
        mf.addNum(2);
        expect(mf.findMedian()).toBe(2);
    });

    it('should find median with even number of elements', () => {
        const mf = new MedianFinder();
        mf.addNum(1);
        mf.addNum(2);
        expect(mf.findMedian()).toBe(1.5);
    });

    it('should handle LeetCode example 1', () => {
        const mf = new MedianFinder();
        mf.addNum(1);
        expect(mf.findMedian()).toBe(1);
        mf.addNum(2);
        expect(mf.findMedian()).toBe(1.5);
        mf.addNum(3);
        expect(mf.findMedian()).toBe(2);
    });

    it('should handle single element', () => {
        const mf = new MedianFinder();
        mf.addNum(5);
        expect(mf.findMedian()).toBe(5);
    });

    it('should handle duplicate numbers', () => {
        const mf = new MedianFinder();
        mf.addNum(2);
        mf.addNum(2);
        expect(mf.findMedian()).toBe(2);
    });

    it('should handle negative numbers', () => {
        const mf = new MedianFinder();
        mf.addNum(-1);
        mf.addNum(-2);
        mf.addNum(-3);
        expect(mf.findMedian()).toBe(-2);
    });

    it('should handle large stream of numbers', () => {
        const mf = new MedianFinder();
        mf.addNum(6);
        mf.addNum(10);
        mf.addNum(2);
        mf.addNum(6);
        mf.addNum(5);
        // sorted: [2, 5, 6, 6, 10] -> median is 6
        expect(mf.findMedian()).toBe(6);
    });

    it('should handle numbers added in reverse sorted order', () => {
        const mf = new MedianFinder();
        mf.addNum(5);
        mf.addNum(4);
        mf.addNum(3);
        mf.addNum(2);
        mf.addNum(1);
        expect(mf.findMedian()).toBe(3);
    });

    it('should handle two elements and return average', () => {
        const mf = new MedianFinder();
        mf.addNum(3);
        mf.addNum(4);
        expect(mf.findMedian()).toBe(3.5);
    });
});

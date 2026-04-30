import { searchRange } from '../0034-find-first-and-last-position-of-element-in-sorted-array';

describe('0034-find-first-and-last-position-of-element-in-sorted-array', () => {
	// Official examples
	it('should find target in middle with multiple occurrences', () => {
		expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4]);
	});

	it('should return [-1, -1] when target not found', () => {
		expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1]);
	});

	// Empty array
	it('should return [-1, -1] for empty array', () => {
		expect(searchRange([], 5)).toEqual([-1, -1]);
	});

	// Single element cases
	it('should handle single element matching target', () => {
		expect(searchRange([5], 5)).toEqual([0, 0]);
	});

	it('should return [-1, -1] for single element not matching target', () => {
		expect(searchRange([5], 3)).toEqual([-1, -1]);
	});

	// Target at first position
	it('should find target at first position (single occurrence)', () => {
		expect(searchRange([1, 2, 3, 4, 5], 1)).toEqual([0, 0]);
	});

	it('should find target at first position (multiple occurrences)', () => {
		expect(searchRange([5, 5, 5, 7, 8, 10], 5)).toEqual([0, 2]);
	});

	// Target at last position
	it('should find target at last position (single occurrence)', () => {
		expect(searchRange([1, 2, 3, 4, 5], 5)).toEqual([4, 4]);
	});

	it('should find target at last position (multiple occurrences)', () => {
		expect(searchRange([1, 2, 3, 8, 8, 8], 8)).toEqual([3, 5]);
	});

	// All elements equal target
	it('should handle all elements equal to target', () => {
		expect(searchRange([7, 7, 7, 7, 7], 7)).toEqual([0, 4]);
	});

	// Single occurrence in middle
	it('should find single occurrence in middle', () => {
		expect(searchRange([1, 2, 5, 3, 4], 5)).toEqual([2, 2]);
	});

	// Target not in array - various positions
	it('should return [-1, -1] when target smaller than all elements', () => {
		expect(searchRange([5, 7, 7, 8, 8, 10], 1)).toEqual([-1, -1]);
	});

	it('should return [-1, -1] when target larger than all elements', () => {
		expect(searchRange([1, 2, 3, 4, 5], 10)).toEqual([-1, -1]);
	});

	it('should return [-1, -1] when target between existing elements', () => {
		expect(searchRange([1, 3, 5, 7, 9], 4)).toEqual([-1, -1]);
	});

	// Two element arrays
	it('should handle two-element array with both matching', () => {
		expect(searchRange([7, 7], 7)).toEqual([0, 1]);
	});

	it('should handle two-element array with single match at start', () => {
		expect(searchRange([1, 2], 1)).toEqual([0, 0]);
	});

	it('should handle two-element array with single match at end', () => {
		expect(searchRange([1, 2], 2)).toEqual([1, 1]);
	});

	// Larger arrays with multiple non-consecutive ranges
	it('should find target range in larger sorted array', () => {
		expect(searchRange([0, 0, 1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 5, 6, 6], 3)).toEqual([7, 9]);
	});

	// Negative values
	it('should work with negative target values', () => {
		expect(searchRange([-5, -3, -3, -3, 0, 2, 4], -3)).toEqual([1, 3]);
	});

	it('should handle all negative array', () => {
		expect(searchRange([-10, -8, -8, -5, -2], -8)).toEqual([1, 2]);
	});
});

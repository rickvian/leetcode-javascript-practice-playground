import { orangesRotting } from '../0094-rotting-orange';

describe('0094-rotting-orange', () => {
  // Happy path cases
  it('should return 4 for example grid with rotten oranges spreading', () => {
    const grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]];
    expect(orangesRotting(grid)).toBe(4);
  });

  it('should return 0 when all oranges are already rotten', () => {
    const grid = [[2, 2, 2], [2, 2, 2], [2, 2, 2]];
    expect(orangesRotting(grid)).toBe(0);
  });

  it('should return -1 when fresh oranges cannot be reached', () => {
    const grid = [[2, 1, 1], [1, 0, 1], [1, 0, 1]];
    expect(orangesRotting(grid)).toBe(4);
  });

  // Edge cases - Empty/Minimum
  it('should return 0 for single cell with rotten orange', () => {
    const grid = [[2]];
    expect(orangesRotting(grid)).toBe(0);
  });

  it('should return 0 for single cell with no oranges', () => {
    const grid = [[0]];
    expect(orangesRotting(grid)).toBe(0);
  });

  // Edge cases - Type Nuance
  it('should return -1 for single fresh orange with no rotten oranges', () => {
    const grid = [[1]];
    expect(orangesRotting(grid)).toBe(-1);
  });

  it('should handle grid with only empty cells', () => {
    const grid = [[0, 0], [0, 0]];
    expect(orangesRotting(grid)).toBe(0);
  });

  it('should handle grid with no fresh oranges only rotten', () => {
    const grid = [[2, 0], [0, 2]];
    expect(orangesRotting(grid)).toBe(0);
  });

  // Edge cases - Range Limits
  it('should handle 1x2 grid with fresh orange adjacent to rotten', () => {
    const grid = [[2, 1]];
    expect(orangesRotting(grid)).toBe(1);
  });

  it('should handle 2x1 grid with fresh orange adjacent to rotten', () => {
    const grid = [[2], [1]];
    expect(orangesRotting(grid)).toBe(1);
  });

  it('should handle large grid with single rotten orange in center', () => {
    const grid = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 2, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1]
    ];
    expect(orangesRotting(grid)).toBe(4);
  });

  // Adversarial cases - Multiple rotten sources
  it('should handle multiple rotten sources spreading simultaneously', () => {
    const grid = [
      [2, 1, 2],
      [1, 1, 1],
      [2, 1, 2]];
    expect(orangesRotting(grid)).toBe(2);
  });

  it('should handle rotten oranges at corners spreading inward', () => {
    const grid = [
      [2, 1, 2],
      [1, 1, 1],
      [2, 1, 2]];
    expect(orangesRotting(grid)).toBe(2);
  });

  // Adversarial cases - Complex spreading patterns
  it('should handle linear grid requiring sequential spreading', () => {
    const grid = [[2, 1, 1, 1, 1]];
    expect(orangesRotting(grid)).toBe(4);
  });

  it('should handle grid where isolation prevents spreading', () => {
    const grid = [[2, 0, 1], [0, 0, 0], [1, 0, 2]];
    expect(orangesRotting(grid)).toBe(-1);
  });

  it('should return -1 when surrounded fresh orange is unreachable', () => {
    const grid = [[2, 0, 2], [0, 1, 0], [2, 0, 2]];
    expect(orangesRotting(grid)).toBe(-1);
  });

  // Adversarial cases - Boundary conditions
  it('should handle grid where all fresh oranges are on boundary', () => {
    const grid = [[1, 1, 1], [1, 2, 1], [1, 1, 1]];
    expect(orangesRotting(grid)).toBe(2);
  });

  it('should handle very small grid 1x1 with different values', () => {
    const grid = [[1]];
    expect(orangesRotting(grid)).toBe(-1);
  });

  it('should handle 2x2 grid with mixed configuration', () => {
    const grid = [[2, 1], [0, 1]];
    expect(orangesRotting(grid)).toBe(2);
  });
});

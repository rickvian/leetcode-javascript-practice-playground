import { validateStackSequences } from '../0946-validate-stack-sequences.js';

describe('0946-validate-stack-sequences', () => {
  it("validateStackSequences([1, 2, 3], [4, 5, 6])", () => {
    const result = validateStackSequences([1, 2, 3], [4, 5, 6]);
    expect(result).toEqual(false);
  });

  it("validateStackSequences([1], [1])", () => {
    const result = validateStackSequences([1], [1]);
    expect(result).toEqual(true);
  });

  it("validateStackSequences([1, 3], [2])", () => {
    const result = validateStackSequences([1, 3], [2]);
    expect(result).toEqual(false);
  });

  it("validateStackSequences([1, 2], [3, 4])", () => {
    const result = validateStackSequences([1, 2], [3, 4]);
    expect(result).toEqual(false);
  });
});

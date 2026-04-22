import { evalRPN } from '../0150-evaluate-reverse-polish-notation.js';

describe('0150-evaluate-reverse-polish-notation', () => {
  it("evalRPN([\"\"])", () => {
    const result = evalRPN([""]);
    expect(result).toEqual(0);
  });
});

import { countArrangement } from '../0526-beautiful-arrangement.js';

describe('0526-beautiful-arrangement', () => {
  it("countArrangement(1)", () => {
    const result = countArrangement(1);
    expect(result).toEqual(1);
  });

  it("countArrangement(2)", () => {
    const result = countArrangement(2);
    expect(result).toEqual(2);
  });

  it("countArrangement(3)", () => {
    const result = countArrangement(3);
    expect(result).toEqual(3);
  });

  it("countArrangement(4)", () => {
    const result = countArrangement(4);
    expect(result).toEqual(8);
  });

  it("countArrangement(5)", () => {
    const result = countArrangement(5);
    expect(result).toEqual(10);
  });

  it("countArrangement(10)", () => {
    const result = countArrangement(10);
    expect(result).toEqual(700);
  });
});

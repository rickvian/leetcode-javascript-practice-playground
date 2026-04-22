import { findDerangement } from '../0634-find-the-derangement-of-an-array.js';

describe('0634-find-the-derangement-of-an-array', () => {
  it("findDerangement(121)", () => {
    const result = findDerangement(121);
    expect(result).toEqual(844270706);
  });

  it("findDerangement(-121)", () => {
    const result = findDerangement(-121);
    expect(result).toEqual(1);
  });

  it("findDerangement(10)", () => {
    const result = findDerangement(10);
    expect(result).toEqual(1334961);
  });

  it("findDerangement(0)", () => {
    const result = findDerangement(0);
    expect(result).toEqual(1);
  });

  it("findDerangement(-1)", () => {
    const result = findDerangement(-1);
    expect(result).toEqual(1);
  });

  it("findDerangement(1534236469)", () => {
    const result = findDerangement(1534236469);
    expect(result).toEqual(501761579);
  });
});

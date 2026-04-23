import { minJumps } from '../1345-jump-game-iv.js';

describe('1345-jump-game-iv', () => {
  it("minJumps([1, 2, 3, 4, 5])", () => {
    const result = minJumps([1, 2, 3, 4, 5]);
    expect(result).toEqual(4);
  });

  it("minJumps([])", () => {
    const result = minJumps([]);
    expect(result).toEqual(0);
  });

  it("minJumps([1])", () => {
    const result = minJumps([1]);
    expect(result).toEqual(0);
  });

  it("minJumps([1, 1])", () => {
    const result = minJumps([1, 1]);
    expect(result).toEqual(1);
  });

  it("minJumps([3, 1, 4, 1, 5])", () => {
    const result = minJumps([3, 1, 4, 1, 5]);
    expect(result).toEqual(3);
  });

  it("minJumps([-1, 0, 1])", () => {
    const result = minJumps([-1, 0, 1]);
    expect(result).toEqual(2);
  });
});

import { connect } from '../0117-populating-next-right-pointers-in-each-node-ii.js';

describe('0117-populating-next-right-pointers-in-each-node-ii', () => {
  it("connect([1, 2, 3])", () => {
    const result = connect([1, 2, 3]);
    expect(result).toEqual([1, 2, 3]);
  });

  it("connect([])", () => {
    const result = connect([]);
    expect(result).toEqual([]);
  });

  it("connect([0])", () => {
    const result = connect([0]);
    expect(result).toEqual([0]);
  });

  it("connect([-1, 0, 1])", () => {
    const result = connect([-1, 0, 1]);
    expect(result).toEqual([-1, 0, 1]);
  });
});

import { updateBoard } from '../0529-minesweeper.js';

describe('0529-minesweeper', () => {
  it("updateBoard([[\"E\", \"E\", \"E\", \"E\", \"E\"], [\"E\", \"E\", \"M\", \"E\", \"E\"], [\"E\", \"E\", \"E\", \"E\", \"E\"], [\"E\", \"E\", \"E\", \"E\", \"E\"]], [3, 0])", () => {
    const result = updateBoard([["E", "E", "E", "E", "E"], ["E", "E", "M", "E", "E"], ["E", "E", "E", "E", "E"], ["E", "E", "E", "E", "E"]], [3, 0]);
    expect(result).toEqual([["B", "1", "E", "1", "B"], ["B", "1", "M", "1", "B"], ["B", "1", "1", "1", "B"], ["B", "B", "B", "B", "B"]]);
  });

  it("updateBoard([[\"B\", \"1\", \"E\", \"1\", \"B\"], [\"B\", \"1\", \"M\", \"1\", \"B\"], [\"B\", \"1\", \"1\", \"1\", \"B\"], [\"B\", \"B\", \"B\", \"B\", \"B\"]], [1, 2])", () => {
    const result = updateBoard([["B", "1", "E", "1", "B"], ["B", "1", "M", "1", "B"], ["B", "1", "1", "1", "B"], ["B", "B", "B", "B", "B"]], [1, 2]);
    expect(result).toEqual([["B", "1", "E", "1", "B"], ["B", "1", "X", "1", "B"], ["B", "1", "1", "1", "B"], ["B", "B", "B", "B", "B"]]);
  });

  it("updateBoard([[\"M\"]], [0, 0])", () => {
    const result = updateBoard([["M"]], [0, 0]);
    expect(result).toEqual([["X"]]);
  });

  it("updateBoard([[\"E\"]], [0, 0])", () => {
    const result = updateBoard([["E"]], [0, 0]);
    expect(result).toEqual([["B"]]);
  });

  it("updateBoard([[\"E\", \"E\"], [\"E\", \"M\"]], [0, 0])", () => {
    const result = updateBoard([["E", "E"], ["E", "M"]], [0, 0]);
    expect(result).toEqual([["1", "E"], ["E", "M"]]);
  });
});

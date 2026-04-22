import { leastInterval } from '../0621-task-scheduler.js';

describe('0621-task-scheduler', () => {
  it("leastInterval([\"A\", \"A\", \"A\", \"B\", \"B\", \"B\"], 2)", () => {
    const result = leastInterval(["A", "A", "A", "B", "B", "B"], 2);
    expect(result).toEqual(8);
  });

  it("leastInterval([\"A\", \"A\", \"A\", \"B\", \"B\", \"B\"], 0)", () => {
    const result = leastInterval(["A", "A", "A", "B", "B", "B"], 0);
    expect(result).toEqual(6);
  });

  it("leastInterval([\"A\", \"A\", \"A\", \"A\", \"A\", \"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\"], 2)", () => {
    const result = leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2);
    expect(result).toEqual(16);
  });

  it("leastInterval([\"A\", \"A\", \"A\", \"B\", \"B\", \"B\", \"C\", \"C\", \"C\"], 3)", () => {
    const result = leastInterval(["A", "A", "A", "B", "B", "B", "C", "C", "C"], 3);
    expect(result).toEqual(11);
  });

  it("leastInterval([\"A\"], 0)", () => {
    const result = leastInterval(["A"], 0);
    expect(result).toEqual(1);
  });

  it("leastInterval([\"A\", \"A\", \"B\", \"B\"], 2)", () => {
    const result = leastInterval(["A", "A", "B", "B"], 2);
    expect(result).toEqual(5);
  });
});

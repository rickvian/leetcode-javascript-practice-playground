import { checkRecord } from '../0552-student-attendance-record-ii.js';

describe('0552-student-attendance-record-ii', () => {
  it("checkRecord(0)", () => {
    const result = checkRecord(0);
    expect(result).toEqual(1);
  });

  it("checkRecord(1)", () => {
    const result = checkRecord(1);
    expect(result).toEqual(3);
  });

  it("checkRecord(2)", () => {
    const result = checkRecord(2);
    expect(result).toEqual(8);
  });

  it("checkRecord(3)", () => {
    const result = checkRecord(3);
    expect(result).toEqual(19);
  });

  it("checkRecord(5)", () => {
    const result = checkRecord(5);
    expect(result).toEqual(94);
  });

  it("checkRecord(10)", () => {
    const result = checkRecord(10);
    expect(result).toEqual(3536);
  });
});

import { checkRecord } from '../0551-student-attendance-record-i.js';

describe('0551-student-attendance-record-i', () => {
  it("checkRecord(\"abcabcbb\")", () => {
    const result = checkRecord("abcabcbb");
    expect(result).toEqual(true);
  });

  it("checkRecord(\"bbbbb\")", () => {
    const result = checkRecord("bbbbb");
    expect(result).toEqual(true);
  });

  it("checkRecord(\"pwwkew\")", () => {
    const result = checkRecord("pwwkew");
    expect(result).toEqual(true);
  });

  it("checkRecord(\"\")", () => {
    const result = checkRecord("");
    expect(result).toEqual(true);
  });

  it("checkRecord(\" \")", () => {
    const result = checkRecord(" ");
    expect(result).toEqual(true);
  });

  it("checkRecord(\"a\")", () => {
    const result = checkRecord("a");
    expect(result).toEqual(true);
  });

  it("checkRecord(\"aaaaaa\")", () => {
    const result = checkRecord("aaaaaa");
    expect(result).toEqual(true);
  });
});

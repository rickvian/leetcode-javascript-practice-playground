import { dayOfYear } from '../1154-day-of-the-year.js';

describe('1154-day-of-the-year', () => {
  it("dayOfYear(\"2019-01-09\")", () => {
    const result = dayOfYear("2019-01-09");
    expect(result).toEqual(9);
  });

  it("dayOfYear(\"2019-02-10\")", () => {
    const result = dayOfYear("2019-02-10");
    expect(result).toEqual(41);
  });

  it("dayOfYear(\"2003-03-01\")", () => {
    const result = dayOfYear("2003-03-01");
    expect(result).toEqual(60);
  });

  it("dayOfYear(\"2004-03-01\")", () => {
    const result = dayOfYear("2004-03-01");
    expect(result).toEqual(61);
  });

  it("dayOfYear(\"2019-12-31\")", () => {
    const result = dayOfYear("2019-12-31");
    expect(result).toEqual(365);
  });

  it("dayOfYear(\"2000-01-01\")", () => {
    const result = dayOfYear("2000-01-01");
    expect(result).toEqual(1);
  });
});

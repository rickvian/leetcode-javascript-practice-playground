import { numUniqueEmails } from '../0929-unique-email-addresses.js';

describe('0929-unique-email-addresses', () => {
  it("numUniqueEmails([\"flower\", \"flow\", \"flight\"])", () => {
    const result = numUniqueEmails(["flower", "flow", "flight"]);
    expect(result).toEqual(3);
  });

  it("numUniqueEmails([\"a\", \"b\", \"c\"])", () => {
    const result = numUniqueEmails(["a", "b", "c"]);
    expect(result).toEqual(3);
  });

  it("numUniqueEmails([])", () => {
    const result = numUniqueEmails([]);
    expect(result).toEqual(0);
  });

  it("numUniqueEmails([\"\"])", () => {
    const result = numUniqueEmails([""]);
    expect(result).toEqual(1);
  });

  it("numUniqueEmails([\"ab\", \"a\", \"abc\"])", () => {
    const result = numUniqueEmails(["ab", "a", "abc"]);
    expect(result).toEqual(3);
  });
});

import { strangePrinter } from '../0664-strange-printer.js';

describe('0664-strange-printer', () => {
  it("strangePrinter(\"abcabcbb\")", () => {
    const result = strangePrinter("abcabcbb");
    expect(result).toEqual(5);
  });

  it("strangePrinter(\"bbbbb\")", () => {
    const result = strangePrinter("bbbbb");
    expect(result).toEqual(1);
  });

  it("strangePrinter(\"pwwkew\")", () => {
    const result = strangePrinter("pwwkew");
    expect(result).toEqual(4);
  });

  it("strangePrinter(\" \")", () => {
    const result = strangePrinter(" ");
    expect(result).toEqual(1);
  });

  it("strangePrinter(\"a\")", () => {
    const result = strangePrinter("a");
    expect(result).toEqual(1);
  });

  it("strangePrinter(\"aaaaaa\")", () => {
    const result = strangePrinter("aaaaaa");
    expect(result).toEqual(1);
  });
});

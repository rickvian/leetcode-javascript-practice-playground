import { ambiguousCoordinates } from '../0816-ambiguous-coordinates.js';

describe('0816-ambiguous-coordinates', () => {
  it("ambiguousCoordinates(\"abcabcbb\")", () => {
    const result = ambiguousCoordinates("abcabcbb");
    expect(result).toEqual(["(b, cabcb)", "(b, c.abcb)", "(b, ca.bcb)", "(b, cab.cb)", "(b, cabc.b)", "(bc, abcb)", "(bc, a.bcb)", "(bc, ab.cb)", "(bc, abc.b)", "(b.c, abcb)", "(b.c, a.bcb)", "(b.c, ab.cb)", "(b.c, abc.b)", "(bca, bcb)", "(bca, b.cb)", "(bca, bc.b)", "(b.ca, bcb)", "(b.ca, b.cb)", "(b.ca, bc.b)", "(bc.a, bcb)", "(bc.a, b.cb)", "(bc.a, bc.b)", "(bcab, cb)", "(bcab, c.b)", "(b.cab, cb)", "(b.cab, c.b)", "(bc.ab, cb)", "(bc.ab, c.b)", "(bca.b, cb)", "(bca.b, c.b)", "(bcabc, b)", "(b.cabc, b)", "(bc.abc, b)", "(bca.bc, b)", "(bcab.c, b)"]);
  });

  it("ambiguousCoordinates(\"bbbbb\")", () => {
    const result = ambiguousCoordinates("bbbbb");
    expect(result).toEqual(["(b, bb)", "(b, b.b)", "(bb, b)", "(b.b, b)"]);
  });

  it("ambiguousCoordinates(\"pwwkew\")", () => {
    const result = ambiguousCoordinates("pwwkew");
    expect(result).toEqual(["(w, wke)", "(w, w.ke)", "(w, wk.e)", "(ww, ke)", "(ww, k.e)", "(w.w, ke)", "(w.w, k.e)", "(wwk, e)", "(w.wk, e)", "(ww.k, e)"]);
  });

  it("ambiguousCoordinates(\"\")", () => {
    const result = ambiguousCoordinates("");
    expect(result).toEqual([]);
  });

  it("ambiguousCoordinates(\" \")", () => {
    const result = ambiguousCoordinates(" ");
    expect(result).toEqual([]);
  });

  it("ambiguousCoordinates(\"a\")", () => {
    const result = ambiguousCoordinates("a");
    expect(result).toEqual([]);
  });

  it("ambiguousCoordinates(\"aaaaaa\")", () => {
    const result = ambiguousCoordinates("aaaaaa");
    expect(result).toEqual(["(a, aaa)", "(a, a.aa)", "(a, aa.a)", "(aa, aa)", "(aa, a.a)", "(a.a, aa)", "(a.a, a.a)", "(aaa, a)", "(a.aa, a)", "(aa.a, a)"]);
  });
});

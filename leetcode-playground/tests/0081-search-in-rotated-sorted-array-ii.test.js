import { search } from '../0081-search-in-rotated-sorted-array-ii.js';

describe('0081-search-in-rotated-sorted-array-ii', () => {
  it("search([1, 2, 3, 4, 5, 6, 7], 3)", () => {
    const _nums0 = [1, 2, 3, 4, 5, 6, 7];
    const _k0 = search(_nums0, 3);
    const _ek0 = (_k0 !== undefined && _k0 !== null) ? _k0 : _nums0.length;
    if (_ek0 !== undefined) expect(_nums0.slice(0, _ek0).sort((a,b)=>a-b)).toEqual([1]);
  });

  it("search([-1, -100, 3, 99], 2)", () => {
    const _nums1 = [-1, -100, 3, 99];
    const _k1 = search(_nums1, 2);
    const _ek1 = (_k1 !== undefined && _k1 !== null) ? _k1 : _nums1.length;
    if (_ek1 !== undefined) expect(_nums1.slice(0, _ek1).sort((a,b)=>a-b)).toEqual([]);
  });

  it("search([1], 0)", () => {
    const _nums2 = [1];
    const _k2 = search(_nums2, 0);
    const _ek2 = (_k2 !== undefined && _k2 !== null) ? _k2 : _nums2.length;
    if (_ek2 !== undefined) expect(_nums2.slice(0, _ek2).sort((a,b)=>a-b)).toEqual([]);
  });

  it("search([1, 2], 3)", () => {
    const _nums3 = [1, 2];
    const _k3 = search(_nums3, 3);
    const _ek3 = (_k3 !== undefined && _k3 !== null) ? _k3 : _nums3.length;
    if (_ek3 !== undefined) expect(_nums3.slice(0, _ek3).sort((a,b)=>a-b)).toEqual([]);
  });
});

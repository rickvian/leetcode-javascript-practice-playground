import { sortColors } from '../0075-sort-colors.js';

describe('0075-sort-colors', () => {
  it("sortColors([2, 0, 2, 1, 1, 0])", () => {
    const _nums0 = [2, 0, 2, 1, 1, 0];
    const _k0 = sortColors(_nums0);
    const _ek0 = (_k0 !== undefined && _k0 !== null) ? _k0 : _nums0.length;
    if (_ek0 !== undefined) expect(_nums0.slice(0, _ek0).sort((a,b)=>a-b)).toEqual([]);
  });

  it("sortColors([2, 0, 1])", () => {
    const _nums1 = [2, 0, 1];
    const _k1 = sortColors(_nums1);
    const _ek1 = (_k1 !== undefined && _k1 !== null) ? _k1 : _nums1.length;
    if (_ek1 !== undefined) expect(_nums1.slice(0, _ek1).sort((a,b)=>a-b)).toEqual([]);
  });

  it("sortColors([0])", () => {
    const _nums2 = [0];
    const _k2 = sortColors(_nums2);
    const _ek2 = (_k2 !== undefined && _k2 !== null) ? _k2 : _nums2.length;
    if (_ek2 !== undefined) expect(_nums2.slice(0, _ek2).sort((a,b)=>a-b)).toEqual([]);
  });

  it("sortColors([1])", () => {
    const _nums3 = [1];
    const _k3 = sortColors(_nums3);
    const _ek3 = (_k3 !== undefined && _k3 !== null) ? _k3 : _nums3.length;
    if (_ek3 !== undefined) expect(_nums3.slice(0, _ek3).sort((a,b)=>a-b)).toEqual([1]);
  });

  it("sortColors([2, 2, 2])", () => {
    const _nums4 = [2, 2, 2];
    const _k4 = sortColors(_nums4);
    const _ek4 = (_k4 !== undefined && _k4 !== null) ? _k4 : _nums4.length;
    if (_ek4 !== undefined) expect(_nums4.slice(0, _ek4).sort((a,b)=>a-b)).toEqual([]);
  });
});

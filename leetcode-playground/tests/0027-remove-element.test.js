import { removeElement } from '../0027-remove-element.js';

describe('0027-remove-element', () => {
  it("removeElement([3, 2, 2, 3], 3)", () => {
    const _nums0 = [3, 2, 2, 3];
    const _k0 = removeElement(_nums0, 3);
    const _ek0 = (_k0 !== undefined && _k0 !== null) ? _k0 : _nums0.length;
    if (_ek0 !== undefined) expect(_nums0.slice(0, _ek0).sort((a,b)=>a-b)).toEqual([2, 2]);
  });

  it("removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)", () => {
    const _nums1 = [0, 1, 2, 2, 3, 0, 4, 2];
    const _k1 = removeElement(_nums1, 2);
    const _ek1 = (_k1 !== undefined && _k1 !== null) ? _k1 : _nums1.length;
    if (_ek1 !== undefined) expect(_nums1.slice(0, _ek1).sort((a,b)=>a-b)).toEqual([0, 0, 1, 3, 4]);
  });

  it("removeElement([], 3)", () => {
    const _nums2 = [];
    const _k2 = removeElement(_nums2, 3);
    const _ek2 = (_k2 !== undefined && _k2 !== null) ? _k2 : _nums2.length;
    if (_ek2 !== undefined) expect(_nums2.slice(0, _ek2).sort((a,b)=>a-b)).toEqual([]);
  });

  it("removeElement([1], 1)", () => {
    const _nums3 = [1];
    const _k3 = removeElement(_nums3, 1);
    const _ek3 = (_k3 !== undefined && _k3 !== null) ? _k3 : _nums3.length;
    if (_ek3 !== undefined) expect(_nums3.slice(0, _ek3).sort((a,b)=>a-b)).toEqual([]);
  });

  it("removeElement([1], 2)", () => {
    const _nums4 = [1];
    const _k4 = removeElement(_nums4, 2);
    const _ek4 = (_k4 !== undefined && _k4 !== null) ? _k4 : _nums4.length;
    if (_ek4 !== undefined) expect(_nums4.slice(0, _ek4).sort((a,b)=>a-b)).toEqual([1]);
  });

  it("removeElement([1, 1, 1], 1)", () => {
    const _nums5 = [1, 1, 1];
    const _k5 = removeElement(_nums5, 1);
    const _ek5 = (_k5 !== undefined && _k5 !== null) ? _k5 : _nums5.length;
    if (_ek5 !== undefined) expect(_nums5.slice(0, _ek5).sort((a,b)=>a-b)).toEqual([]);
  });
});

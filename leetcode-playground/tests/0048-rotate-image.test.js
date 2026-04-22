import { rotate } from '../0048-rotate-image.js';

describe('0048-rotate-image', () => {
  it("rotate([1], 0)", () => {
    const _nums2 = [1];
    const _k2 = rotate(_nums2, 0);
    const _ek2 = (_k2 !== undefined && _k2 !== null) ? _k2 : _nums2.length;
    if (_ek2 !== undefined) expect(_nums2.slice(0, _ek2).sort((a,b)=>a-b)).toEqual([1]);
  });
});

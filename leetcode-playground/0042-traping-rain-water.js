/**
 * @param {number[]} height
 * @return {number}
 */
export var trap = function (height) {
  // concept of trapping water
  // water can be rapped if any lefter or righter height are equal or higher, >0 and >current height
  // we can check every position and calculate how much possible water it can trap
  // any highest left and highest max can help trap water
  //
  // 0 1 0 2 0 3 0
  //           ^
  // 0 0 1 0 2 0 0

  //
  // lefter max ? 0
  // righter max? 3
  // find the min of (maxLefter, maxRighter) - current height = 0
  // this position can trap 0 water
  //
  // lefter max ? 0
  // righter max? 3
  // trapwater = min(maxLefter, maxRighter) - currHeight = 0-3 = -3 -1 = -4 (not possible, 0)
  //
  // lefter max = 1
  // righter max = 3
  // trapwater = min(1,3) - currHeight= 1 - 0 = 1
  //
  // lefter max = 1
  // righter max = 3
  // min(1,3) - currHeight =  1 - 2 = -1 (not possible, 0 water trapped)
  //
  // lefterMax = 2
  // righterMax = 3
  // min(2,3) - curr = 2 -0 = 2 water

  if (height.length === 0) return 0;

  let waterTrappedTotal = 0;
  let lefterMaxPerIndex = []; // 0 0 1 1 2 2 3

  let currentLeftMax = 0;

  // currLeftMax = 3
  // 0 1 0 2 0 3 0
  // for (const [index, currentHeight] of height.entries()) {
  for (let i = 0; i < height.length; i++) {
    const currentHeight = height[i];
    // collect lefterMax for each index
    lefterMaxPerIndex[i] = currentLeftMax; // start from 0

    if (currentLeftMax < currentHeight) {
      currentLeftMax = currentHeight; // new height found
    }
  }

  let righterMaxPerIndex = []; // 3 3 3 3 3 0 0
  let currentRightMax = 0;
  // currRightMax = 3
  // 0 1 0 2 0 3 0
  // 3 3 3 3 3 0 0
  for (let i = height.length; i > 0; i--) {
    const currentHeight = height[i];

    // collect lefterMax for each index
    righterMaxPerIndex[i] = currentRightMax; // start from 0

    if (currentRightMax < currentHeight) {
      currentRightMax = currentHeight; // new height found
    }
  }

  for (let i = 0; i < height.length; i++) {
    const currentHeight = height[i];
    const sum =
      Math.min(lefterMaxPerIndex[i], righterMaxPerIndex[i]) - currentHeight;

    if (sum > 0) {
      waterTrappedTotal = waterTrappedTotal + sum; // add water to the total
    }
  }

  return waterTrappedTotal;

  // memory used
  // leftMax = n
  // rightMax = n
  // o(2n) -> o(n) linear
  // calculation operation =
  // 3 times N o(3n) -> o(n) linear
};

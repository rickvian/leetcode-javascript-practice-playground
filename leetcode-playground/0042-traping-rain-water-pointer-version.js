/**
 * @param {number[]} height
 * @return {number}
 */
export var trap = function (height) {
  if (height.length === 0) return 0;

  let waterTrappedTotal = 0;

  // calculating lefterMax or RighterMax as we go through iteration.

  let lefterMax = height[0]; // update with value in first index
  let righterMax = height[height.length - 1]; // update with value in last index

  let leftPointer = 0;
  let rightPointer = height.length - 1; // start from last index

  // LMAX: 3
  //               RIGHT MAX: 2
  // [0 1 2 3 4 5 6]
  //  0 1 0 3 0 2 0
  //        L R
  //  0 0 1 0 2 0 0

  // min(Lmax, rightMax) - currentHeight (whatever pointer we processing now)

  while (leftPointer < rightPointer) {
    if (lefterMax < righterMax) {
      // lefterMax smaller, leftMax is the bottleNeck
      // current rightMax will guarantee higher than leftMax to trap water,
      // leftMax will be the bottle nect,
      // now its just matter if current height is valley or mountain againts the lefterMax

      leftPointer++; // by shifting pointer with smaller max, meaning it doesn't matter how big is the right max, cos in the end smaller max will be bottle neck for the water calculation (//TODO: confirm this)

      // this calculation simplifes the process

      // In the standard approach, you need both maxLeft and maxRight because you don't know which one is the bottleneck.
      // However, in the two-pointer version, the if (lefterMax < righterMax) check provides that information for you.
      // The Logic: If you know for a fact that lefterMax is currently 3 and righterMax is 10,
      // then the "ceiling" for water at the current leftPointer is guaranteed to be at most 3.
      // It doesn't matter if righterMax stays 10 or grows to 100 later;
      // the water at the left pointer will always be capped by the 3 on its left.
      // Therefore, min(lefterMax, righterMax) simply becomes lefterMax.

      // left guaranteed to be the bottle neck, then we just need to check
      // how much possible water we can trap at current index, given the left as bottle next.
      lefterMax = Math.max(lefterMax, height[leftPointer]);

      // if lefterMax is higher, then it retain it as the wall
      // if currentheight is higher than lefterMax, it will not able to trap water anyway, so next calculation will zero out
      // else: currentHeight is lower than lefterMax, it will have difference and we take it as waterTrapped
      waterTrappedTotal += lefterMax - height[leftPointer];
    } else {
      // righterMax smaller
      rightPointer--;
      righterMax = Math.max(righterMax, height[rightPointer]);

      waterTrappedTotal += righterMax - height[rightPointer];
    }
  }

  return waterTrappedTotal;
};

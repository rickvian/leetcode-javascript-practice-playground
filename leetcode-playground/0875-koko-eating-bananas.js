/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

var minEatingSpeed = function (piles, h) {
  // [3, 6, 7, 11] h=8
  // find minimum K speed.
  // how would humans solve this?
  // the goal is to eat as slow as possible within hour=8
  // we can start with k=1, see if it works
  // [3, 6, 7, 11]
  // [0, 4, 7, 11]
  //     ^
  // k = 1 -> 11 // test with k=5 , too fast? test with k=2, too slow? test with k=3
  // h = 8
  // k=1 didn't work, did not finish, then move next
  // k=2 -> same iteration process, see if Koko can finish in 8 hour
  // we will find the minimum k
  // worst case O(max(piles)) * piles
  // but we know that testing k=1 to k=max se which fits, it seems like binary search problem
  // so to find k, if its too slow, or too fast we can binary search.

  // number of k search down from checking every K O(max(piles)) to O(log(max(piles))) times the number of pile to check.

  let [l, r] = [1, Math.max(...piles)];

  let slowestKSoFar = r; // initialize with worst case

  // execute binary search
  while (l <= r) {
    let k = Math.floor((l + r) / 2); // start from middle point between l and r

    // start check if koko can eat within kCandidate hour
    let hoursKokoNeed = 0;
    for (let pile of piles) {
      // to avoid mistakenly write 'in' instead of 'or', write
      // in or at same time, this force yourself to double check.
      const amountHoursNeededToEatPile = Math.ceil(pile / k); // round this, 3 / 2 : 1.5 hours, round up, considerd 2
      hoursKokoNeed = hoursKokoNeed + amountHoursNeededToEatPile; // collect through all pile.
    }

    // is it valid?

    if (hoursKokoNeed <= h) {
      // valid speed, koko can eat all piles, but is it the slowest yet?
      slowestKSoFar = Math.min(k, slowestKSoFar);

      // it could be too fast, we wanna find slower speed., reduce the k, find lefter section
      // L1  m   5r      11
      r = k - 1; // over one behind the mid
    } else {
      // too slow, not valid cos guard will comeback, need find faster
      l = k + 1; // over one after the mid
    }
  }

  return slowestKSoFar;

  // time complexity
  // O(log(max(n))) * n where n is number of pile
  // space complexity
  // O(1) we use static variables, not much
};

export { minEatingSpeed };

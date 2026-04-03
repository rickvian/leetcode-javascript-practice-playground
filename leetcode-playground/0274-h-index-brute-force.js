/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  // [3,0,6,2,5]

  // number of citations.
  // number of publish.

  // number of publication is 5, so all more than 5 will guarantee to be included.

  // find maximum number of h,
  // where H is max number of publication, that gets at least h number of citation

  // brute force
  // how would human solve this
  // [3,0,6,2,5]
  //  ^
  // 5 <= 3

  // does H:1 publication cited at least H:1 time?
  //
  // publicationThatSatisfyCount = 2
  // maxPublication = 5 (i?)

  // publicationThatSatisfyCount >= maxPublication ? yes:
  // bestHIndexCurrent = maxPublication
  // no, move to next iteration

  // bestHIndexCurrent: 3

  let bestHIndex = 0;

  for (let currentH = 0; currentH < citations.length + 1; currentH++) {
    let currentSatisfiedPublication = 0;

    for (let i = 0; i < citations.length; i++) {
      if (currentH <= citations[i]) {
        currentSatisfiedPublication++;
      }
    }

    if (currentSatisfiedPublication >= currentH) {
      bestHIndex = currentH;
    }
  }

  return bestHIndex;
};

export { hIndex };

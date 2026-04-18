/**
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
 * You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you
 * must take course bi first if you want to take course ai. Return true if you can finish all
 * courses. Otherwise, return false.
 *
 * https://leetcode.com/problems/course-schedule/description/
 *
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // 0-3 (numCourse-1)
  // e.g [0, 1], [0, 2], [1, 3], [2, 3]
  // num of course: 4
  // traverse all chain of dependency, and if there are cycle, meaning it cannot be solved.
  // we can have like memory to remember if we visited that before, so when cycle happens, return false (course cannot be finisehd.)

  // we could have like independent path chains, so we need to check all prerequisite items.

  // traverse the dependency path, check the possibility

  // for each of prerequisites, traverse them, dfs

  // [0,1], [0,2]

  // preMap

  const preMap = {};

  // {
  //   0:[]
  //   1:[]
  //   2:[]
  //   3:[]
  // }

  // build map
  for (let i = 0; i < numCourses; i++) {
    preMap[i] = [];
  } // initiate empty array

  // push prereq to the map

  for (let [course, dependency] of prerequisites) {
    preMap[course].push(dependency);
  }

  // {
  // 0: [1, 2]
  // 1: [3]
  // 2: [3]
  // 3: []
  //}

  // perform dfs on every course.

  const visitedSet = new Set(); // current nodes marked as visited for current path traversal.

  function dfs(crs) {
    // base case / edge case
    if (visitedSet.has(crs)) {
      return false; // cycle detected
    }

    if (preMap[crs].length === 0) {
      // can be finished independently
      return true;
    }

    // it has dependency, we need to traverse further to check the resolution.

    visitedSet.add(crs);

    // check all deps
    for (let dep of preMap[crs]) {
      if (!dfs(dep)) return false; // if cycle detected, immediately return false.
      // if depth returns true, continue check all dependency.
    }

    // checked all, no issue with dependency.
    visitedSet.delete(crs); // remove current CRS from visitedSet of current

    return true;
  }

  // dfs all course, because they can be independent
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false; // if false occured, return false
  }

  return true;
};

export { canFinish };

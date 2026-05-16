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
  // e.g [0, 1], [0, 2], [1, 3], [2, 3]
  // num of course: 4
  // 0 -> 1 -> 3
  //   -> 2 ->
  // intuition, we need to perform traversal, and ensure all courses can be completed
  // the only case where its not possible is when we find circular dependency

  // we will keep finding it, if no circular found, return true

  // to help traversal able to look up dependency fast, we can levereage prerequisite map

  let preMap = {}; // { [courses]: [..prerequisites]}

  for (let [course, dependency] of prerequisites) {
    if (!preMap[course]) {
      preMap[course] = [];
    }

    preMap[course].push(dependency);
  }

  let visited = new Set();

  function dfs(crs) {
    // traverse crs dependencies, if we reach all deps without circle, return true

    // base cases
    // if visited before, meaning we are visiting again circularly
    if (visited.has(crs)) {
      return false;
    }

    if (!preMap[crs]) {
      // it has no dependency, clear, can immediately complete this one
      return true;
    }

    // process current course
    visited.add(crs);

    // perform dfs on all of crs dependency, ensure they contain no dependency as well

    for (let depCourse of preMap[crs]) {
      if (!dfs(depCourse)) {
        return false; // dependency contain circular
      }
    }

    // backtrack
    // once done, we done explore that path, remove it from visited
    visited.delete(crs);

    // if there are no issue
    return true;
  }

  // then we can perform DFS on each courses to check if we are able to complete each

  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course)) return false; // if any return false, immediately return false
  }

  // otherwise all good

  return true;
};

export { canFinish };

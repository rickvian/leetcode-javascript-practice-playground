/**
 * 210. Course Schedule II
 * https://leetcode.com/problems/course-schedule-ii/
 * Difficulty: Medium
 *
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
 * You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you
 * must take course bi first if you want to take course ai.
 *
 * For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
 *
 * Return the ordering of courses you should take to finish all courses. If there are many valid
 * answers, return any of them. If it is impossible to finish all courses, return an empty array.
 */

/**
 * Approach 1: DFS post-order, prerequisite -> course edges, unshift on finish.
 *
 * @complexity
 * Time: O(V + E) DFS traversal + O(V^2) from `result.unshift` (each unshift is O(n)).
 *   Breakdown: build graph O(E) + DFS visits each node/edge once O(V+E) + V unshifts at O(V) each = O(V^2).
 *   Final: O(V^2 + E). Approach 2 (push then no reverse needed because edges reversed differently) is faster.
 * Space: O(V + E) graph + O(V) seen/path + O(V) recursion stack = O(V + E).
 *
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  // Build adjacency where edge points prereq -> dependent course.
  // e.g. [[1,0]] means 0 -> 1 (take 0 first, unlocks 1).
  const graph = Array(numCourses)
    .fill()
    .map(() => []);
  const seen = new Set(); // fully processed (post-order added to result)
  const path = new Set(); // nodes in current DFS stack -> detects back-edge cycle
  const result = [];

  prerequisites.forEach(([c, p]) => graph[p].push(c));

  // Try every node so disconnected components also processed.
  for (let i = 0; i < numCourses; i++) {
    if (!seen.has(i) && !dfs(i)) {
      return [];
    }
  }

  return result;

  function dfs(course) {
    // Cycle: re-entering node still on stack.
    if (path.has(course)) return false;
    // Already finished -> safe, skip.
    if (seen.has(course)) return true;

    path.add(course);
    // Visit dependents first because edges go prereq -> dependent.
    for (const c of graph[course]) {
      if (!dfs(c)) {
        return false;
      }
    }
    path.delete(course);
    seen.add(course);
    // Post-order with unshift -> reverse topological insertion.
    // Course finishes after dependents, so prepending puts prereq before dependent. O(n) per call -> O(n^2) total.
    result.unshift(course);
    return true;
  }
};

/**
 * Approach 2: DFS post-order, course -> prerequisite edges, push on finish (no unshift).
 *
 * @complexity
 * Time: build map O(V + E) + DFS each node/edge once O(V + E) + V pushes at O(1) = O(V + E).
 *   No unshift -> avoids the O(V^2) hit Approach 1 had.
 * Space: preMap O(V + E) + visited/resolved O(V) + recursion O(V) = O(V + E).
 *
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  // [[1,0],[2,0],[3,1],[3,2]]

  //  3-> 1 -> |
  //  |-> 2 -> 0

  // goal, return ordering of courses i should take

  // [0, 1, 2, 3]
  // 1. course without prerequisites are first
  // 2. course after prerequisite taken
  // 3. the rest.

  // perform DFS, traverse its prerequisite, until find course without prerequisite.

  // If it is impossible to finish all courses, return an empty array. <- what condition that makes it impossible?
  // if there are prerequisites cycle.

  // create prerequisite map for each course first.
  // course is from 0 - numCourses-1 (length of numCourses)

  let preMap = new Map();
  for (let crs = 0; crs < numCourses; crs++) {
    preMap.set(crs, []);
  }

  for (let [crs, pre] of prerequisites) {
    preMap.get(crs).push(pre);
  }
  // by now we have { course: [...prerequisite] }
  let visited = new Set(); // help track prerequisite cycle
  let resolved = new Set(); // quick lookup paired with result to know if its resolved before, so we skip push to resutl
  let result = []; // resolved courses in order.

  // return true if resolveable, false otherwise
  function dfs(currentCourse) {
    // base case

    if (visited.has(currentCourse)) return false;

    if (resolved.has(currentCourse)) return true;

    // never resolved before:
    if (preMap.get(currentCourse).length === 0) {
      // never resolved, no prerequisite, its a result item!
      result.push(currentCourse);
      resolved.add(currentCourse);
      return true;
    }

    // otherwise, its never been visited, and has prerequisite
    // process it

    visited.add(currentCourse);

    // traverse its dependency
    for (let pre of preMap.get(currentCourse)) {
      if (dfs(pre) === false) return false;
    }

    // if no return false s far, meaning all resolveable, current course resolveable too
    visited.delete(currentCourse); // next path exploration will not bump into false cycle alarm.

    result.push(currentCourse);
    resolved.add(currentCourse);
    preMap.set(currentCourse, []);

    return true;
  }

  // now traverese all course to resolve the prerequisites
  for (let i = 0; i < numCourses; i++) {
    if (dfs(i) === false) return []; // cannot be completed
  }

  return result;
};

/**
 * Approach 3: Kahn's algorithm — BFS topological sort using indegrees.
 *
 * Most efficient in practice: iterative (no recursion stack), single pass, naturally handles cycles
 * by checking if all nodes were emitted. Same big-O as Approach 2 but lower constants and no stack overflow risk.
 *
 * Intuition: a course with 0 unmet prerequisites can be taken now. Take it, decrement indegree of
 * every course that depended on it; any neighbor whose indegree hits 0 is now ready. Repeat until
 * queue empty. If we emitted fewer than numCourses, a cycle blocked progress.
 *
 * @complexity
 * Time: build graph + indegree O(V + E) + each node enqueued/dequeued once O(V) + each edge relaxed once O(E) = O(V + E).
 * Space: graph O(V + E) + indegree O(V) + queue O(V) + result O(V) = O(V + E).
 *
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  // graph[pre] -> list of courses that depend on pre. Edge direction: prereq -> dependent.
  // indegree[c] = number of prerequisites c is still waiting on.
  // e.g. prereqs [[1,0],[2,0],[3,1],[3,2]] -> graph: 0->[1,2], 1->[3], 2->[3]; indegree: [0,1,1,2]
  const graph = Array.from({ length: numCourses }, () => []);
  const indegree = new Array(numCourses).fill(0);

  for (const [course, pre] of prerequisites) {
    graph[pre].push(course);
    indegree[course]++;
  }

  // Seed queue with everything already takeable (no prerequisites).
  // e.g. indegree [0,1,1,2] -> queue starts [0]
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  const result = [];
  // Process layer by layer. Pointer head avoids O(n) shift.
  let head = 0;
  while (head < queue.length) {
    const course = queue[head++];
    result.push(course);
    // "Take" this course -> every dependent loses one unmet prereq.
    // When a dependent's indegree drops to 0, it joins the ready set.
    for (const next of graph[course]) {
      indegree[next]--;
      if (indegree[next] === 0) queue.push(next);
    }
  }

  // Cycle detection: if some node never reached indegree 0, it was inside (or downstream of) a cycle.
  // e.g. 0<->1 -> both stay at indegree 1 forever -> result.length < numCourses.
  return result.length === numCourses ? result : [];
};

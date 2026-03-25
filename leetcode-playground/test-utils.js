/**
 * Optional performance measurement utility for test files.
 *
 * Usage: wrap any function call with `measure(fn, label)`.
 * Set PERF=true to enable output, otherwise the function runs transparently.
 *
 * Example:
 *   const result = measure(() => twoSum([2, 7, 11, 15], 9), 'basic case');
 *
 * Run with: PERF=true npm test
 */

const PERF = process.env.PERF === "true";

/**
 * Optionally measures execution time and heap memory delta of a function.
 * @param {Function} fn - The function to execute
 * @param {string} label - Label shown in PERF output
 * @returns The return value of fn
 */
export function measure(fn, label = "") {
  if (!PERF) return fn();

  const memBefore = process.memoryUsage().heapUsed;
  const start = performance.now();

  const result = fn();

  const elapsed = performance.now() - start;
  const memDelta = process.memoryUsage().heapUsed - memBefore;

  const sign = memDelta >= 0 ? "+" : "";
  console.log(
    `\n  [PERF] ${label}\n` +
      `    time:   ${elapsed.toFixed(3)}ms\n` +
      `    memory: ${sign}${(memDelta / 1024).toFixed(2)}KB`,
  );

  return result;
}

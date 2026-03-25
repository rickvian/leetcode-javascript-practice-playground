/**
 * Jest setup file for optional performance tracking.
 * Activated by PERF=true env var (e.g. npm run test:perf).
 *
 * Wraps global `it`/`test` to automatically log execution time
 * and heap memory delta for every test case — no changes needed in test files.
 */

if (process.env.PERF === 'true') {
    const wrapTest = (original) => (name, fn, timeout) => {
        original(name, async () => {
            const memBefore = process.memoryUsage().heapUsed;
            const start = performance.now();

            await fn();

            const elapsed = performance.now() - start;
            const memDelta = process.memoryUsage().heapUsed - memBefore;
            const sign = memDelta >= 0 ? '+' : '';

            console.log(
                `\n  [PERF] ${name}\n` +
                `    time:   ${elapsed.toFixed(3)}ms\n` +
                `    memory: ${sign}${(memDelta / 1024).toFixed(2)}KB`
            );
        }, timeout);
    };

    global.it = wrapTest(global.it);
    global.test = wrapTest(global.test);
    global.it.each = global.it.each;
    global.test.each = global.test.each;
}

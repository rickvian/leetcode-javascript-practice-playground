#!/usr/bin/env node
/**
 * Minimal test runner for Node 18. Uses vitest/dist internals directly,
 * bypassing the rolldown CLI that requires Node 20+ for styleText.
 *
 * Usage: node run_test.mjs <test_file_abs_path>
 * Exit 0 = all pass, 1 = failures, 2 = import error
 */

import path from 'path';
import { fileURLToPath } from 'url';
import { pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '../..');
const VITEST_DIST = path.resolve(__dirname, '../../node_modules/vitest/dist/index.js');

const vitestMod = await import(pathToFileURL(VITEST_DIST).href);
const { expect } = vitestMod;

// Inject pointer-type globals so oracles that reference ListNode/TreeNode without
// importing them (relying on LeetCode's platform scope) work correctly.
const helpersUrl = pathToFileURL(
    path.resolve(PROJECT_ROOT, 'leetcode-playground/tests/__helpers__/test_helpers.js')
).href;
const { ListNode, TreeNode, GraphNode } = await import(helpersUrl);
globalThis.ListNode  = ListNode;
globalThis.TreeNode  = TreeNode;
globalThis.GraphNode = GraphNode;
globalThis.Node      = GraphNode; // clone-graph and related oracles use Node

let passed = 0;
let failed = 0;
const failures = [];

// Collect describe/it blocks before the test file runs
const _suiteStack = [[]];

function _describe(name, fn) {
    const cases = [];
    _suiteStack.push(cases);
    try { fn(); } catch (e) { /* ignore sync errors in describe body */ }
    _suiteStack.pop();
    _suiteStack[_suiteStack.length - 1].push({ type: 'suite', name, cases });
}

function _it(name, fn) {
    _suiteStack[_suiteStack.length - 1].push({ type: 'test', name, fn });
}

globalThis.describe = _describe;
globalThis.it = _it;
globalThis.test = _it;
globalThis.expect = expect;
globalThis.beforeEach = () => {};
globalThis.afterEach = () => {};
globalThis.beforeAll = () => {};
globalThis.afterAll = () => {};

const testFile = process.argv[2];
if (!testFile) {
    process.stderr.write('Usage: node run_test.mjs <test_file>\n');
    process.exit(1);
}

const absPath = path.isAbsolute(testFile) ? testFile : path.resolve(process.cwd(), testFile);

try {
    await import(pathToFileURL(absPath).href);
} catch (e) {
    process.stderr.write('Import error: ' + e.message + '\n');
    process.exit(2);
}

async function runNode(node, prefix) {
    if (node.type === 'suite') {
        const label = prefix ? `${prefix} > ${node.name}` : node.name;
        for (const child of node.cases) await runNode(child, label);
    } else {
        const label = prefix ? `${prefix} > ${node.name}` : node.name;
        try {
            await node.fn();
            passed++;
        } catch (e) {
            failed++;
            failures.push(`  FAIL: ${label}\n       ${e.message}`);
        }
    }
}

for (const node of _suiteStack[0]) await runNode(node, '');

if (failures.length) process.stderr.write(failures.join('\n') + '\n');
process.stdout.write(`${passed} passed, ${failed} failed\n`);
process.exit(failed > 0 ? 1 : 0);

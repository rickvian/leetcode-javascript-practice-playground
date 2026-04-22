#!/usr/bin/env node
/**
 * oracle_run.mjs
 *
 * Calls an oracle function from solutions-bank/, handles pointer-type
 * conversions using test_helpers.js, writes per-case outputs to JSON.
 *
 * CLI flags:
 *   --bankPath      path to oracle file (absolute or relative to cwd)
 *   --fnName        exported function / class name
 *   --inputCategory plain-json | pointer-linked-list | pointer-tree |
 *                   pointer-graph | design-class | in-place-mutation
 *   --paramTypes    JSON array of @param type strings, e.g. '["ListNode","number"]'
 *   --returnType    @return type string, e.g. "ListNode"
 *   --inputsJsonPath  path to input file
 *   --outputsJsonPath path to write results
 *
 * Input file format:
 *   Regular:     [[arg0, arg1, ...], ...]  (array of arg-sets)
 *   design-class: [[[method, ...args], ...], ...]  (array of op-sequences)
 *
 * Output format:
 *   Regular:     [{input, output}, ...]
 *   in-place:    [{input, output: {returnValue, expectedElements}}, ...]
 *   design-class:{input, output: [ret0, ret1, ...]} per sequence
 *   Errors:      {input, threw: true, errorName, message}
 */

import { readFileSync, writeFileSync } from 'fs';
import { pathToFileURL, fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '../..');

// ---------- CLI parsing ----------
const argv = process.argv.slice(2);
const getArg = (name) => {
    const idx = argv.indexOf(`--${name}`);
    return idx !== -1 ? argv[idx + 1] : null;
};

const bankPath      = getArg('bankPath');
const fnName        = getArg('fnName');
const inputCategory = getArg('inputCategory') || 'plain-json';
const paramTypesRaw = getArg('paramTypes')    || '[]';
const returnType    = getArg('returnType')    || 'void';
const inputsPath    = getArg('inputsJsonPath');
const outputsPath   = getArg('outputsJsonPath');

if (!bankPath || !fnName || !inputsPath || !outputsPath) {
    process.stderr.write('oracle_run: missing required args\n');
    process.exit(1);
}

let paramTypes = [];
try { paramTypes = JSON.parse(paramTypesRaw); } catch (_) {}

// ---------- Load test helpers ----------
const helpersUrl = pathToFileURL(
    path.resolve(PROJECT_ROOT, 'leetcode-playground/tests/__helpers__/test_helpers.js')
).href;
const helpers = await import(helpersUrl);
const { ListNode, TreeNode, GraphNode,
        arrayToList, listToArray,
        arrayToTree, treeToArray,
        arrayToGraphNode, graphToAdjList } = helpers;

// Inject as globals so oracles that reference them without importing work
globalThis.ListNode  = ListNode;
globalThis.TreeNode  = TreeNode;
globalThis.GraphNode = GraphNode;
globalThis.Node      = GraphNode; // some oracles use Node (clone-graph, etc.)

// ---------- Load oracle ----------
const absBank = path.isAbsolute(bankPath)
    ? bankPath
    : path.resolve(process.cwd(), bankPath);

let oracleMod;
try {
    oracleMod = await import(pathToFileURL(absBank).href);
} catch (e) {
    process.stderr.write(`oracle_run: import failed for ${bankPath}: ${e.message}\n`);
    process.exit(1);
}

const fn = oracleMod[fnName];
if (typeof fn !== 'function') {
    process.stderr.write(`oracle_run: ${fnName} is not a function in ${bankPath}\n`);
    process.exit(1);
}

// ---------- Conversion helpers ----------
function convertArg(arg, ptype) {
    if (!ptype) return arg;
    // ListNode[] = array of linked list heads; each sub-array → arrayToList
    if (ptype.trim() === 'ListNode[]' && Array.isArray(arg))
        return arg.map(a => Array.isArray(a) ? arrayToList(a) : a);
    if (ptype.includes('ListNode') && Array.isArray(arg)) return arrayToList(arg);
    // TreeNode[] = array of tree roots
    if (ptype.trim() === 'TreeNode[]' && Array.isArray(arg))
        return arg.map(a => Array.isArray(a) ? arrayToTree(a) : a);
    if (ptype.includes('TreeNode') && Array.isArray(arg)) return arrayToTree(arg);
    if ((ptype.includes('GraphNode') || ptype.trim() === 'Node') && Array.isArray(arg))
        return arrayToGraphNode(arg);
    return arg;
}

function serializeResult(result, rtype) {
    // For pointer return types always route through serializer (null/undefined → [] or [])
    if (rtype && rtype.trim() === 'ListNode[]' && Array.isArray(result))
        return result.map(n => listToArray(n));
    if (rtype && rtype.includes('ListNode'))
        return listToArray(result);
    if (rtype && rtype.trim() === 'TreeNode[]' && Array.isArray(result))
        return result.map(t => treeToArray(t));
    if (rtype && rtype.includes('TreeNode'))
        return treeToArray(result);
    if (rtype && (rtype.includes('GraphNode') || rtype.trim() === 'Node') && result != null)
        return graphToAdjList(result);
    if (result === null || result === undefined) return result;
    return result;
}

// ---------- Process inputs ----------
const inputs  = JSON.parse(readFileSync(inputsPath, 'utf8'));
const outputs = [];

if (inputCategory === 'design-class') {
    for (const sequence of inputs) {
        const results = [];
        let instance  = null;
        for (const [method, ...opArgs] of sequence) {
            if (instance === null && method === fnName) {
                try {
                    instance = new fn(...opArgs);
                    results.push(null); // constructor void
                } catch (e) {
                    results.push({ threw: true, errorName: e.constructor.name, message: e.message });
                    break;
                }
            } else if (instance !== null && typeof instance[method] === 'function') {
                try {
                    const r = instance[method](...opArgs);
                    results.push(r !== undefined ? r : null);
                } catch (e) {
                    results.push({ threw: true, errorName: e.constructor.name, message: e.message });
                }
            } else {
                results.push(null);
            }
        }
        outputs.push({ input: sequence, output: results });
    }

} else if (inputCategory === 'in-place-mutation') {
    for (const inputArgs of inputs) {
        try {
            const argsCopy = JSON.parse(JSON.stringify(inputArgs));
            const convertedArgs = inputArgs.map((a, i) => convertArg(a, paramTypes[i]));
            const returnValue   = fn(...convertedArgs);
            const returnVoid    = returnValue === undefined || returnValue === null;
            // convertedArgs[0] is the (possibly mutated) first array
            const mutatedFirst  = Array.isArray(convertedArgs[0])
                ? [...convertedArgs[0]]
                : convertedArgs[0];
            let expectedElements;
            if (returnVoid) {
                // void-return in-place (e.g. nextPermutation): store full mutated array as-is
                expectedElements = Array.isArray(mutatedFirst) ? [...mutatedFirst] : mutatedFirst;
            } else {
                // returns k: slice(0, k) then sort (e.g. removeElement)
                const k = returnValue;
                expectedElements = Array.isArray(mutatedFirst) && k !== undefined
                    ? [...mutatedFirst].slice(0, k).sort((a, b) => a - b)
                    : mutatedFirst;
            }
            outputs.push({
                input: argsCopy,
                output: {
                    returnValue: returnVoid ? null : returnValue,
                    expectedElements,
                    returnVoid,
                },
            });
        } catch (e) {
            outputs.push({ input: inputArgs, threw: true, errorName: e.constructor.name, message: e.message });
        }
    }

} else {
    for (const inputArgs of inputs) {
        try {
            // Snapshot BEFORE oracle call — some oracles mutate their args in place
            const snapshot      = JSON.parse(JSON.stringify(inputArgs));
            const convertedArgs = inputArgs.map((a, i) => convertArg(a, paramTypes[i]));
            const rawResult     = fn(...convertedArgs);
            const result        = serializeResult(rawResult, returnType);
            outputs.push({ input: snapshot, output: result });
        } catch (e) {
            outputs.push({ input: inputArgs, threw: true, errorName: e.constructor.name, message: e.message });
        }
    }
}

writeFileSync(outputsPath, JSON.stringify(outputs, null, 2));
process.stdout.write(`oracle_run: wrote ${outputs.length} cases → ${outputsPath}\n`);

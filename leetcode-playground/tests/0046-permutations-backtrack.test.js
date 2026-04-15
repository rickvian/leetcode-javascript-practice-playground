import { permute } from '../0046-permutations-backtrack.js';
import { describe } from '@jest/globals';
import { runPermuteTests } from './0046-permutations.shared.js';

describe('0046-permutations-backtrack', () => {
    runPermuteTests(permute, { checkMutation: true });
});

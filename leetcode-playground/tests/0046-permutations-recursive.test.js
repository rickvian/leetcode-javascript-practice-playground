import { permute } from '../0046-permutations-recursive.js';
import { describe } from '@jest/globals';
import { runPermuteTests } from './0046-permutations.shared.js';

describe('0046-permutations-recursive', () => {
    runPermuteTests(permute);
});

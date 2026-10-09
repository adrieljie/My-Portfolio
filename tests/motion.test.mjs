import test from 'node:test';
import assert from 'node:assert/strict';
import { clamp } from '../src/hooks/motion.js';

test('scroll progress stays within its range, including overscroll', () => {
  for (const [input, expected] of [[-1, 0], [0, 0], [0.5, 0.5], [1, 1], [2, 1]]) {
    assert.equal(clamp(input, 0, 1), expected);
  }
});

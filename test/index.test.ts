import { test, assert } from 'vitest';
import rollupStarterPlugin from '../src';

test('simple', () => {
  assert.equal(rollupStarterPlugin().name, 'pkg-name');
});

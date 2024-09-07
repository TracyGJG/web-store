import { describe, it, mock } from 'node:test';
import assert from 'node:assert/strict';

import { localStorage, sessionStorage } from './test/mockWebStorage.js';

import webStore from './index.js';

const { sessionStore, localStore } = webStore({
  localStorage,
  sessionStorage,
});

describe('web-store', () => {
  const testObject = {
    hello: 'world!',
  };

  describe('sessionStore', () => {
    it('is instantiated', () => {
      assert.strictEqual(typeof sessionStore, 'function');
    });

    it('returns an api when called', () => {
      const testStore = sessionStore('test');

      console.log(typeof testStore, 'object');
      assert.strictEqual(typeof testStore.get, 'function');
      assert.strictEqual(typeof testStore.remove, 'function');
      assert.strictEqual(typeof testStore.set, 'function');
    });

    describe('can store values in session storage', () => {
      const testStore = sessionStore('testStore');

      it('can get', () => {
        const preGet = testStore.get();
        assert.strictEqual(preGet, null);
      });

      it('can set, with get', () => {
        testStore.set({ hello: 'world' });

        const postGet = testStore.get();
        assert.deepEqual(postGet, { hello: 'world' });
      });

      it('can set, without exception', () => {
        assert.doesNotThrow(() => testStore.set({ hello: 42n }));

        assert.deepEqual(testStore.get(), { hello: 'world' });
      });

      it('can remove, with get', () => {
        const preRemove = testStore.get();
        assert.deepEqual(preRemove, { hello: 'world' });

        testStore.remove();

        const postRemove = testStore.get();
        assert.strictEqual(postRemove, null);
      });
    });
  });
});

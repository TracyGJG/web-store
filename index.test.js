import { describe, it, test, mock } from 'node:test';
import assert from 'node:assert/strict';

import { sessionStore, localStore } from './index.js';

describe('web-store', () => {
  const testObject = {
    hello: 'world!',
  };

  const mockWeStorage = mock.method(global, 'webStorage', () => {
    return {
      clear,
      get,
      remove,
      set,
    };
  });

  describe('sessionStore', () => {});

  describe('localStore', () => {});
});

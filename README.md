# web-store

A simplified interface for the browser-based [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API).

## webStore (default import)

`webStore` is a constructor function that is passed a reference to `globalThis`, which in the prime context of usage will be the `Window` object of the Document Object Model (DOM).

The function returns an object providing access to two differnt Web Stores: `sessionStorage` and `localStorage` (see [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Storage) for details).

The two methods exposed are: `sessionStore` and `localStore`. Both methods expect to be called with the name of the key on which data will be stored and retrieved. The methods return an object providing calls for manipulating the specific store.

Namely:

- `get` to retrieve the value the named (key) store.
- `remove` is used to delete the store.
- `set` is supplied with the value to be stored in the store.

---

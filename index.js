function webStore(keyName, webStorage) {
  const clear = () => webStorage.clear();
  const get = (defaultValue = null) => {
    const value = webStorage.getItem(keyName);
    return value ? JSON.parse(value) : defaultValue;
  };
  const remove = () => webStorage.removeItem(keyName);
  const set = value => {
    try {
      const encodedValue = JSON.stringify(value);
      webStorage.setItem(keyName, encodedValue);
    } catch (err) {
      console.error(`webStore::set: ${err.message}`);
    }
  };

  return {
    clear,
    get,
    remove,
    set,
  };
}

export function sessionStore(keyName) {
  return webStore(keyName, sessionStorage);
}

export function localStore(keyName) {
  return webStore(keyName, localStorage);
}

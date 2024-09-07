function webStore(keyName, webStorage) {
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
    get,
    remove,
    set,
  };
}

export default function (globalObject) {
  return {
    sessionStore: keyName => webStore(keyName, globalObject.sessionStorage),
    localStore: keyName => webStore(keyName, globalObject.localStorage),
  };
}

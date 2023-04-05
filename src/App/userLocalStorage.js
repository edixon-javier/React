import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [syncItems, setSyncItems] = React.useState(true);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parseItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parseItem = [];
        } else {
          parseItem = JSON.parse(localStorageItem);
        }

        setItem(parseItem);
        setLoading(false);
        setSyncItems(true)
      } catch (error) {
        setError(error);
      }
    }, 2000);
  }, [syncItems]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  const sincronizeItem = () => {
    setLoading(true);
    setSyncItems(false);
  };

  return { item, saveItem, loading, error, sincronizeItem  };
}

export { useLocalStorage };

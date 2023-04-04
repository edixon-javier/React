import React from "react";

function useLocalStorage(itemName, initialValue) {
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
        } catch (error) {
          setError(error);
        }
      }, 1500);
    }, []);
  
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    };
    // console.log(item, saveItem, loading, error);
  
    return { item, saveItem, loading, error };
  }

  export { useLocalStorage };
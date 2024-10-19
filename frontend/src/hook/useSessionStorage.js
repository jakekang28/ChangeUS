import { useEffect, useState } from "react";

export function useSessionStorage(key, defaultValue = null) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error("Error reading from sessionStorage", error);
      return defaultValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      if (value === null) {
        sessionStorage.removeItem(key); // 값이 null일 때 제거
      } else {
        sessionStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error("Error writing to sessionStorage", error);
    }
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const item = sessionStorage.getItem(key);
      setStoredValue(item ? JSON.parse(item) : defaultValue);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key, defaultValue]);

  return [storedValue, setValue];
}

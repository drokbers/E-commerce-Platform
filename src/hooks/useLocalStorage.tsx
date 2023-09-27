"use client";
import { useState, useEffect } from "react";

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const getStoredValue = () => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(getStoredValue);

  // Performance: Avoid double-reading from local storage using lazy initializer in useState
  useEffect(() => {
    try {
      const serializedValue = JSON.stringify(storedValue);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.warn(`Error setting localStorage key “${key}”:`, error);
    }
  }, [key, storedValue]);

  // Sync across tabs: Update state if it changes in a different tab
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue !== JSON.stringify(storedValue)) {
        setStoredValue(getStoredValue()); 
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Cleanup: Remove event listener on unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;

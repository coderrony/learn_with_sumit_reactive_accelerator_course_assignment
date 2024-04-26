import { useEffect, useRef } from "react";

const useDebounce = (callback, delay) => {
  const timeRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeRef.current) {
        clearTimeout(timeRef);
      }
    };
  }, []);

  const debounceValue = (...args) => {
    if (timeRef.current) {
      clearTimeout(timeRef);
    }
    timeRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };
  return debounceValue;
};

export default useDebounce;

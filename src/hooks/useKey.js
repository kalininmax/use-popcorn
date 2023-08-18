import { useEffect } from 'react';

const useKey = (key, callback) => {
  useEffect(() => {
    const cb = (e) => {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        callback();
      }
    };

    document.addEventListener('keydown', cb);

    return () => {
      document.removeEventListener('keydown', cb);
    };
  }, [key, callback]);
};

export { useKey };

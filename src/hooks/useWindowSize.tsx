import { useEffect, useState } from 'react';

type Size = {
  width: number;
};

export function useWindowSize(): Size {
  const [windowSize, setWindowSize] = useState<Size>({ width: 0 });

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize({ width: window.innerWidth });
    }

    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return windowSize;
}

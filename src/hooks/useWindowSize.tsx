import { useEffect, useState } from 'react';

type Size = {
  width: number | undefined;
};

export function useWindowSize(): Size {
  const [windowSize, setWindowSize] = useState<Size>({ width: undefined });

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

import { useEffect, useRef } from 'react';

export const useScrollPosition = () => {
  const lastPosition = useRef<number>(0);

  useEffect(() => {
    lastPosition.current = window.scrollY;

    const handleScroll = () => {
      lastPosition.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return lastPosition.current;
};
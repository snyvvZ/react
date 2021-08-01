import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

export function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  // const [scrollDirection, setScrollDirection] = useState();
  // let lastScrollTop = 0;
  const delay = 5;

  const listener = () => {
    setScrollY(window.pageYOffset);
    // setScrollDirection(scrollY > lastScrollTop ? setScrollDirection('down') : setScrollDirection('up'));
    // lastScrollTop = scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', debounce(listener, delay));
    return () => window.removeEventListener('scroll', listener);
  });

  return {
    scrollY
  };
}
import { createContext, useState, useEffect, useCallback } from 'react';

const ScrollContext = createContext({
  scrollLocation: null,
  scrolledDown: null,
});

export const ScrollContextProvider = (props) => {
  const [scrollLocation, setScrollLocation] = useState(0);
  const [scrolledDown, setScrolledDown] = useState(false);

  const onScrollHandler = useCallback(() => {
    const newScrollLocation = window.scrollY;
    if (scrollLocation < newScrollLocation) {
      setScrolledDown(true);
    } else {
      setScrolledDown(false);
    }
    setScrollLocation(newScrollLocation);
  }, [scrollLocation]);

  useEffect(() => {
    window.addEventListener('scroll', onScrollHandler);

    return () => {
      window.removeEventListener('scroll', onScrollHandler);
    };
  }, [onScrollHandler]);

  return (
    <ScrollContext.Provider
      value={{
        scrollLocation,
        scrolledDown,
      }}
    >
      {props.children}
    </ScrollContext.Provider>
  );
};

export default ScrollContext;

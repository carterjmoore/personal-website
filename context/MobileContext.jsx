import { createContext, useState, useEffect } from 'react';

const MobileContext = createContext({
  isMobile: null,
});

export const MobileContextProvider = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    window.matchMedia('(max-width: 768px)').addEventListener('change', () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    });
  }, []);

  return (
    <MobileContext.Provider
      value={{
        isMobile,
      }}
    >
      {props.children}
    </MobileContext.Provider>
  );
};

export default MobileContext;

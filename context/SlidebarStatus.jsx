import { createContext, useState, useEffect } from "react";

export const SlidebarStatusContext = createContext();

export function SlidebarStatusProvider({ children }) {
  const [status, setStatus] = useState(false);
  const [mobileStatus, setMobileStatus] = useState(false);
  const [whatScreen, setWhatScreen] = useState('mobile');

  useEffect(() => {
    function handleResize() {
      if (typeof window === "undefined") {
        setWhatScreen('mobile');
      } else if (window.innerWidth < 900 && window.innerWidth >= 768) {
        setWhatScreen('tablet');
      } else if (window.innerWidth < 768 && window.innerWidth >= 480) {
        setWhatScreen('stablet');
      } else if (window.innerWidth < 480 && window.innerWidth >= 350) {
        setWhatScreen('mobile');
      } else if (window.innerWidth < 350) {
        setWhatScreen('smobile');
      } else {
        setWhatScreen('desktop');
      }
    }

    window.addEventListener("resize", handleResize);

    // Call handleResize once on mount
    handleResize();

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const changeStatusHandler = () => {
    setStatus(!status);
  };

  const changeMobileStatusHandler = () => {
    setMobileStatus(!mobileStatus);
  };

  return (
    <SlidebarStatusContext.Provider
      value={{
        status,
        whatScreen,
        mobileStatus,
        changeStatusHandler,
        changeMobileStatusHandler,
      }}
    >
      {children}
    </SlidebarStatusContext.Provider>
  );
}

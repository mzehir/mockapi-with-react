import React, { createContext, useEffect, useState } from "react";

const WindowResizeContext = createContext(null);

const WindowResizeProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WindowResizeContext.Provider value={{ windowWidth }}>
      {children}
    </WindowResizeContext.Provider>
  );
};

export { WindowResizeContext, WindowResizeProvider };

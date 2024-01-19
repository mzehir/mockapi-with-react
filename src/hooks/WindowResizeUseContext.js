import { useContext } from "react";
import { WindowResizeContext } from "../contexts/WindowResizeContext";

const WindowResizeUseContext = () => {
  const context = useContext(WindowResizeContext);

  if (!context)
    throw new Error(
      "WindowResizeContext must be placed within Window Resize Provider"
    );

  return context;
};

export default WindowResizeUseContext;

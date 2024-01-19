import React from "react";
import { ApiProvider } from "./contexts/ApiContext";
import { ProductProvider } from "./contexts/ProductContext";
import { WindowResizeProvider } from "./contexts/WindowResizeContext";
import { Router } from "./router/Router";
import OverlayComp from "./components/customizedComp/Overlay";

function App() {
  return (
    <ApiProvider>
      <ProductProvider>
        <WindowResizeProvider>
          <Router />
          <OverlayComp />
        </WindowResizeProvider>
      </ProductProvider>
    </ApiProvider>
  );
}

export default App;

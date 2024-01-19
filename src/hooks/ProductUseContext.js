import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

const ProductUseContext = () => {
  const context = useContext(ProductContext);

  if (!context)
    throw new Error("ProductContext must be placed within ProductProvider");

  return context;
};

export default ProductUseContext;

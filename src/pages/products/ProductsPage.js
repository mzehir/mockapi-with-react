import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiUseContext from "../../hooks/ApiUseContext";
import ProductUseContext from "../../hooks/ProductUseContext";
import WindowResizeUseContext from "../../hooks/WindowResizeUseContext";
import GridComp from "../../components/Grid";
import SortingAndFilteringSection from "./productSections/SortingAndFilteringSection";
import ContentSection from "./productSections/ContentSection";
import CartSection from "./common/CartSection";
import CartSectionTabletAndMobile from "./common/CartSectionTabletAndMobile";
import { ROUTER } from "../../utils/constants/routerConstant";
import { getSortByConstantDefault } from "../../utils/constants/appConstants/sortByConstant";
import {
  filteringByCheckboxAndPreparingOptions,
  sortProducts,
  uniqueValuesByProperty,
} from "../../utils/helper/other";
import { customBreakpoints } from "../../theme/breakpoints";
import SortingAndFilteringMobileSection from "./productSections/SortingAndFilteringMobile/SortingAndFilteringMobileSection";

const tabletBreakpoint = customBreakpoints.tabletBreakpointMax;
const mobileBreakpoint = customBreakpoints.mobileBreakpointMax;

const ProductsPage = () => {
  const navigate = useNavigate();
  const { APIPath, getData } = ApiUseContext();
  const { addProductToCart } = ProductUseContext();
  const { windowWidth } = WindowResizeUseContext();

  const [products, setProducts] = useState([]);
  const [productsByFilters, setProductsByFilters] = useState([]);

  const [sortByValue, setSortByValue] = useState(getSortByConstantDefault);
  const [brandItems, setBrandItems] = useState([]);
  const [modelItems, setModelItems] = useState([]);

  const fetchDataAfter = (data) => {
    let __brandItems = uniqueValuesByProperty(data, "brand");
    let __modelItems = uniqueValuesByProperty(data, "model");

    let _brandItems = filteringByCheckboxAndPreparingOptions(
      __brandItems,
      "brand"
    );
    let _modelItems = filteringByCheckboxAndPreparingOptions(
      __modelItems,
      "model"
    );

    setBrandItems(_brandItems);
    setModelItems(_modelItems);
    setProducts(data);
    setProductsByFilters(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getData(APIPath.GET_PRODUCTS.path);
      if (response && response.length > 0) {
        fetchDataAfter(response);
      }
    };

    fetchData();
  }, []);

  //### Sıralama ###//
  //### Sıralama ###//
  //### Sıralama ###//
  //### Sıralama ###//
  //### Sıralama ###//

  const sortByOnChange = (event) => {
    setSortByValue(event.target.value);
    let sortedProducts = sortProducts(event.target.value, productsByFilters);
    setProductsByFilters(sortedProducts);
  };

  //### Sıralama ###//
  //### Sıralama ###//
  //### Sıralama ###//
  //### Sıralama ###//
  //### Sıralama ###//

  //### Filteleme ###//
  //### Filteleme ###//
  //### Filteleme ###//
  //### Filteleme ###//
  //### Filteleme ###//

  const filterProducts = () => {
    const selectedBrands = brandItems
      .filter((item) => item.checked)
      .map((item) => item.label);

    const selectedModels = modelItems
      .filter((item) => item.checked)
      .map((item) => item.label);

    const filteredProducts = products.filter(
      (product) =>
        (selectedBrands.length === 0 ||
          selectedBrands.includes(product.brand)) &&
        (selectedModels.length === 0 || selectedModels.includes(product.model))
    );

    let sortedProducts = sortProducts(sortByValue, filteredProducts);
    setProductsByFilters(sortedProducts);
  };

  const brandByOnChange = (e, item) => {
    const updatedBrands = brandItems.map((brand) =>
      brand.label === item.label ? { ...brand, checked: !brand.checked } : brand
    );

    setBrandItems(updatedBrands);
  };

  const modelByOnChange = (e, item) => {
    const updatedModels = modelItems.map((model) =>
      model.label === item.label ? { ...model, checked: !model.checked } : model
    );

    setModelItems(updatedModels);
  };

  useEffect(() => {
    filterProducts();
  }, [brandItems, modelItems]);

  //### Filteleme ###//
  //### Filteleme ###//
  //### Filteleme ###//
  //### Filteleme ###//
  //### Filteleme ###//

  return (
    <GridComp container spacing={2} sx={{ height: "100%" }}>
      {windowWidth <= mobileBreakpoint ? (
        <SortingAndFilteringMobileSection
          sortByValue={sortByValue}
          sortByOnChange={sortByOnChange}
          brandItems={brandItems}
          brandByOnChange={brandByOnChange}
          modelItems={modelItems}
          modelByOnChange={modelByOnChange}
        />
      ) : (
        <GridComp
          item
          xs={windowWidth <= mobileBreakpoint ? 12 : 4}
          sm={4}
          md={2}
          lg={2}
          xl={2}
        >
          <SortingAndFilteringSection
            sortByValue={sortByValue}
            sortByOnChange={sortByOnChange}
            brandItems={brandItems}
            brandByOnChange={brandByOnChange}
            modelItems={modelItems}
            modelByOnChange={modelByOnChange}
            isFixed={windowWidth > mobileBreakpoint}
          />
        </GridComp>
      )}

      <GridComp
        item
        xs={windowWidth <= mobileBreakpoint ? 12 : 8}
        sm={windowWidth < tabletBreakpoint ? 8 : 4}
        md={6}
        lg={7}
        xl={8}
        {...(windowWidth < tabletBreakpoint ? { marginBottom: "70px" } : {})}
      >
        <ContentSection
          products={productsByFilters}
          goToProductDetail={(product) => {
            navigate(`${ROUTER.PRODUCT_DETAIL.path}/${product.id}`);
          }}
          addProductToCart={(product) => {
            addProductToCart(product);
          }}
        />
      </GridComp>

      {windowWidth > tabletBreakpoint ? (
        <GridComp item sm={4} md={4} lg={3} xl={2}>
          <CartSection />
        </GridComp>
      ) : (
        <CartSectionTabletAndMobile />
      )}
    </GridComp>
  );
};

export default ProductsPage;

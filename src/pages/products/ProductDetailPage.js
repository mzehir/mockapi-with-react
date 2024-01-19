import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiUseContext from "../../hooks/ApiUseContext";
import ProductUseContext from "../../hooks/ProductUseContext";
import WindowResizeUseContext from "../../hooks/WindowResizeUseContext";
import GridComp from "../../components/Grid";
import ContentSection from "./detailSections/ContentSection";
import CartSection from "./common/CartSection";
import CartSectionTabletAndMobile from "./common/CartSectionTabletAndMobile";
import { ROUTER } from "../../utils/constants/routerConstant";
import { customBreakpoints } from "../../theme/breakpoints";

const tabletBreakpoint = customBreakpoints.tabletBreakpointMax;

const ProductDetailPage = () => {
  const params = useParams();
  const { APIPath, getData } = ApiUseContext();
  const { addProductToCart } = ProductUseContext();
  const { windowWidth } = WindowResizeUseContext();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchData = async (dynamicPath) => {
      if (dynamicPath) {
        const response = await getData(
          `${APIPath.GET_PRODUCT_DETAIL.path}/${dynamicPath}`
        );
        if (response.isSuccess !== false) {
          setProduct(response);
        }
      }
    };

    fetchData(params[ROUTER.PRODUCT_DETAIL.dynamicPath]);
  }, [params]);

  return (
    <GridComp container spacing={2} sx={{ height: "100%" }}>
      <GridComp
        item
        xs={12}
        sm={windowWidth < tabletBreakpoint ? 12 : 8}
        md={8}
        lg={9}
        xl={10}
      >
        <ContentSection
          product={product}
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

export default ProductDetailPage;

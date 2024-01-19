import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTER } from "../utils/constants/routerConstant";
import DefaultLayout from "../layouts/DefaultLayout";
import ProductsPage from "../pages/products/ProductsPage";
import ProductDetailPage from "../pages/products/ProductDetailPage";

export const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate replace to={ROUTER.PRODUCTS.path} />}
      />

      <Route
        path={ROUTER.PRODUCTS.path}
        element={
          <DefaultLayout>
            <ProductsPage />
          </DefaultLayout>
        }
      />

      <Route
        path={`${ROUTER.PRODUCT_DETAIL.path}/:id`}
        element={
          <DefaultLayout>
            <ProductDetailPage />
          </DefaultLayout>
        }
      />
    </Routes>
  );
};

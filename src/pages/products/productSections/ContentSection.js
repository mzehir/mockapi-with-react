import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductUseContext from "../../../hooks/ProductUseContext";
import BoxComp from "../../../components/Box";
import GridComp from "../../../components/Grid";
import PaginationComp from "../../../components/Pagination";
import ProductListCard from "../../../components/multibleComp/cards/ProductListCard";
import NoDataToShow from "../../../components/multibleComp/cards/NoDataToShow";

const ProductListingContainer = styled(BoxComp)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const PaginationContainer = styled(BoxComp)`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
`;

const ContentSection = ({ products, goToProductDetail, addProductToCart }) => {
  const { productFilteringText } = ProductUseContext();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Önce filtreleme yap
  const filteredProducts = productFilteringText
    ? products.filter((product) =>
        product.name.toLowerCase().includes(productFilteringText.toLowerCase())
      )
    : products;

  // Filtrelenen ürünler üzerinde sayfalama yap
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Sayfa değişiminde çağrılacak fonksiyon
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    // TODO Eğer şu anki sayfa numarası, toplam sayfa sayısından büyükse, kullanıcıyı ilk sayfaya yönlendir. Test edilmeli...
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [filteredProducts]);

  return (
    <ProductListingContainer>
      {currentProducts.length === 0 ? (
        <NoDataToShow text="No products found to show" />
      ) : (
        <>
          <GridComp container spacing={4}>
            {currentProducts.map((product, index) => (
              <GridComp
                key={index.toString()}
                item
                xs={12}
                md={6}
                lg={4}
                xl={3}
              >
                <Product
                  product={product}
                  goToProductDetail={goToProductDetail}
                  addProductToCart={addProductToCart}
                />
              </GridComp>
            ))}
          </GridComp>

          <PaginationContainer>
            <PaginationComp
              count={Math.ceil(filteredProducts.length / productsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
            />
          </PaginationContainer>
        </>
      )}
    </ProductListingContainer>
  );
};

export default ContentSection;

const Product = ({ product, goToProductDetail, addProductToCart }) => {
  const { currencySymbol } = ProductUseContext();
  const { image, price, brand, model, name } = product;

  return (
    <ProductListCard
      image={image}
      price={`${price} ${currencySymbol}`}
      brand={brand}
      model={model}
      name={name}
      cardOnClick={() => goToProductDetail(product)}
      buttonOnClick={() => addProductToCart(product)}
    />
  );
};

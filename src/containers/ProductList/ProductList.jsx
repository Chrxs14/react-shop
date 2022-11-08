import React from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import useGetProducts from "../../hooks/useGetProducts";
import Search from "../../components/Search/Search";
import Categories from "../../components/Categories/Categories";
import "./ProductList.scss";

const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  const products = useGetProducts(API);
  return (
    <section className="main-container">
      <Search />
      <Categories />
      <div className="ProductList">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;

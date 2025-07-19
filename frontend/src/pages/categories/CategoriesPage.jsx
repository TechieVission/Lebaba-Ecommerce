import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products.json";
import ProductCards from "../shop/ProductCards";

const CategoriesPage = () => {
  const { categoryName } = useParams();

  const [filteredProducts, setFilteredProduct] = useState([]);

  useEffect(() => {
    const filtered = products.filter(
      (product) => product.category === categoryName.toLowerCase()
    );

    setFilteredProduct(filtered);
  }, [categoryName]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <section className="section__container bg-primary-light ">
        <h2 className="section__header capitalize">{categoryName}</h2>
        <p className="section__subheader">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.
        </p>
      </section>

      {/* Section displaying product cards */}
      <div className="section__container">
        <ProductCards products={filteredProducts} />
      </div>
    </>
  );
};

export default CategoriesPage;

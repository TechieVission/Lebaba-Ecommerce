import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      name: " Accessories",
      path: "accessories",
      image: "./assets/category-1.jpg",
    },
    {
      name: " Dress Collection",
      path: "dress",
      image: "./assets/category-2.jpg",
    },
    {
      name: " Jewellers",
      path: "jewellery",
      image: "./assets/category-3.jpg",
    },
    {
      name: " Cosmetics",
      path: "cosmetics",
      image: "./assets/category-4.jpg",
    },
  ];
  return (
    <>
      <div className="product__grid">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/categories/${category.path}`}
            className="categories__card"
          >
            <img src={category.image} alt={category.name} />
            <h4>{category.name}</h4>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Categories;

import React, { useState, useEffect } from "react";
//import productsData from "../../data/products.json";
import ProductCards from "../shop/ProductCards";
import ShopFiltering from "./ShopFiltering";
import { useFetchAllProductsQuery } from "../../redux/features/products/productsApi";

const filters = {
  categories: ["all", "accessories", "dress", "jewellery", "cosmetics"],
  colors: ["all", "black", "red", "gold", "blue", "silver", "beige", "green"],
  priceRanges: [
    { label: "under $50", min: 0, max: 50 },
    { label: "under $50 - $100", min: 50, max: 100 },
    { label: "under $100 - $200", min: 100, max: 200 },
    { label: "under $200 and above", min: 200, max: Infinity },
  ],
};

const ShopPage = () => {
  const [filterState, setFilterState] = useState({
    category: "all",
    color: "all",
    priceRange: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);

  const { category, color, priceRange } = filterState;
  const [minPrice, maxPrice] = priceRange.split("-").map(Number);

  const {
    data: { products = [], totalPages, totalProducts } = {},
    error,
    isLoading,
  } = useFetchAllProductsQuery({
    category: category !== "all" ? category : "",
    color: color !== "all" ? color : "",
    minPrice: isNaN(minPrice) ? "" : minPrice,
    maxPrice: isNaN(maxPrice) ? "" : maxPrice,
    page: currentPage,
    limit: productsPerPage,
  });

  // Function to reset filters to default values
  const clearFilters = () => {
    setFilterState({
      category: "all",
      color: "all",
      priceRange: "",
    });
  };

  // handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  if (isLoading) return <div>Loading....</div>;
  if (error) return <div>Error loading products</div>;

  const startProducts = (currentPage - 1) * productsPerPage + 1;
  const endProducts = startProducts + products.length - 1;

  return (
    <>
      {/* Section for the shop header */}
      <section className="section__container bg-primary-light ">
        <h2 className="section__header capitalize">Shop Page</h2>
        <p className="section__subheader">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.
        </p>
      </section>

      {/* Section for product filtering and display */}
      <section className="section__container">
        <div className="flex flex-col md:flex-row md:gap-12 gap-8">
          {/* Left side - Filter options */}
          <ShopFiltering
            filters={filters}
            filterState={filterState}
            setFilterState={setFilterState}
            clearFilters={clearFilters}
          />

          {/* Right side - Display products */}
          <div>
            <h3 className="text-xl font-medium mb-4">
              {/* Products Available: {products.length} */}
              Showing {startProducts} to {endProducts} of {totalProducts}{" "}
              products
            </h3>
            {/* Rendering filtered product cards */}
            <ProductCards products={products} />

            {/* page nation controls */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2"
              >
                Previous
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 rounded-md mx-1 ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-700"
                  } `}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md ml-2"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;

import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

function Collection() {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setshowFilter] = useState(false);
  const [filterProducts, setfilterProducts] = useState([]);
  const [categoryFilter, setcategoryFilter] = useState([]);
  const [typeFilter, settypeFilter] = useState([]);
  const [sortType, setsortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (categoryFilter.includes(e.target.value)) {
      setcategoryFilter((prev) =>
        prev.filter((item) => item !== e.target.value)
      );
    } else {
      setcategoryFilter((prev) => [...prev, e.target.value]);
    }
  };

  const toggleType = (e) => {
    if (typeFilter.includes(e.target.value)) {
      settypeFilter((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      settypeFilter((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilters = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (categoryFilter.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        categoryFilter.includes(item.category)
      );
    }
    if (typeFilter.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        typeFilter.includes(item.subCategory)
      );
    }

    setfilterProducts(productsCopy);
  };

  const sortProducts = () => {
    let filterProductsCopy = filterProducts.slice();

    switch (sortType) {
      case "low-to-hight":
        setfilterProducts(filterProductsCopy.sort((a, b) => a.price - b.price));
        break;
      case "hight-to-low":
        setfilterProducts(filterProductsCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilters();
        break;
    }
  };

  useEffect(() => {
    sortProducts();
  }, [categoryFilter, typeFilter, sortType, search, showSearch]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter options */}
      <div className="min-w-60">
        <p
          className="my-2 text-xl flex items-center cursor-pointer gap-2 uppercase"
          onClick={() => setshowFilter(!showFilter)}
        >
          Filter
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium uppercase">Categories</p>
          <div className="flex flex-col gap-2 font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Men"}
                onChange={toggleCategory}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Women"}
                onChange={toggleCategory}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Kids"}
                onChange={toggleCategory}
              />{" "}
              Kids
            </p>
          </div>
        </div>
        {/* Sub Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium uppercase">Type</p>
          <div className="flex flex-col gap-2 font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Topwear"}
                onChange={toggleType}
              />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Bottomwear"}
                onChange={toggleType}
              />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Winterwear"}
                onChange={toggleType}
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right section - All Categories */}
      <div className="flex-1 ">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"All"} text2={"Collections"} />
          <select
            onChange={(e) => setsortType(e.target.value)}
            className="border border-gray-300 text-sm px-2 bg-white outline-none rounded-md"
          >
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-to-hight">Sort by: Low To Hight</option>
            <option value="hight-to-low">Sort by: Hight to Low</option>
          </select>
        </div>
        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((product, index) => (
            <ProductItem
              key={index}
              id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../src/styles/styles";
import ProductsCard from "../Products/ProductsCard";
import { productData } from "../../static/data";
const BestDeals = () => {
  const [data, setData] = useState([]);
  console.log("product data", productData);

  // useEffect(() => {
  //   const allProductsData = allProducts ? [...allProducts] : [];
  //   const sortedData = allProductsData?.sort((a,b) => b.sold_out - a.sold_out);
  //   const firstFive = sortedData && sortedData.slice(0, 5);
  //   setData(firstFive);
  // }, [allProducts]);

  const bestDelasProduct = productData.slice(0, 5);

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Best Deals</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {bestDelasProduct.map((i, index) => (
            <ProductsCard data={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;

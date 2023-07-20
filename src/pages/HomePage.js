import React from "react";
import Header from "../components/Layout/Header";
import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import BestDeals from "../components/BestDeals/BestDeals";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <BestDeals />
    </div>
  );
};

export default HomePage;

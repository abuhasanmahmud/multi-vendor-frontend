import React from "react";
import Header from "../components/Layout/Header";
import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import BestDeals from "../components/BestDeals/BestDeals";
import Events from "../components/Events/Events";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
    </div>
  );
};

export default HomePage;

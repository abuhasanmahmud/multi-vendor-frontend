import React from "react";
import Header from "../components/Layout/Header";
import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import BestDeals from "../components/BestDeals/BestDeals";
import Events from "../components/Events/Events";
import FeaturedProduct from "../components/FeaturedProduct/FeaturedProduct";
import Sponsored from "../components/Sponsored/Sponsored";
import Footer from "../components/Layout/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProduct />
      <Sponsored />
      <Footer />
    </div>
  );
};

export default HomePage;

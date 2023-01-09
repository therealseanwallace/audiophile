import React from "react";
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import ShopProductsLinks from "./components/ShopProductsLinks";
import AudiophileCopySection from "./components/AudiophileCopySection";
import Footer from "./components/Footer";
import FeaturedProducts from "./components/FeaturedProducts";

const Home = () => {
  return (
    <div className="homepage-container">
      <header>
        <Menu />
        <hr />
        <Hero />
      </header>
      <main>
        <ShopProductsLinks />
        <FeaturedProducts />
        <AudiophileCopySection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ShopProductsLinks from "./components/ShopProductsLinks";
import FeaturedProductDetailed from "./components/FeaturedProductDetailed";
import FeaturedProductNoDetail from "./components/FeaturedProductNoDetail";
import AudiophileCopySection from "./components/AudiophileCopySection";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="homepage-container">
      <div className="header-hero-container">
        <Header />
        <hr />
        <Hero />
      </div>
      <main>
        <ShopProductsLinks />
        <FeaturedProductDetailed />
        <FeaturedProductNoDetail productName="ZX7 Speaker"/>
        <FeaturedProductNoDetail productName="YX1 Earphones"/>
        <AudiophileCopySection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

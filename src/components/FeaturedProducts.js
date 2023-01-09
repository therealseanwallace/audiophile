import React from "react";
import FeaturedProduct from "./FeaturedProduct";

const speakerDescription = "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.";

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
        <FeaturedProduct productName="ZX9 Speaker" desc={speakerDescription} />
        <FeaturedProduct productName="ZX7 Speaker"/>
        <FeaturedProduct productName="YX1 Earphones"/>
    </section>
  );
}

export default FeaturedProducts;
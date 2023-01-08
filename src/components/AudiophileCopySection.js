import React from "react";
import BestGear from "../assets/shared/desktop/image-best-gear.jpg";

const AudiophileCopySection = () => {
  return (
    <section className="audiophile-copy-section-container">
      <div className="copy-section-copy-container">
        <h2>
          Bringing you the <span>best</span> audio gear.
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img src={BestGear} alt="A young man listening to headphones."/>
    </section>
  );
};

export default AudiophileCopySection;
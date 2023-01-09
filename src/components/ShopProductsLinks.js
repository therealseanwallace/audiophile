import React from "react";
import HeadphonePreview from "../assets/headphone-preview.png";
import SpeakerPreview from "../assets/speaker-preview.png";
import EarphonePreview from "../assets/earphone-preview.png";

const ShopProductsLinks = () => {
  return (
    <div className="shop-products-links-container">
      <button>
        <img src={HeadphonePreview} className="headphone-preview preview-image"/>
        <h3>Headphones</h3>
        <p>Shop</p>
      </button>
      <button>
      <img src={SpeakerPreview} className="speaker-preview preview-image"/>
        <h3>Speakers</h3>
        <p>Shop</p>
      </button>
      <button>
        <img src={EarphonePreview} className="earphone-preview preview-image"/>
        <h3>Earphones</h3>
        <p>Shop</p>
      </button>
    </div>
  );
};

export default ShopProductsLinks;

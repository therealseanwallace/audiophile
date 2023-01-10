import React from "react";
import HeadphonePreview from "../assets/headphone-preview.png";
import SpeakerPreview from "../assets/speaker-preview.png";
import EarphonePreview from "../assets/earphone-preview.png";

const ShopProductsLinks = () => {
  return (
    <section className="shop-products-links">
      <button>
        <div className="spacer"></div>
        <div className="button-content">
          <div className="shop-product-image-container">
            <img
              src={HeadphonePreview}
              className="headphone-preview preview-image"
            />
          </div>
          <h3 className="shop-product-title">Headphones</h3>
          <div className="p-container">
            <p className="shop-product-p">Shop</p>
            <p className="arrow"> > </p>
          </div>
        </div>
      </button>
      <button>
        <div className="spacer"></div>
        <div className="button-content">
          <div className="shop-product-image-container">
            <img
              src={SpeakerPreview}
              className="speaker-preview preview-image"
            />
          </div>
          <h3 className="shop-product-title">Speakers</h3>
          <div className="p-container">
            <p className="shop-product-p">Shop</p>
            <p className="arrow"> > </p>
          </div>
        </div>
      </button>
      <button>
        <div className="spacer"></div>
        <div className="button-content">
          <div className="shop-product-image-container">
            <img
              src={EarphonePreview}
              className="earphone-preview preview-image"
            />
          </div>
          <h3 className="shop-product-title">Earphones</h3>
          <div className="p-container">
            <p className="shop-product-p">Shop</p>
            <p className="arrow"> > </p>
          </div>
        </div>
      </button>
    </section>
  );
};

export default ShopProductsLinks;

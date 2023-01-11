import React from "react";
import ZX9 from "../assets/home/mobile/image-speaker-zx9.png";
import YX1 from "../assets/home/mobile/image-earphones-yx1.jpg";

const FeaturedProduct = (props) => {
  let image = "";
  switch (props.productName) {
    case "ZX9 Speaker":
      image = ZX9;
      return (
        <section className="featured-product">
          <div className="circle-one circle"></div>
          <div className="circle-two circle"></div>
          <div className="circle-three circle"></div>
          <img src={image} />
          <h2>{props.productName}</h2>
          <p>{props.desc}</p>
          <button>See product</button>
        </section>
      );
    case "ZX7 Speaker":
      return (
        <section className="featured-product">
          <img src={image} />
          <h2>{props.productName}</h2>
          <p>{props.desc}</p>
          <button>See product</button>
        </section>
      );
    default:
      break;
  }
  image = YX1;
  return (
    <section className="featured-product">
      <div className="image-container" />
      <div className="featured-product-detail">
        <h2>{props.productName}</h2>
        <button>See product</button>
      </div>
    </section>
  );
};

export default FeaturedProduct;

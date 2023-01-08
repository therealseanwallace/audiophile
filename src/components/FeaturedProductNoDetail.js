import React from "react";

const FeaturedProductNoDetail = (props) => {
  return (
    <section className="featured-product-detailed-container">
      <img />
      <h2>{props.productName}</h2>
      <button>See product</button>
    </section>
  )
}

export default FeaturedProductNoDetail;
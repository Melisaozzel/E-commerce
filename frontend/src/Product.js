import React from "react";

export default function product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <div className="image">
        <a href={product._id}>
          <img src={product.image} alt="Denim Jeans" />{" "}
        </a>
      </div>
      <a href={{ "/product/": product._id }}>
        <h4>{product.name}</h4>
      </a>
      <p className="price">{product.price}$</p>
      <p>{product.description}</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div>
  );
}

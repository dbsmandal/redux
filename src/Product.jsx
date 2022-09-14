import React from "react";
import { useSelector } from "react-redux";

export default function Product() {
  const { product } = useSelector((state) => state);
  return (
    <div>
      <h2>List of products</h2>
      {product.list.map((elem, index) => (
        <div key={index}
          style={{ border: "1px solid gray", margin: "5px", cursor: "pointer" }}
        >
          <h4 key={index}>{elem.name}</h4>
          <span key={index}>{elem.price}</span>
        </div>
      ))}
    </div>
  );
}

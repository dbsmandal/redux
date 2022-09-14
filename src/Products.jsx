import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Products() {
  const { product } = useSelector((state) => state);
  let dispatch = useDispatch();
  return (
    <div>
      <h2>List of products</h2>
      {product.list.map((elem, index) => (
        <div key={index}
          style={{
            border: "1px solid gray",
            margin: "5px",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative"
          }}
          onClick={() => {
            dispatch({
              type: "VIEW_PRODUCT",
              payload: elem
            });
          }}
        >
          <h4>{elem.name}</h4>
          <span>{elem.price}</span>
          <div
            style={{
              position: "absolute",
              width: "fit-content",
              height: "fit-content",
              background: "red",
              zIndex: 10,
              color: "white"
            }}
            onClick={(e) => {
              e.preventDefault();
              const updatedList = [...product.list];
              updatedList.splice(index, 1);
              dispatch({
                type: "ADD_PRODUCTS",
                payload: updatedList
              });
            }}
          >
            DELETE
            
          </div>
        </div>
      ))}
    </div>
  );
}

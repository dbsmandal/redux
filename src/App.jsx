import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Products from "./Products";
import "./App.css";

export default function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "ADD_PRODUCTS",
      payload: [
        { id: 1, name: "iPhone", price: 100000 },
        { id: 2, name: "samsung", price: 50000 },
        { id: 3, name: "Vivo", price: 20000 }

      ]
    });
  }, []);
  return (
    <div className="App">
      <h1>Redux demo</h1>
      <Products />
    </div>
  );
}

import { configureStore } from "@reduxjs/toolkit";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import rootReducer from "./Reducer/RootReducer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const store = configureStore({
  reducer: rootReducer,
  // devTools: process.env.ENVIRONMENT != "production"
});
root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);

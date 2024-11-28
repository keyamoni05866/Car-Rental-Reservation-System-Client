import React from "react";
import ReactDOM from "react-dom/client";
import "@smastrom/react-rating/style.css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { persistor, store } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router}></RouterProvider>
      </PersistGate>
      <Toaster />
    </Provider>
  </React.StrictMode>
);

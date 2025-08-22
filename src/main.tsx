import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./app/(public)/layout";
import "./app/global.css";
import Home from "./app/(public)/home.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <Home />
    </Layout>
  </React.StrictMode>
);

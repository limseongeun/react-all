import React from "react";
import ProductDetailPage from "../page/ProductDetailPage";
import { Navigate } from "react-router-dom";

const PrviateRoute = ({ authenticate }) => {
  return authenticate === true ? (
    <ProductDetailPage />
  ) : (
    <Navigate to={"/login"} />
  );
};

export default PrviateRoute;

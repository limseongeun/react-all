import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams(); // url의 '~/:id' 파라미터 값을 인식하는 역할

  return (
    <div>
      <h1>Show ProductDetailPage{id}</h1>
    </div>
  );
};

export default ProductDetailPage;

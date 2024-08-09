import React from "react";
import { useSearchParams } from "react-router-dom";

const ProductPage = () => {
  let [query, setQuery] = useSearchParams(); // // url의 '~/?~' ? 이후의 해당 쿼리 값을 인식하는 역할로 useState와 사용법이 비슷 - [query, setQuery] 형식
  console.log("dddd", query.get("q"));

  return (
    <div>
      <h1>Show all Products!!</h1>
    </div>
  );
};

export default ProductPage;

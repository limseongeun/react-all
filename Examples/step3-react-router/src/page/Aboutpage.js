import React from "react";
import { useNavigate } from "react-router-dom";

const Aboutpage = () => {
  // 버튼 등을 이용해 이벤트로 이동 시, useNavigate 사용
  const navigate = useNavigate();

  const goToHomepage = () => {
    navigate("/"); // link의 to 역할
  };

  return (
    <div>
      <h1>Aboutpage</h1>
      <button onClick={goToHomepage}>Go to Homepage</button>
    </div>
  );
};

export default Aboutpage;

import "./App.css";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./page/Homepage";
import Aboutpage from "./page/Aboutpage";
import ProductPage from "./page/ProductPage";
import ProductDetailPage from "./page/ProductDetailPage";
import LoginPage from "./page/LoginPage";
import UserPage from "./page/UserPage";

function App() {
  const [authenticate, setAuthenticate] = useState(true);
  const PrivateRoute = () => {
    // Navigate 컴포넌트가 리다이렉트 해 주는 역할
    return authenticate === true ? <UserPage /> : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      {/* <Routes> 페이지 스위치 역할 */}
      <Routes>
        {/* <Route> 페이지 정의 역할 - path: 경로, element: 페이지 */}
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/products" element={<ProductPage />} />
        {/* 해당 item page 이동 시에 parameter로 설정 */}
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;

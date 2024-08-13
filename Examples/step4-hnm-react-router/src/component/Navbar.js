import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const logout = () => {
    setAuthenticate(false);
  };

  const search = (e) => {
    if (e.key === "Enter") {
      // 입력한 검색어를 읽어와서
      let keyword = e.target.value;
      // url을 바꿔준다
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div className="nav-area">
      <div className="nav-login-area">
        {authenticate ? (
          <button type="button" className="nav-login-button" onClick={logout}>
            <FontAwesomeIcon icon={faUser} />
            로그아웃
          </button>
        ) : (
          <button
            type="button"
            className="nav-login-button"
            onClick={goToLogin}
          >
            <FontAwesomeIcon icon={faUser} />
            로그인
          </button>
        )}
      </div>
      <div className="nav-section">
        <h1>
          <Link to="/">
            <img
              width={100}
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"
              alt="로고"
            />
          </Link>
        </h1>
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>
        <div className="search-area">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyDown={(e) => search(e)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

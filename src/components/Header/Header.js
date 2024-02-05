import React, { useState } from "react";
import HeaderStyled from "./style/HeaderStyled";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]); //(임시) 리덕스 생성시 변경
  const { isLoggedIn, logOut } = useAuth();
  const userId = useSelector((state) => state.profile.userId);
  const handleClickSignOut = () => {
    logOut();
    navigate("/");
  };
  return (
    <HeaderStyled>
      <div className="header-top-wrapper">
        <div className="header-top">
          <span>럭셔리 쇼핑이 참 쉽다, 발랑</span>
          <h3>Online Luxury boutique</h3>
          <nav>
            <ul>
              {!isLoggedIn ? (
                <>
                  <li>
                    <Link to="sign-in">로그인</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <span>{userId} </span>
                    <span onClick={handleClickSignOut}>{}로그아웃</span>
                  </li>
                  <li>
                    <span>|</span>
                  </li>
                  <li>
                    <Link to="my-page">마이페이지</Link>
                  </li>
                </>
              )}
              <li>
                <span>|</span>
              </li>
              <li>
                <Link to="cart">장바구니</Link>{" "}
              </li>
              <li>
                <span>|</span>
              </li>
              <li>
                <Link onClick={() => alert("준비중인 페이지 입니다.")}>
                  고객센터
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="header-middle-wrapper">
        <div className="header-middle">
          <div className="header-middle-left">
            <ul>
              <li>WOMEN</li>
              <li>|</li>
              <li>MEN</li>
            </ul>
          </div>
          <Link to="/">
            <div className="header-middle-center">
              <img src="ballang_logo.png" alt="ballang_logo" />
            </div>
          </Link>
          <div className="header-middle-right">
            <div className="search-wrapper">
              <input
                type="text"
                onMouseUp={() => alert("개발중인 기능입니다.")}
              />
              <i className="fa fa-search fa-2x" aria-hidden="true" />
            </div>
            <Link to="/cart">
              <div className="cart-wrapper">
                <i className="fa fa-shopping-bag fa-2x" aria-hidden="true"></i>
                <span>{items.length}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="header-bottom-wrapper">
        <nav className="header-bottom">
          <ul className="menu-list">
            <li className="menu-item">NEW IN</li>
            <li className="menu-item">의류</li>
            <li className="menu-item">슈즈</li>
            <li className="menu-item">가방</li>
            <li className="menu-item">악세사리</li>
            <li className="menu-item">주얼리</li>
            <li className="menu-item">SALE</li>
            <li className="menu-item">DESIGNERS</li>
          </ul>
        </nav>
        <hr className="header-bottom-line" />
      </div>
    </HeaderStyled>
  );
}

export default Header;

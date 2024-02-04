import React, { useState } from "react";
import HeaderStyled from "./style/HeaderStyled";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";

function Header() {
  const [items, setItems] = useState([]); //(임시) 리덕스 생성시 변경
  const { isLoggedIn, logOut } = useAuth();

  return (
    <HeaderStyled>
      <div className="header-top-wrapper">
        <div className="header-top">
          <span>럭셔리 쇼핑이 참 쉽다, 발랑</span>
          <span>Online Luxury boutique</span>
          <nav>
            <ul>
              {isLoggedIn ? (
                <>
                  <li>
                    <Link to="sign-in">로그인</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <span>닉네임이 들어올 자리 </span>
                    <span onClick={logOut}>{}로그아웃</span>
                  </li>
                </>
              )}
              <li>
                <span>|</span>
              </li>
              <li>
                <Link to="my-page">마이페이지</Link>
              </li>
              <li>
                <span>|</span>
              </li>
              <li>
                <Link onClick={() => alert("준비중인 페이지 입니다.")}>
                  주문배송
                </Link>{" "}
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
          <div className="header-middle-center">
            <img src="ballang_logo.png" alt="ballang_logo" />
          </div>
          <div className="header-middle-right">
            <div className="search-wrapper">
              <input
                type="text"
                onMouseUp={() => alert("개발중인 기능입니다.")}
              />
              <i className="fa fa-search fa-2x" aria-hidden="true" />
            </div>
            <div className="cart-wrapper">
              <i className="fa fa-shopping-bag fa-2x" aria-hidden="true"></i>
              <span>{items.length}</span>
            </div>
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
}

export default Header;

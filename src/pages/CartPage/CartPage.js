import React, { useEffect } from "react";
import Page from "../../components/Page";
import * as S from "./CartPage.style";
import ProductList from "../../components/ProductList";

function CartPage() {
  return (
    <Page>
      <S.Wrapper>
        <S.Title>장바구니</S.Title>
        <ProductList productType="cart-item" />
      </S.Wrapper>
    </Page>
  );
}

export default CartPage;

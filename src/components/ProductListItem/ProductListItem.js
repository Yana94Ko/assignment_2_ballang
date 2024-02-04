import React from "react";
import utils from "../../utils/utils";
import * as S from "./ProductListItem.style";

function ProductListItem({ product }) {
  if (product) {
    return (
      <S.Wrapper>
        <S.ImgWrapper>
          <img src={product.img_i} alt="상품 사진" />
        </S.ImgWrapper>
        <S.InfoContainer>
          <S.BrandName>{product.brandnm}</S.BrandName>
          <S.ProductInfo>{product.origin}</S.ProductInfo>
          <S.PriceContainer>
            <span>{utils.products.convertPriceToKRW(product.price)}</span>
            <span>{product.sale_percent}%</span>
          </S.PriceContainer>
        </S.InfoContainer>
      </S.Wrapper>
    );
  } else {
    return null;
  }
}

export default ProductListItem;

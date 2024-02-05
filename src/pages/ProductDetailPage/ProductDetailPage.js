import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../api/api";
import Page from "../../components/Page/Page";
import { useAuth } from "../../contexts/auth.context";
import { addItem } from "../../store/reducers/cart.reducer";
import utils from "../../utils/utils";
import * as S from "./ProductDetailPage.style";

function ProductDetailsPage() {
  const { productId } = useParams();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [product, setProduct] = useState();
  const [option, setOption] = useState();
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    api.products.getProduct(productId).then((data) => setProduct(data));
  }, [productId]);

  const handleChangeSelect = (event) => {
    setOption(event.target.value);
  };

  const handleClickRemove = () => {
    if (count === 1) {
      return;
    }
    setCount((prevCount) => prevCount - 1);
  };

  const handleClickAdd = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleClickCart = () => {
    if (!isLoggedIn) {
      navigate("/sign-in");
      return;
    }
    if (count < 1) {
      alert("최소 주문 수량은 1개 입니다.");
      return;
    }
    if (option === undefined) {
      alert("옵션을 선택해 주세요.");
      return;
    }
    const action = addItem({
      id: product.id,
      option: option,
      count: count,
    });
    dispatch(action);
    alert("장바구니에 담았습니다.");
  };
  if (!product || product === undefined) {
    return null;
  }
  return (
    <Page width="80%">
      <S.Wrapper>
        <S.CategoryList>
          <li>
            <Link to="/">HOME</Link>
          </li>
          {product.catnm.map((category) => (
            <li key={category}>&gt;{category}</li>
          ))}
        </S.CategoryList>
        <hr />
        <S.ProductContainer>
          <S.ProductImg src={product.img_i} alt={product.goodsnm} />
          <S.ProductInfoContainer>
            <S.BrandTitle>{product.brandnm}</S.BrandTitle>
            <S.OriginCodeList>
              <li>{product.origin}</li>
              <li>|</li>
              <li>발랑코드 [{productId}]</li>
            </S.OriginCodeList>
            <hr />
            <S.PriceContainer>
              <p>상품 금액</p>
              <p>
                <del>
                  {utils.products.convertPriceToKRW(product.goods_consumer)}원
                </del>
              </p>
              <p>판매가</p>
              <p>
                {utils.products.convertPriceToKRW(product.standard_price)}원
              </p>
              <p>최대 혜택가</p>
              <p>
                <span>{utils.products.convertPriceToKRW(product.price)}원</span>
                &nbsp;{product.sale_percent}%
              </p>
              <p>적립금</p>
              <p>
                최대{" "}
                {utils.products.convertPriceToKRW(
                  Math.floor(product.price / 10000) * 100
                )}
                원
              </p>
              <p>무이자할부</p>
              <p>최대 12개월</p>
              <p>배송비</p>
              <p>무료</p>
              <p>도착예정</p>
              <p>{utils.products.convertDeliveryDate()} 도착 예정</p>
            </S.PriceContainer>
            <hr />
            <S.OptionContainer>
              <S.OptionTitle>옵션 선택</S.OptionTitle>
              <S.OptionChoiceContainer>
                <S.Select onChange={handleChangeSelect} value={option}>
                  <option value="none">옵션 (옵션명)</option>
                  {product.option.map((choice) => (
                    <option key={choice.size} value={choice.size}>
                      {choice.size}
                    </option>
                  ))}
                </S.Select>
                <S.CountContainer>
                  <S.CountBtn onClick={handleClickRemove}>-</S.CountBtn>
                  <S.Input
                    value={count}
                    onChange={(event) => setCount(event.target.value)}
                  />
                  <S.CountBtn onClick={handleClickAdd}>+</S.CountBtn>
                </S.CountContainer>
              </S.OptionChoiceContainer>
              <S.BuyBtn disabled>BUY NOW</S.BuyBtn>
              <S.BagBtn onClick={handleClickCart}>쇼핑백</S.BagBtn>
            </S.OptionContainer>
          </S.ProductInfoContainer>
        </S.ProductContainer>
      </S.Wrapper>
    </Page>
  );
}

export default ProductDetailsPage;

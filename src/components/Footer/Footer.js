import React from "react";
import * as S from "./Footer.style";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <S.Wrapper>
      <S.FooterWrapper>
        <S.CompanyInfoContainer>
          <S.CompanyInfoList>
            <S.CompanyInfoItem>회사소개</S.CompanyInfoItem>
            <S.CompanyInfoItem>|</S.CompanyInfoItem>
            <S.CompanyInfoItem>제휴문의</S.CompanyInfoItem>
            <S.CompanyInfoItem>|</S.CompanyInfoItem>
            <S.CompanyInfoItem>고객센터</S.CompanyInfoItem>
            <S.CompanyInfoItem>|</S.CompanyInfoItem>
            <S.CompanyInfoItem>이용약관</S.CompanyInfoItem>
            <S.CompanyInfoItem>|</S.CompanyInfoItem>
            <S.CompanyInfoItem>개인정보처리방침</S.CompanyInfoItem>
          </S.CompanyInfoList>
          <S.CompanyInfoList>
            <S.CompanyInfoItem2>주식회사 발란</S.CompanyInfoItem2>
            <S.CompanyInfoItem2>|</S.CompanyInfoItem2>
            <S.CompanyInfoItem2>대표: 최형록</S.CompanyInfoItem2>
            <S.CompanyInfoItem2>|</S.CompanyInfoItem2>
            <S.CompanyInfoItem2>
              사업자 등록번호 815-88-00093
            </S.CompanyInfoItem2>
            <S.CompanyInfoItem2>|</S.CompanyInfoItem2>
            <S.CompanyInfoItem2>
              통신판매업신고 2015-서울강남-01677
            </S.CompanyInfoItem2>
            <S.CompanyInfoItem2>|</S.CompanyInfoItem2>
            <S.CompanyInfoItem2>채무지급보증안내</S.CompanyInfoItem2>
          </S.CompanyInfoList>
          <S.CompanyAddress>
            서울특별시 강남구 역삼동 테헤란로 217, 10층
          </S.CompanyAddress>
        </S.CompanyInfoContainer>
        <div>
          <S.CustomerServiceList>
            <Link to="my-page">
              <S.CustomerServiceItem>마이페이지</S.CustomerServiceItem>
            </Link>
            <S.CustomerServiceItem>고객서비스</S.CustomerServiceItem>
          </S.CustomerServiceList>
        </div>
      </S.FooterWrapper>
    </S.Wrapper>
  );
}

export default Footer;

import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const ImgWrapper = styled.div`
  object-fit: cover;
  img {
    width: 100%;
  }
`;

export const InfoContainer = styled.div`
  margin: 1vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  row-gap: 1vh;
`;

export const BrandName = styled.h5`
  font-size: 1vw;
`;

export const ProductInfo = styled.span`
  font-size: 0.8vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: gray;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1vw;
  span {
    font-size: 0.9vw;
  }
  span:nth-child(2) {
    color: brown;
    font-weight: 900;
  }
`;

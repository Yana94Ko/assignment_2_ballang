import styled from "styled-components";

export const Wrapper = styled.div``;

export const CategoryList = styled.ul`
  display: flex;
`;

export const ProductContainer = styled.section`
  display: flex;
  column-gap: 2vw;
`;

export const ProductImg = styled.img`
  width: 40%;
`;
export const ProductInfoContainer = styled.div`
  width: 45%;
`;

export const BrandTitle = styled.h1`
  font-size: 2vw;
`;

export const OriginCodeList = styled.ul`
  display: flex;
  justify-content: space-between;
  > li {
    font-size: 1vw;
  }
`;

export const PriceContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  row-gap: 10px;
  p {
    font-size: 1vw;
  }
  p:nth-child(2n-1) {
    font-weight: 600;
  }
`;

export const OptionContainer = styled.div``;

export const OptionTitle = styled.h2`
  font-size: 1.5vw;
`;
export const OptionChoiceContainer = styled.div`
  display: flex;
  column-gap: 0.5vw;
  align-items: center;
`;

export const Select = styled.select`
  height: 52px;
  border: 1px solid black;
  border-radius: 8px;
  padding: 0 16px 0 0;
  position: relative;
  option {
    position: absolute;
  }
`;
export const CountContainer = styled.div`
  padding: 10px;
`;
export const CountBtn = styled.button`
  height: 52px;
  width: 52px;
  border-radius: 8px;
  border: 1px solid black;
  background-color: black;
  color: white;
  font-weight: 700;
`;
export const Input = styled.input`
  height: 52px;
  border: 1px solid black;
  border-radius: 8px;
  padding: 0 16px;
`;
export const BuyBtn = styled.button`
  height: 52px;
  border-radius: 8px;
  border: 1px solid black;
  background-color: black;
  color: white;
  font-weight: 700;
  width: 40%;
`;
export const BagBtn = styled.button`
  height: 52px;
  border-radius: 8px;
  border: 1px solid black;
  background-color: gray;
  color: white;
  font-weight: 700;
  width: 40%;
`;

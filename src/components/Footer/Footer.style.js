import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: black;
  color: white;
`;
export const FooterWrapper = styled.div`
  margin: 2vh auto;
  padding-top: 2vh;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const CompanyInfoContainer = styled.div`
  height: 100px;
`;
export const CompanyInfoList = styled.ul`
  display: flex;
  column-gap: 1vw;
`;

export const CompanyInfoItem = styled.li`
  color: white;
  font-size: 1vw;
  line-height: 3vw;
`;

export const CompanyInfoItem2 = styled.li`
  color: gray;
  font-size: 1vw;
  line-height: 3vw;
`;
export const CompanyAddress = styled.span`
  color: gray;
  font-size: 1vw;
`;

export const CustomerServiceList = styled.ul`
  display: flex;
  column-gap: 2vw;
`;

export const CustomerServiceItem = styled.li`
  color: white;
  font-size: 1vw;
  line-height: 3vw;
`;

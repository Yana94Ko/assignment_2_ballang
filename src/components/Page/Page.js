import React from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  width: ${(props) => (props.fullWidth ? "100%" : "60%")};
  margin: 0 auto;
`;

function Page({ fullWidth, children }) {
  return <StyledMain fullWidth={fullWidth}>{children}</StyledMain>;
}

export default Page;

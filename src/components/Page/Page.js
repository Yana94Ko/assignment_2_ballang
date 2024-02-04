import React from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  width: ${(props) => `${props.width}`};
  margin: 0 auto;
  height: 100%;
`;

function Page({ width, children }) {
  return <StyledMain width={width}>{children}</StyledMain>;
}

export default Page;

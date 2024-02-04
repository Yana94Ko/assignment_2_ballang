import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
`;

export const ListItem = styled.li`
  overflow: hidden;
`;

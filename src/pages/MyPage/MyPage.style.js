import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 70vh;
`;

export const Title = styled.h3`
  font-size: 3vw;
  text-align: center;
  padding-top: 15vh;
`;

export const From = styled.form`
  width: 60%;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  row-gap: 12px;
`;

export const Input = styled.input`
  height: 52px;
  border: 1px solid black;
  border-radius: 8px;
  padding: 0 16px;
`;

export const Btn = styled.button`
  height: 52px;
  border-radius: 8px;
  border: 1px solid black;
  background-color: black;
  color: white;
  font-weight: 700;
`;

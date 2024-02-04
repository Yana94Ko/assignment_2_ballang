import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 70vh;
`;

export const From = styled.form`
  width: 60%;
  margin: 0 auto;
  padding-top: 15vh;
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

export const LoginBtn = styled.button`
  height: 52px;
  border-radius: 8px;
  border: 1px solid black;
  background-color: slategrey;
  color: white;
  font-weight: 700;
`;

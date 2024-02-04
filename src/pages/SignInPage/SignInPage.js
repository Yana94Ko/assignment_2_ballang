import React, { useState } from "react";
import { useAuth } from "../../contexts/auth.context";
import * as S from "./SignIn.style";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProfile } from "../../store/reducers/profile.reducer";

function SignInPage() {
  const { signIn } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("udemy");
  const [password, setPassword] = useState("udemy");

  const handleClickSignIn = () => {
    if (!username || !password)
      return alert("아이디 또는 비밀번호를 입력해 주세요");

    if (username === "udemy" && password === "udemy") {
      signIn();
      dispatch(setProfile(username));
      navigate("/");
    } else {
      return alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <S.Wrapper>
      <S.From onSubmit={(e) => e.preventDefault()}>
        <S.Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="아이디를 입력해 주세요"
        />

        <S.Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력해 주세요"
        />

        <S.LoginBtn onClick={handleClickSignIn}>로그인하기</S.LoginBtn>
      </S.From>
    </S.Wrapper>
  );
}

export default SignInPage;

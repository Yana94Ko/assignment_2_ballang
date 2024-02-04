import React, { useEffect, useState } from "react";
import Page from "../../components/Page";
import { useDispatch, useSelector } from "react-redux";
import { updateNickname } from "../../store/reducers/profile.reducer";
import * as S from "./MyPage.style";
import { useAuth } from "../../contexts/auth.context";
import { useNavigate } from "react-router-dom";
function MyPage() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const nickname = useSelector((state) => state.profile.nickname);

  const [nicknameInput, setNicknameInput] = useState(nickname);

  const handleClickUpdateNickname = () => {
    if (!nicknameInput || nicknameInput === "") {
      alert("변경할 닉네임을 입력하세요");
      setNicknameInput(nickname);
      return;
    }
    const action = updateNickname(nicknameInput);
    dispatch(action);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  });

  return (
    <Page>
      <S.Wrapper>
        <S.Title>닉네임 수정</S.Title>
        <S.From onSubmit={(e) => e.preventDefault()}>
          <S.Input
            value={nicknameInput}
            onChange={(e) => setNicknameInput(e.target.value)}
            type="text"
            placeholder="닉네임을 입력해 주세요"
          />
          <S.Btn onClick={handleClickUpdateNickname}>닉네임 바꾸기</S.Btn>
        </S.From>
      </S.Wrapper>
    </Page>
  );
}

export default MyPage;

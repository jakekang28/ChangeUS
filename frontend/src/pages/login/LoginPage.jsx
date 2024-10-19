import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function LoginPage() {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // 새로고침 방지

    if (!nickname || !password) {
      setError("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    if (nickname === "admin" && password === "password123") {
      sessionStorage.setItem("user", "nickname01");
      alert("로그인 성공!");
      navigate("/main");
    } else {
      // 신규 회원일 때
      navigate("/character-selection");
    }
  };

  return (
    <Container>
      <FormWrapper onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div>{error}</div>}
        <SubmitButton type="submit">로그인</SubmitButton>
      </FormWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const SubmitButton = styled.button`
  background-color: var(--point-brand);
  padding: 10px 20px;
  border: none;
  color: white;
  cursor: pointer;
`;

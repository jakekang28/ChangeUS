import React, { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import styled from "styled-components";
import backgroundImage from "../../assets/images/background/main-background_01.png";
import SeedContainer from "./components/SeedContainer";
import Header from "../../components/Header";

export default function MainPage() {
  const [seedSort, setSeedSort] = useState("my"); // my, all
  const [ws, setWs] = useState(null); // WebSocket 인스턴스 관리

  useEffect(() => {
    console.log("테스트");
    const socket = new WebSocket("ws://localhost:4001"); // 서버에 연결
    setWs(socket); // WebSocket 인스턴스 저장

    // WebSocket 이벤트 핸들러 설정
    socket.addEventListener("open", () => {
      console.log("Connected to server");
    });

    socket.addEventListener("message", (message) => {
      console.log("Received from server:", message.data);
    });

    socket.addEventListener("close", () => {
      console.log("Disconnected from server");
    });

    // 컴포넌트 언마운트 시 WebSocket 연결 해제
    return () => {
      socket.close();
    };
  }, []);

  return (
    <Container $backgroundImage={backgroundImage}>
      <Header isMain={true}>
        <ToggleContainer>
          <ToggleButton
            $isSelected={seedSort === "all"}
            onClick={() => setSeedSort("all")}
          >
            전체
          </ToggleButton>
          <ToggleButton
            $isSelected={seedSort === "my"}
            onClick={() => setSeedSort("my")}
          >
            마이
          </ToggleButton>
        </ToggleContainer>
      </Header>
      <ContentContainer>
        <SeedContainer seedCnt={293} />
        <CharacterImage
          src={require("../../assets/images/character_female.png")}
        />
      </ContentContainer>
      <ButtonsContainer>
        <NavButton selection="quiz">퀴즈</NavButton>
        <NavButton selection="challenge">챌린지</NavButton>
      </ButtonsContainer>
    </Container>
  );
}

const Container = styled.div`
  background-image: ${({ $backgroundImage }) => `url(${$backgroundImage})`};
  background-size: cover;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 31px 24px 55px;
`;

const ButtonsContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

const ToggleContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcfcfc33;
  border-radius: 50px;
  width: 107px;
  height: 34px;
`;
const ToggleButton = styled.li`
  cursor: pointer;
  background-color: ${({ $isSelected }) =>
    $isSelected ? "white" : "transparent"};
  border-radius: 50px;
  width: 47px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

const NavButton = styled.button`
  border-radius: 30px;
  background-color: ${({ selection }) =>
    selection === "quiz" ? "var(--point-brand)" : "var(--main-brand)"};
  width: 110px;
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px
    ${({ selection }) => (selection === "quiz" ? "#CE8700" : "#009c85")};
  color: var(--white);
  font-size: 20px;
  font-family: "NanumSquareRound";
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CharacterImage = styled.img`
  width: 162px;
  height: 262px;
  margin: auto;
`;

import React from "react";
import styled from "styled-components";
import ScreenContainer from "../components/ScreenContainer";
import Header from "../components/Header";
import QuizItem from "./components/QuizItem";

export default function QuizDashboardPage() {
  return (
    <ScreenContainer
      style={{
        background: "linear-gradient(180deg, #8be99f 0%, #00bda7 48.4%)",
      }}
    >
      <Header />
      <DiscriptionContainer>
        <DiscriptionTitle>재미있는 퀴즈를 풀어볼까요?</DiscriptionTitle>
        <TipBox>Tip: 퀴즈를 풀면 집에 갈 수 있어요!</TipBox>
      </DiscriptionContainer>

      <QuizList>
        <QuizItem isAble={true} title={"재미있는 퀴즈를 풀어볼까요?"} />
        <QuizItem isAble={false} title={"재미있는 퀴즈를 풀어볼까요?"} />
      </QuizList>
    </ScreenContainer>
  );
}

const DiscriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  margin: 57px 0 37px;
`;
const DiscriptionTitle = styled.h1`
  font-weight: 800;
  color: white;
`;
const TipBox = styled.div`
  background-color: #fcfcfc33;
  border-radius: 8px;
  width: 100%;
  padding: 11px 16px;
  display: flex;
  color: var(--font-01);
  font-size: 14px;
  font-weight: 800;
`;
const QuizList = styled.div`
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

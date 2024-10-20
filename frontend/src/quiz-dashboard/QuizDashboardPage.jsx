import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ScreenContainer from "../components/ScreenContainer";
import Header from "../components/Header";
import QuizItem from "./components/QuizItem";
import { instance } from "../apis/utils";

export default function QuizDashboardPage() {
  const [items, setItems] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await instance.get(`/api/quiz/data`);
      setItems(data);
    };
    getData();
  }, []);

  return (
    <ScreenContainer
      style={{
        background: "linear-gradient(180deg, #8be99f 0%, #00bda7 48.4%)",
      }}
    >
      <Header />
      <DiscriptionContainer>
        <DiscriptionTitle>재미있는 퀴즈를 풀어볼까요?</DiscriptionTitle>
        <TipBox>올바른 기후 상식도 배우고, 과학 지식도 익혀요!</TipBox>
      </DiscriptionContainer>

      <QuizList>
        {items &&
          items.map((item, i) => (
            <QuizItem
              isAble={true}
              title={"재미있는 퀴즈를 풀어볼까요?"}
              idx={item.idx}
            />
          ))}
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

import React from "react";
import styled from "styled-components";

export default function SeedContainer({ seedCnt }) {
  return (
    <Container>
      <TopContainer>
        <TitleWrapper>내가 모은 씨앗</TitleWrapper>
        <CountContainer>
          <CntNumber>{seedCnt}</CntNumber>
          <span style={{ color: "white", fontWeight: "800" }}>개</span>
        </CountContainer>
      </TopContainer>

      <BottomContainer>
        <TodoTitle>내가 모은 씨앗으로 할 수 있는 일</TodoTitle>
        <TodoItemsWrapper>
          <TodoItem>🌳 나무 800그루 심기</TodoItem>
          <TodoItem>🍃 발전소 3시간 멈추기</TodoItem>
        </TodoItemsWrapper>
      </BottomContainer>
    </Container>
  );
}
const ColumnFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container = styled(ColumnFlexContainer)`
  gap: 32px;
`;
const TopContainer = styled(ColumnFlexContainer)`
  gap: 14px;
`;
const BottomContainer = styled(ColumnFlexContainer)`
  gap: 10px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 102px;
  height: 26px;
  background-color: var(--main-brand);
  font-size: 12px;
  font-weight: 800;
  border-radius: 50px;
  color: white;
`;

const CountContainer = styled.div`
  background-color: #fcfcfc33;
  width: 100%;
  height: 72px;
  border-radius: 8px;
  padding: 17px;
  display: flex;
  align-items: end;
  gap: 7px;
`;

const CntNumber = styled.span`
  font-size: 40px;
  font-weight: 800;
  color: white;
`;

const TodoTitle = styled.h3`
  color: var(--font-01);
  font-size: 14px;
  font-weight: 800;
`;
const TodoItemsWrapper = styled.ul`
  display: flex;
  gap: 4px;
  align-items: center;
`;
const TodoItem = styled.li`
  display: flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 30px;
  font-size: 12px;
  background-color: white;
  color: var(--font-02);
`;

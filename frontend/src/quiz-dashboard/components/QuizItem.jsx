import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { instance } from "../../apis/utils";
import { useRecoilState } from "recoil";
import { quizDataState } from "../../recoil/quiz";

export default function QuizItem({ isAble, title, idx }) {
  const navigate = useNavigate();

  const [quizData, setQuizData] = useRecoilState(quizDataState);

  const handleClick = async () => {
    const data = await instance.get(`/api/quiz/data/${idx}`);

    setQuizData(data);
    navigate("/quiz-solve/1", { state: { data } });
  };
  return (
    <Container isAble={isAble} onClick={handleClick}>
      <div>
        <IsAbleTagWrapper>
          {isAble ? "참여 가능한 퀴즈" : "종료된 퀴즈"}
        </IsAbleTagWrapper>
      </div>
      <Title isAble={isAble}>{title}</Title>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  background-color: #fcfcfc;
  background-color: ${({ isAble }) => (isAble ? "#fcfcfc" : "#14665C99")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;
const IsAbleTagWrapper = styled.div`
  background-color: ${({ isAble }) => (isAble ? "var(--blue)" : "var(--red)")};
  color: white;
  font-size: 12px;
  font-weight: 700;
  display: inline-block;
  padding: 4px 12px;
  border-radius: 4px;
`;
const Title = styled.span`
  color: ${({ isAble }) => (isAble ? "var(--font-01)" : "#D0D0D0")};
  font-weight: 800;
`;

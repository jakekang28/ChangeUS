import React, { useEffect } from "react";
import styled from "styled-components";
import QuestionScreen from "./components/QuestionScreen";
import AnswerScreen from "./components/AnswerScreen";
import { getQuizDetail } from "../apis/api/quiz";
import { useParams } from "react-router-dom";
import CommentScreen from "./components/CommentScreen";

// {idx, quiz_title, quiz_summary, answer, comments, comments_summary}

export default function QuizSolvePage() {
  // const { idx } = useParmas();
  useEffect(() => {
    const getData = async () => {
      const data = await getQuizDetail();
    };
  });
  return (
    <Container>
      {/* <QuestionScreen /> */}
      {/* <AnswerScreen /> */}
      <CommentScreen />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100%;
`;

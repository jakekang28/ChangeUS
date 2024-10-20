import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import { useRecoilState } from "recoil";
import { quizDataState } from "../../recoil/quiz";

export default function CommentScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const [stepNum, setStepNum] = useState(0);
  const [data, setData] = useState();
  const [comment, setComment] = useState("");

  const [quizData, setQuizData] = useRecoilState(quizDataState);

  const handleClick = () => {
    let pathNum = Number(location.pathname[location.pathname.length - 1]);
    setStepNum(pathNum);
    setData(location.state.data);
    if (pathNum === 6) {
      setQuizData(null);
      navigate("/quiz-dashboard");
    } else {
      navigate(`/quiz-solve/${pathNum + 1}`);
    }
  };

  return (
    <Container>
      <Header />
      <Comment>{stepNum === 6 ? quizData.answer1 : quizData.answer2}</Comment>
      <NextButton onClick={handleClick}>좋아, 이해했어!</NextButton>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px 24px;
`;

const Comment = styled.div`
  margin-top: 103px;
  color: #403e47;
  font-family: NanumSquareRoundOTF;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  letter-spacing: -0.42px;
`;
const NextButton = styled.button`
  margin-top: auto;
  padding: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 12px;
  background: #04d7b7;
  box-shadow: 0px 4px 0px 0px #009c85;
  color: #403e47;
  text-align: center;
  font-family: NanumSquareRoundOTF;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: 148.523%; /* 23.764px */
  letter-spacing: -0.48px;
`;

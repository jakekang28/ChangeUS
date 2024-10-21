import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { quizDataState } from "../../recoil/quiz";

export default function AnswerScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const [stepNum, setStepNum] = useState(0);
  const [data, setData] = useState();
  const [summary, setSummary] = useState("");
  const [answer, setAnswer] = useState(); // 실제 답
  const [title, setTitle] = useState("");
  const [isCorrect, setIsCorrect] = useState(true);

  const quizData = useRecoilValue(quizDataState);

  const handleClick = () => {
    navigate(`/quiz-solve/${stepNum + 1}`);
  };
  
  useEffect(() => {
    console.log(location.state.isCorrect)
    setIsCorrect(location.state.isCorrect)
    let pathNum = Number(location.pathname[location.pathname.length - 1]);
    setStepNum(pathNum);
    console.log(quizData.data[0]);
    let correctNum;
    // if (pathNum === 2) {
    //   correctNum = quizData.answer1;
    // } else {
    //   correctNum = quizData.answer2;
    // }
    // correctNum === 1 ? setIsCorrect(true) : setIsCorrect(false);
  }, [location.pathname]);

  return (
    <Container
      style={{
        background: "linear-gradient(180deg, #8BE99F 0%, #00BDA7 48.4%)",
      }}
    >
      <TopImage />
      <BottomContainer>
        <MessageText>
          {isCorrect
            ? "축하해, 정답이야! 보상으로 0포인트를 얻었어!"
            : "아쉽지만 틀렸어ㅠㅠ 다음 기회에 도전해보자!"}
        </MessageText>
        <NextButton onClick={handleClick}>
          왜 {isCorrect ? "정답" : "오답"}인지 알아볼까?
        </NextButton>
      </BottomContainer>
      <MiddleContainer>
        <MiddleTopText>정답은?</MiddleTopText>
        <Answer>{quizData.data[0].answer1=== 1 ? "o" : "x"}</Answer>
      </MiddleContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;
const TopImage = styled.img`
  width: 100%;
  height: 217px;
  flex: 0 0 auto;
`;
const BottomContainer = styled.div`
  width: 100%;
  flex: 1;
  padding: 0 24px;
  position: relative;
  background-color: white;
`;
const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 28px 25px;
  width: 86%;
  height: 183px;
  background: linear-gradient(180deg, #14665c 0%, #01433b 100%);

  border-radius: 8px;
  border: 8px solid #725b51;
  position: absolute;
  left: 24px;
  right: 24px;
  top: 117px;
  gap: 12px;
`;
const MiddleTopText = styled.span`
  color: white;
  font-size: 20px;
  font-weight: 800;
  text-align: center;
`;
const Answer = styled.div`
  font-family: "Maplestory";
  font-weight: 700;
  font-size: 80px;
  color: white;
  text-align: center;
`;
const MessageText = styled.div`
  font-size: 24px;
  font-weight: 800;
  line-height: 36px;
  margin-top: 205px;
  text-align: center;
`;
const NextButton = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 50px;
  width: calc(100% - 48px);
  border-radius: 12px;
  background: #04d7b7;
  box-shadow: 0px 4px 0px 0px #009c85;
  padding: 15px;
  text-align: center;
  font-weight: 800;
  color: #403e47;
`;
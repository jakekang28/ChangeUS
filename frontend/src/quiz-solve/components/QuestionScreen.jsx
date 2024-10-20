import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { quizDataState } from "../../recoil/quiz";

// idx, quiz_title, quiz_summary1, answer1, comments_summary1, quiz_summary2, answer2, comments_summary2

export default function QuestionScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const [stepNum, setStepNum] = useState(0);
  const [data, setData] = useState({});
  const [answer, setAnswer] = useState(0);

  const quizData = useRecoilValue(quizDataState);

  const handleAnswer = (ans) => {
    // 클릭한 답
    navigate(`/quiz-solve/${stepNum + 1}`, {
      state: { data, isCorrect: ans === answer },
    });
  };

  useEffect(() => {
    let pathNum = Number(location.pathname[location.pathname.length - 1]);
    setStepNum(pathNum);
  }, [location.pathname]);

  return (
    <Container>
      <QuestionImage src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" />
      <BottomContainer>
        <CotentContainer>
          <IconWrapper
            src={require("../../assets/images/icons/icon-question.png")}
          />
          <ContentText>
            {/* {stepNum === 1
              ? "페트병을 분리수거 할 때 투명한 페트병은 색이 있는 페트병과 구분해서 버려야 한다."
              : "올바른 나무 심기로 지구를 지켜요!"} */}

            {stepNum === 1 ? quizData.quiz_summary1 : quizData.quiz_summary2}
          </ContentText>
        </CotentContainer>
        <AnswersContainer>
          <AnswerButton>
            <AnswerButtonImage
              onClick={() => handleAnswer(1)}
              src={require("../../assets/images/icon-answer-btn_O.png")}
            />
          </AnswerButton>
          <AnswerButton>
            <AnswerButtonImage
              onClick={() => handleAnswer(0)}
              src={require("../../assets/images/icon-answer-btn_X.png")}
            />
          </AnswerButton>
        </AnswersContainer>
      </BottomContainer>

      {/* 칠판 부분 */}
      <MiddleContainer>
        <div>
          <MiddleTitleWrapper>환경</MiddleTitleWrapper>
        </div>
        <QuizTitle>
          오늘부터 분리수거할 때 {"\n"} 이것 하나만 기억하자!
        </QuizTitle>
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
const QuestionImage = styled.img`
  width: 100%;
  height: 217px;
  flex: 0 0 auto;
`;
const BottomContainer = styled.div`
  width: 100%;
  flex: 1;
  padding: 0 24px;
  position: relative;
`;
const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 28px 25px;
  width: 86%;
  /* height: 147px; */
  background: linear-gradient(180deg, #14665c 0%, #01433b 100%);

  border-radius: 8px;
  border: 8px solid #725b51;
  position: absolute;
  left: 24px;
  right: 24px;
  top: 117px;
  gap: 12px;
`;
const MiddleTitleWrapper = styled.div`
  display: inline-block;
  padding: 4px 12px;
  color: white;
  font-weight: 700;
  font-size: 12px;
  background: #002e29;
  border-radius: 4px;
`;
const QuizTitle = styled.span`
  color: white;
  font-size: 20px;
  font-weight: 800;
  line-height: 27px;
`;

const CotentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
  justify-content: center;
  margin-top: 127px;
  /* margin: 127px; */
  width: 100%;
`;
const IconWrapper = styled.img`
  width: 50px;
  height: 58px;
  margin: auto;
`;
const ContentText = styled.span`
  text-align: center;
  font-weight: 700;
  line-height: 24px;
  width: 100%;
`;
const AnswersContainer = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  position: absolute;
  bottom: 50px;
  width: calc(100% - 48px);
`;
const AnswerButton = styled.div``;
const AnswerButtonImage = styled.img`
  width: 146px;
  height: 68px;
`;

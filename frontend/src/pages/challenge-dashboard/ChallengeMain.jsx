import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";

export default function ChallengeMain() {
  const navigate = useNavigate();

  const handleClick = () => {
    // challenge post 페이지로 넘어가기
    navigate("/challenge-post");
  };

  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      {/* 여긴 사실 사진... */}
      <TopImage src="" />
      <BottomContainer>
        <MessageText>
          우리가 타는 자동차는 연료를 태운 뒤 메탄이나 이산화탄소, 아산화질소와
          같은 여러 온실 기체를 매연으로 내뿜어. 이런 온실 기체들은 대기 중에
          오래 머무르며, 지구의 평균 기온을 계속해서 높여. 물론 버스와 같은
          대중교통도 연료를 태우니까 온실 기체를 만들기는 해. 하지만 한 번에
          훨씬 더 많은 승객을 싣고 달리니까, 한 사람 한 사람을 나르기 위해
          배출하는 온실 기체는 훨씬 더 줄어들게 돼. 왜 대중교통을 타는 게
          기후위기에 대처하는 데 도움이 되는지 알겠지?
        </MessageText>
        <NextButton onClick={handleClick}>이제 올려볼까?</NextButton>
      </BottomContainer>
      <MiddleContainer>
        <div>
          <MiddleTitleWrapper>환경</MiddleTitleWrapper>
        </div>
        <QuizTitle>자가용 대신 대중교통을 이용해보자!</QuizTitle>
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
const HeaderWrapper = styled.div`
  width: 100%;
  padding: 30px 24px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;
const TopImage = styled.div`
  background-color: var(--main-brand);
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
const MessageText = styled.div`
  color: #403e47;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: -0.48px;
  margin-top: 122px;
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

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BackgroundContainer from "../../components/BackgroundContainer";
import Header from "../../components/Header";
import { instance } from "../../apis/utils";
import ScreenContainer from "../../components/ScreenContainer";
import { useNavigate } from "react-router-dom";
// {idx, title, summary, per_score}의 배열

export default function ChallengeDashboardPage() {
  const [items, setItems] = useState();
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/challenges-main')
  };
  return (
    <>
    <ScreenContainer
      style={{
        background: "linear-gradient(180deg, #8be99f 0%, #00bda7 48.4%)",
      }}
    >
      <Header />
      <DiscriptionContainer>
        <DiscriptionTitle>챌린지를 참여하기</DiscriptionTitle>
        <TipBox>챌린지에 참여하여 기후행동을 실천해요!</TipBox>
      </DiscriptionContainer>
      <List>
        {/* ItemContainer 로 데이터 map 시키면서 하면됨 */}
        {/* -- isAble : 참여 가능하면 true, 종료되었으면 false --  */}
        <ItemContainer isAble={true} onClick={handleClick}>
          <div>
            <IsAbleTagWrapper isAble={true}>
              "참여 가능한 챌린지"
              {/* {isAble ? "참여 가능한 퀴즈" : "종료된 퀴즈"} */}
            </IsAbleTagWrapper>
          </div>
          <Title isAble={true}>자가용 대신 대중교통을 이용해보자!</Title>
        </ItemContainer>
        <ItemContainer isAble={true} >
          <div>
            <IsAbleTagWrapper isAble={true}>
              "참여 가능한 챌린지"
              {/* {isAble ? "참여 가능한 퀴즈" : "종료된 퀴즈"} */}
            </IsAbleTagWrapper>
          </div>
          <Title isAble={true}>줄인 고기 반찬 한 그릇, 줄인 온실 기체 배출</Title>
        </ItemContainer>
        <ItemContainer isAble={false} >
          <div>
            <IsAbleTagWrapper isAble={false}>
              "종료된 챌린지"
              {/* {isAble ? "참여 가능한 퀴즈" : "종료된 퀴즈"} */}
            </IsAbleTagWrapper>
          </div>
          <Title isAble={false}>지구를 위해 같이 1시간만 에어컨을 꺼볼까?</Title>
        </ItemContainer>
        <ItemContainer isAble={false} >
          <div>
            <IsAbleTagWrapper isAble={false}>
              "종료된 챌린지"
              {/* {isAble ? "참여 가능한 퀴즈" : "종료된 퀴즈"} */}
            </IsAbleTagWrapper>
          </div>
          <Title isAble={false}>오늘은 수입 음식 대신 로컬푸드를 먹어보자!</Title>
        </ItemContainer>
        
        {/*  */}
      </List>
      </ScreenContainer>
      </>
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
const List = styled.div`
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ItemContainer = styled.div`
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
  color: ${({ isAble }) => (isAble ? "var(—font-01)" : "#D0D0D0")};
  font-weight: 800;
`;

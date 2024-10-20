import React from "react";
import ScreenContainer from "../../components/ScreenContainer";
import Header from "../../components/Header";
import styled from "styled-components";

export default function ChallengePostPage() {
  return (
    <ScreenContainer>
      <Header />
      <form>
        <Wrapper>
          <Text>챌린지에 참여한 모습을 사진으로 남겨줘!</Text>
          <button>
            <Img
              src={require("../../assets/images/icons/icon-add-image.png")}
            />
          </button>
        </Wrapper>
        <Wrapper>
          <Text>어떤 사진인지 간단히 설명해줘!</Text>
          <InputContainer />
        </Wrapper>
        <Button>나도 참여할래!</Button>
      </form>
    </ScreenContainer>
  );
}

const Wrapper = styled.div`
  margin-top: 38px;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;
const Text = styled.span`
  color: #403e47;
  font-family: NanumSquareRoundOTF;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: 150%; /* 24px */
  letter-spacing: -0.48px;
`;
const Img = styled.img`
  width: 100%;
`;

const InputContainer = styled.input`
  border-radius: 10px;
  border: 2px solid #e0e0e0;
  height: 215px;
`;

const Button = styled.div`
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

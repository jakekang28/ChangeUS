import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";

export default function CommentScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const [stepNum, setStepNum] = useState(0);
  const [data, setData] = useState();
  const [comment, setComment] = useState("");

  const handleClick = () => {
    let pathNum = Number(location.pathname[location.pathname.length - 1]);
    setStepNum(pathNum);
    setData(location.state.data);
    if (pathNum === 6) {
      navigate("/quiz-dashboard");
    } else {
      navigate(`/quiz-solve/${pathNum + 1}`, { state: { data } });
    }
  };

  return (
    <Container>
      <Header />
      <Comment>
        {stepNum === 6
          ? `
        우리는 산소와 영양분을 얻기 위해 코로 숨을 쉬고, 입으로 물과 밥을 먹어. 그런데 코도 입도 없는 식물은 어떻게 살아가는 걸까? 

식물은 사람이 할 수 없는 광합성이라는 독특한 화학 반응으로 영양분을 얻어. 광합성이 뭘까? ‘광’은 빛을 뜻하고, ‘합성'은 새로운 물질을 만들어낸다는 것을 뜻해. 그러니까 빛의 힘을 이용해 식물에게 필요한 영양분을 만들어낸다는 말이야. 식물에게 주렁주렁 달려 있는 수많은 잎 속 엽록체라는 기관이 바로 광합성이 일어나는 장소야.

식물의 엽록체는 뿌리에서 빨아들인 물과, 대기 중에서 흡수한 이산화탄소를 가지고 있어. 그러다 잎이 햇빛을 받으면 물과 이산화탄소가 포도당과 산소로 바뀌게 되는데, 이게 바로 광합성이야. 그 덕분에 식물은 땅 속에 있던 물로부터 생명을 유지하기 위한 영양분을 얻을 수 있어. 그리고 대기 중에 있는 이산화탄소는 산소로 바뀌어, 사람을 비롯한 동물들이 숨을 쉬도록 해주지. 

물과 이산화탄소만을 이용해 스스로 양분도 얻고 동물이 살아갈 산소도 만들어준다니, 식물은 생각할수록 정말 놀라워!
        `
          : `        우리가 쓰는 물건들을 떠올려 봐. 이것들을 모두 한 번 쓰고 바로 버리면
        어떻게 될까? 새로운 물건을 만들기 위해 더 많은 자원을 캐야 할거야.
        그리고 버려진 쓰레기들은 쌓여서 땅과 바다, 공기를 오염시키겠지.
        재활용이란 버린 물건을 녹이고 자른 뒤 다시 모양을 만들어, 다시 쓸 수
        있도록 하는 거야. 쓰레기도 줄일 수 있고, 자원도 아낄 수 있고. 정말 좋지?
        이렇게 재활용을 하려면 먼저 쓰레기를 버릴 때 종이, 플라스틱, 유리와 같이
        재료에 따라 나누어서 버려야 해. 이것을 분리수거라고 불러. 그런데
        분리수거를 할 때, 투명한 페트병을 색깔이 있는 페트병과 함께 버리면 안
        돼. 둘을 구분하지 않으면 색이 섞여서 오염된 페트병이 만들어질 수 있거든.
        오염된 페트병은 바다에 버리거나, 땅에 묻거나, 태워야 하지. 그런데 바다에
        버려진 페트병은 잘게 부수어져 아주 작은 조각이 돼. 물고기들이 이걸
        먹으면 몸 속에 나쁜 물질이 쌓이고, 그 물고리를 먹은 우리까지도 병에 걸릴
        수 있어. 반대로 버려진 페트병을 땅에 묻거나 태우면 이산화탄소나 메테인
        같은 온실 기체가 나오는데, 이 기체는 지구를 점점 뜨거워지게 해.`}
      </Comment>
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

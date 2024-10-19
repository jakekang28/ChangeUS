import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Header({ isMain, children }) {
  const navigate = useNavigate();

  return (
    <Container>
      <span style={{ color: "var(--font-01)", fontWeight: "800" }}>
        체인저스
      </span>

      {!isMain && (
        <ButtonsContainer>
          <ButtonItem buttonName="back" onClick={() => navigate(-1)}>
            <IconImage src={require("../assets/images/icons/icon-back.png")} />
          </ButtonItem>
          <ButtonItem buttonName="home" onClick={() => navigate("/main")}>
            <IconImage src={require("../assets/images/icons/icon-home.png")} />
          </ButtonItem>
        </ButtonsContainer>
      )}
      {children}
    </Container>
  );
}

const Container = styled.div`
  flex: 0 0 auto;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonsContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const ButtonItem = styled.li`
  width: 52px;
  height: 30px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ buttonName }) =>
    buttonName === "home" ? "var(--red)" : "var(--blue)"};
`;

const IconImage = styled.img`
  width: 24px;
  height: 24px;
`;

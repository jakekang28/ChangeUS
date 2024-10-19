import React from "react";
import styled from "styled-components";

export default function NavBar() {
  return (
    <Container>
      <BarContainer>
        <BarImage src={require("../assets/images/navbar.png")} />
      </BarContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  height: 112px;
  background-color: transparent;
`;

const BarContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const BarImage = styled.img`
  width: 100%;
  align-self: flex-end;
`;

import React from "react";
import styled from "styled-components";

export default function BackgroundContainer({ children, style }) {
  return (
    <Container style={style}>
      {children}
      <Image
        src={require("../assets/images/background/background-default_01.png")}
      />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  background: linear-gradient(180deg, #8be99f 0%, #00bda7 48.4%);
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 31px 24px 55px;
`;

const Image = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  right: 0;
`;

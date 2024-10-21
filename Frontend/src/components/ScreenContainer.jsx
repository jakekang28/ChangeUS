import React from "react";
import styled from "styled-components";

export default function ScreenContainer({ children, style }) {
  return <Container style={style}>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 31px 24px 55px;
`;

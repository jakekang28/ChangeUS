import React from "react";
import styled from "styled-components";

export default function Header({ isMain, children }) {
  return (
    <Container>
      <span style={{ color: "var(--font-01)", fontWeight: "800" }}>
        체인저스
      </span>

      {!isMain && <div>gkgkgk</div>}
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

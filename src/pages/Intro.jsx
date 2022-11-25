import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  padding-top: 10vh;
  min-height: 100vh;
  justify-content: center;
  background-color: #b15247;
`;

function Intro() {
  return (
    <Container id="intro">
      <div>Intro</div>
    </Container>
  );
}

export default Intro;
